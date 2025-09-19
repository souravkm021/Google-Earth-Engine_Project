// Area of Interest
// Should be uploaded as an asset
var AOI = ee.FeatureCollection("projects/ee-sampleprojects/assets/AOI_TG_V2"),
    geometry = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.MultiPoint();
//Code Editor

//Project: "Flood assessment and surface water change detection using NDWI in Google Earth Engine and Python"

//Importing Landsat 8 2024 Image
var dataset2024 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2') // for L8 Imagery collection
//var dataset2004 = ee.ImageCollection("LANDSAT/LT05/C02/T1_L2")// for L5 Imagery collection
  .filterBounds(AOI)
  .filterDate('2024-04-01', '2024-11-30') 
  .filterMetadata('CLOUD_COVER', 'less_than', 10);

// Applies scaling factors.
function applyScaleFactors(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true)
              .addBands(thermalBands, null, true);
}

// Apply scaling and generate median composite
var image24 = dataset2024.map(applyScaleFactors)
  .median()
  .clip(AOI); 

// Visualization parameters for True Color
var visualization = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],
  min: 0.0,
  max: 0.3,
};

Map.centerObject(AOI, 10);
Map.addLayer(image24, visualization, 'Landsat 8 - 2024');

//print(image)

// For Landsat 8 2014 Image

var dataset2014 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2') // for L8 Imagery collection
  .filterBounds(AOI)
  .filterDate('2014-04-01', '2014-11-30') 
  .filterMetadata('CLOUD_COVER', 'less_than', 10);

// Applies scaling factors.
function applyScaleFactors(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true)
              .addBands(thermalBands, null, true);
}

// Apply scaling and generate median composite
var image14 = dataset2014.map(applyScaleFactors)
  .median()
  .clip(AOI); 

// Visualization parameters for True Color
var visualization = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],
  min: 0.0,
  max: 0.3,
};

Map.centerObject(AOI, 10);
Map.addLayer(image14, visualization, 'Landsat 8 - 2014');

//print(image)

//Importing Landsat 5 2004 Image
var dataset2004 = ee.ImageCollection("LANDSAT/LT05/C02/T1_L2")// for L5 Imagery collection
  .filterBounds(AOI)
  .filterDate('2004-04-01', '2004-11-30') 
  .filterMetadata('CLOUD_COVER', 'less_than', 1);

// Applies scaling factors.
function applyScaleFactors(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true)
              .addBands(thermalBands, null, true);
}

// Apply scaling and generate median composite
var image04 = dataset2004.map(applyScaleFactors)
  .median()
  .clip(AOI); 

// Visualization parameters for True Color
var visualization = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],
  min: 0.0,
  max: 0.3,
};

Map.centerObject(AOI, 10);
Map.addLayer(image04, visualization, 'Landsat 5 - 2004');

//Importing Landsat 5 1994 Image
var dataset1994 = ee.ImageCollection("LANDSAT/LT05/C02/T1_L2")// for L5 Imagery collection
  .filterBounds(AOI)
  .filterDate('1994-04-01', '1994-11-30') 
  .filterMetadata('CLOUD_COVER', 'less_than', 10);

// Applies scaling factors.
function applyScaleFactors(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true)
              .addBands(thermalBands, null, true);
}

// Apply scaling and generate median composite
var image94 = dataset1994.map(applyScaleFactors)
  .median()
  .clip(AOI); 

// Visualization parameters for True Color
var visualization = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],
  min: 0.0,
  max: 0.3,
};

Map.centerObject(AOI, 10);
Map.addLayer(image94, visualization, 'Landsat 5 - 1994');
// End of the Image Collection 

// Calculation of NDVI and NDWI 
// For landsat 8, NDVI = (NIR - Red) / (NIR + Red) => (B5 - B4) / (B5 + B4)
// For landsat 8, NDWI = (Green - NIR) / (Green + NIR) => (B3 - B5) / (B3 + B5)

// For Landsat 8 2024
var ndvi = image24.normalizedDifference(['SR_B5', 'SR_B4']).rename('NDVI');
var ndwi = image24.normalizedDifference(['SR_B3', 'SR_B5']).rename('NDWI');

// NDVI Classes: NDVI < 0.2 = Non-vegetation and NDVI >= 0.2 = Vegetation
var ndvi_class24 = ndvi.gt(0.2).rename('NDVI_Class');  // Binary: 1 = vegetation, 0 = non-vegetation

//Classify NDWI NDWI > 0.3 = Water and NDWI <= 0.3 = Non-water
var ndwi_class24 = ndwi.gt(0.3).rename('NDWI_Class24');  // Binary: 1 = water, 0 = non-water

//Added the MapLayer Classified NDVI AND NDWI to the Analysis
Map.addLayer(ndvi, {min: -1, max: 1, palette: ['brown', 'yellow', 'green']}, 'NDVI');
Map.addLayer(ndvi_class24.updateMask(ndvi_class24), {palette: ['00FF00']}, 'Vegetation Mask 2024 (NDVI > 0.2)');

Map.addLayer(ndwi, {min: -1, max: 1, palette: ['white', 'blue']}, 'NDWI');
Map.addLayer(ndwi_class24.updateMask(ndwi_class24), {palette: ['0000FF']}, 'Water Mask 2024 (NDWI > 0.3)');

// For Landsat 8 2014
var ndvi = image14.normalizedDifference(['SR_B5', 'SR_B4']).rename('NDVI');
var ndwi = image14.normalizedDifference(['SR_B3', 'SR_B5']).rename('NDWI');

// NDVI Classes: NDVI < 0.2 = Non-vegetation and NDVI >= 0.2 = Vegetation
var ndvi_class14 = ndvi.gt(0.2).rename('NDVI_Class');  // Binary: 1 = vegetation, 0 = non-vegetation

//Classify NDWI NDWI > 0.3 = Water and NDWI <= 0.3 = Non-water
var ndwi_class14 = ndwi.gt(0.3).rename('NDWI_Class14');  // Binary: 1 = water, 0 = non-water

//Added the MapLayer Classified NDVI AND NDWI to the Analysis
Map.addLayer(ndvi, {min: -1, max: 1, palette: ['brown', 'yellow', 'green']}, 'NDVI');
Map.addLayer(ndvi_class14.updateMask(ndvi_class14), {palette: ['00FF00']}, 'Vegetation Mask 2014 (NDVI > 0.2)');

Map.addLayer(ndwi, {min: -1, max: 1, palette: ['white', 'blue']}, 'NDWI');
Map.addLayer(ndwi_class14.updateMask(ndwi_class14), {palette: ['0000FF']}, 'Water Mask 2014 (NDWI > 0.3)');

// For Landsat 5 2004
var ndvi = image04.normalizedDifference(['SR_B4', 'SR_B3']).rename('NDVI');
var ndwi = image04.normalizedDifference(['SR_B2', 'SR_B4']).rename('NDWI');

// NDVI Classes: NDVI < 0.2 = Non-vegetation and NDVI >= 0.2 = Vegetation
var ndvi_class04 = ndvi.gt(0.2).rename('NDVI_Class');  // Binary: 1 = vegetation, 0 = non-vegetation

//Classify NDWI NDWI > 0.3 = Water and NDWI <= 0.3 = Non-water
var ndwi_class04 = ndwi.gt(0.3).rename('NDWI_Class04');  // Binary: 1 = water, 0 = non-water

//Added the MapLayer Classified NDVI AND NDWI to the Analysis
Map.addLayer(ndvi, {min: -1, max: 1, palette: ['brown', 'yellow', 'green']}, 'NDVI');
Map.addLayer(ndvi_class04.updateMask(ndvi_class04), {palette: ['00FF00']}, 'Vegetation Mask 2004 (NDVI > 0.2)');

Map.addLayer(ndwi, {min: -1, max: 1, palette: ['white', 'blue']}, 'NDWI');
Map.addLayer(ndwi_class04.updateMask(ndwi_class04), {palette: ['0000FF']}, 'Water Mask 2004 (NDWI > 0.3)');

// For Landsat 5 1994
var ndvi = image94.normalizedDifference(['SR_B4', 'SR_B3']).rename('NDVI');
var ndwi = image94.normalizedDifference(['SR_B2', 'SR_B4']).rename('NDWI');

// NDVI Classes: NDVI < 0.2 = Non-vegetation and NDVI >= 0.2 = Vegetation
var ndvi_class94 = ndvi.gt(0.2).rename('NDVI_Class');  // Binary: 1 = vegetation, 0 = non-vegetation

//Classify NDWI NDWI > 0.3 = Water and NDWI <= 0.3 = Non-water
var ndwi_class94 = ndwi.gt(0.3).rename('NDWI_Class94');  // Binary: 1 = water, 0 = non-water

//Added the MapLayer Classified NDVI AND NDWI to the Analysis
Map.addLayer(ndvi, {min: -1, max: 1, palette: ['brown', 'yellow', 'green']}, 'NDVI');
Map.addLayer(ndvi_class94.updateMask(ndvi_class94), {palette: ['00FF00']}, 'Vegetation Mask 1994 (NDVI > 0.2)');

Map.addLayer(ndwi, {min: -1, max: 1, palette: ['white', 'blue']}, 'NDWI');
Map.addLayer(ndwi_class94.updateMask(ndwi_class94), {palette: ['0000FF']}, 'Water Mask 1994 (NDWI > 0.3)');

//Change Detection Function 
function detectChange(newer, older, name) {
  var change = newer.subtract(older).rename(name);
  Map.addLayer(change,
    {min: -1, max: 1, palette: ['red','green','blue']}, 
    name); //-1 means the water lost and +1 means the water gained
  return change; 
}
//Variable that detects the change 
var change_2024_2014 = detectChange(ndwi_class24, ndwi_class14, 'Change_2024_2014');
var change_2014_2004 = detectChange(ndwi_class14, ndwi_class04, 'Change_2014_2004');
var change_2004_1994 = detectChange(ndwi_class04, ndwi_class94, 'Change_2004_1994');
var change_2024_1994 = detectChange(ndwi_class24, ndwi_class94, 'Change_2024_1994');

// --- Title of the Map---
var title = ui.Label('Flood Change Detection 1994–2024', {
  fontWeight: 'bold',
  fontSize: '20px',
  textAlign: 'center',
  stretch: 'horizontal'
});
Map.add(title);

// --- Legend ---
function makeLegend() {
  var legend = ui.Panel({style: {position: 'bottom-left'}});
  legend.add(ui.Label('Legend'));

  var makeRow = function(color, name) {
    var colorBox = ui.Label('', {backgroundColor: color, padding: '8px', margin: '0 0 4px 0'});
    var description = ui.Label(name, {margin: '0 0 4px 6px'});
    return ui.Panel([colorBox, description], ui.Panel.Layout.Flow('horizontal'));
  };

  legend.add(makeRow('red', 'Water Lost'));
  legend.add(makeRow('blue', 'Water Gained'));

  Map.add(legend);
}
makeLegend();

// Convert to outline (no fill, just border)
var outline = ee.Image().byte().paint({
  featureCollection: ee.FeatureCollection(AOI),
  color: 1,
  width: 2   // thickness of border
});

Map.addLayer(outline, {palette: 'red'}, 'AOI_Border'); //adding the AOI red hollow area

//Caculate the area of the area of the water
//
//for 2024
var area2024 = ndwi_class24.multiply(ee.Image.pixelArea())
                .reduceRegion({
                  reducer: ee.Reducer.sum(),
                  geometry: AOI,
                  scale: 30,
                  maxPixels: 1e13
                });

print('Water Area 2024 (sq.m):', area2024);
// Convert to sq.km
var area2024_km2 = ee.Number(area2024.get('NDWI_Class24')).divide(1e6);
print('Water Area 2024 (sq.km):', area2024_km2);

//for 2014
var area2014 = ndwi_class14.multiply(ee.Image.pixelArea())
                .reduceRegion({
                  reducer: ee.Reducer.sum(),
                  geometry: AOI,
                  scale: 30,
                  maxPixels: 1e13
                });

print('Water Area 2014 (sq.m):', area2014);
// Convert to sq.km
var area2014_km2 = ee.Number(area2014.get('NDWI_Class14')).divide(1e6);
print('Water Area 2014 (sq.km):', area2014_km2);

//for 2004
var area2004 = ndwi_class04.multiply(ee.Image.pixelArea())
                .reduceRegion({
                  reducer: ee.Reducer.sum(),
                  geometry: AOI,
                  scale: 30,
                  maxPixels: 1e13
                });

print('Water Area 2004 (sq.m):', area2004);
// Convert to sq.km
var area2004_km2 = ee.Number(area2004.get('NDWI_Class04')).divide(1e6);
print('Water Area 2004 (sq.km):', area2004_km2);

//for 1994
var area1994 = ndwi_class94.multiply(ee.Image.pixelArea())
                .reduceRegion({
                  reducer: ee.Reducer.sum(),
                  geometry: AOI,
                  scale: 30,
                  maxPixels: 1e13
                });

print('Water Area 1994 (sq.m):', area1994);
// Convert to sq.km
var area1994_km2 = ee.Number(area1994.get('NDWI_Class94')).divide(1e6);
print('Water Area 1994 (sq.km):', area1994_km2); 
//
//Calculation of area lost and gained
//
// Function to calculate gained and lost water area
function calculateChangeArea(changeImage, AOI, name) {
  var pixelArea = ee.Image.pixelArea();

  // Water gained (value = 1)
  var gained = changeImage.eq(1).multiply(pixelArea)
                .reduceRegion({
                  reducer: ee.Reducer.sum(),
                  geometry: AOI,
                  scale: 30,
                  maxPixels: 1e13
                }).get(name);

  // Water lost (value = -1)
  var lost = changeImage.eq(-1).multiply(pixelArea)
                .reduceRegion({
                  reducer: ee.Reducer.sum(),
                  geometry: AOI,
                  scale: 30,
                  maxPixels: 1e13
                }).get(name);

  print(name + ' - Water Gained (sq.km):', ee.Number(gained).divide(1e6));
  print(name + ' - Water Lost (sq.km):', ee.Number(lost).divide(1e6));
}

// Apply to your change images
calculateChangeArea(change_2024_2014, AOI, 'Change_2024_2014');
calculateChangeArea(change_2014_2004, AOI, 'Change_2014_2004');
calculateChangeArea(change_2004_1994, AOI, 'Change_2004_1994');
calculateChangeArea(change_2024_1994, AOI, 'Change_2024_1994');

// End of the Project :)

