// Area of Interest
// Should be uploaded as an asset
var geometry = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[90.862132, 25.240586],
          [91.621665, 25.271248],
          [91.674081, 24.736502],
          [90.929787, 24.763727],
          [90.862132, 25.240586]]]);
//Code Editor
aoi = geometry
var aoi = geometry;
Map.centerObject(aoi, 10);
Map.addLayer(aoi, {}, 'AOI');

// Function to get imagery by year and satellite
function getImage(year, satellite) {
  var start = ee.Date.fromYMD(year, 4, 1);
  var end = ee.Date.fromYMD(year, 9, 30);
  
  var collection;
  if (satellite === 'L5') {
    collection = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2')
      .filterBounds(aoi)
      .filterDate(start, end)
      .filterMetadata('CLOUD_COVER', 'less_than', 10);
  } else if (satellite === 'L8') {
    collection = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
      .filterBounds(aoi)
      .filterDate(start, end)
      .filterMetadata('CLOUD_COVER', 'less_than', 10);
  } else if (satellite === 'S2') {
    collection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
      .filterBounds(aoi)
      .filterDate(start, end)
      .filterMetadata('CLOUDY_PIXEL_PERCENTAGE', 'less_than', 10);
  }
  
  return collection.median().clip(aoi);
}

// Load images
var image1994 = getImage(1994, 'L5');
var image2004 = getImage(2004, 'L5');
var image2014 = getImage(2014, 'L8');
var image2024 = getImage(2024, 'S2');

// Visualization parameters
var visLandsat = {bands: ['B4', 'B3', 'B2'], min: 0, max: 3000};
var visSentinel = {bands: ['B4', 'B3', 'B2'], min: 0, max: 3000}; // Sentinel RGB

// Add to Map
Map.addLayer(image1994, visLandsat, '1994');
Map.addLayer(image2004, visLandsat, '2004');
Map.addLayer(image2014, visLandsat, '2014');
Map.addLayer(image2024, visSentinel, '2024');

// Export to Google Drive
Export.image.toDrive({
  image: image1994,
  description: 'Landsat1994',
  scale: 30,
  region: aoi,
  maxPixels: 1e13
});

Export.image.toDrive({
  image: image2004,
  description: 'Landsat2004',
  scale: 30,
  region: aoi,
  maxPixels: 1e13
});

Export.image.toDrive({
  image: image2014,
  description: 'Landsat2014',
  scale: 30,
  region: aoi,
  maxPixels: 1e13
});

Export.image.toDrive({
  image: image2024,
  description: 'Sentinel2024',
  scale: 10,
  region: aoi,
  maxPixels: 1e13
});