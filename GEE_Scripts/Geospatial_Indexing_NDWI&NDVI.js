// Area of Interest
// Should be uploaded as an asset
var AOI = 
    /* color: #0b4a8b */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[90.87657638764267, 25.245952184439865],
          [90.87657638764267, 24.871500467657725],
          [91.62090011811142, 24.871500467657725],
          [91.62090011811142, 25.245952184439865]]], null, false);
//Code Editor
var dataset2024 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2') // for L8 Imagery collection
//var imageCollection = ee.ImageCollection("LANDSAT/LT05/C02/T1_L2")
  .filterBounds(AOI)
  .filterDate('2024-01-01', '2024-12-31') 
  .filterMetadata('CLOUD_COVER', 'less_than', 10);

// Applies scaling factors.
function applyScaleFactors(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true)
              .addBands(thermalBands, null, true);
}

// Apply scaling and generate median composite
var image = dataset2024.map(applyScaleFactors)
  .median()
  .clip(AOI); 

// Visualization parameters for True Color
var visualization = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],
  min: 0.0,
  max: 0.3,
};

Map.centerObject(AOI, 10);
Map.addLayer(image, visualization, 'Landsat 8 - 2024');

print(image)
// End of the Image Collection 

// Calculation of NDVI and NDWI 
// NDVI = (NIR - Red) / (NIR + Red) => (B5 - B4) / (B5 + B4)
// NDWI = (Green - NIR) / (Green + NIR) => (B3 - B5) / (B3 + B5)

var ndvi = image.normalizedDifference(['SR_B5', 'SR_B4']).rename('NDVI');
var ndwi = image.normalizedDifference(['SR_B3', 'SR_B5']).rename('NDWI');

// NDVI Classes: NDVI < 0.2 = Non-vegetation and NDVI >= 0.2 = Vegetation
var ndvi_class = ndvi.gt(0.2).rename('NDVI_Class');  // Binary: 1 = vegetation, 0 = non-vegetation

//Classify NDWI NDWI > 0.3 = Water and NDWI <= 0.3 = Non-water
var ndwi_class = ndwi.gt(0.3).rename('NDWI_Class');  // Binary: 1 = water, 0 = non-water

//Added the MapLayer Classified NDVI AND NDWI to the Analysis
Map.addLayer(ndvi, {min: -1, max: 1, palette: ['brown', 'yellow', 'green']}, 'NDVI');
Map.addLayer(ndvi_class.updateMask(ndvi_class), {palette: ['00FF00']}, 'Vegetation Mask (NDVI > 0.2)');

Map.addLayer(ndwi, {min: -1, max: 1, palette: ['white', 'blue']}, 'NDWI');
Map.addLayer(ndwi_class.updateMask(ndwi_class), {palette: ['0000FF']}, 'Water Mask (NDWI > 0.3)');
