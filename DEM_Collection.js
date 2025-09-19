var roi = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[6.210516756476965, 51.67969948001264],
          [6.210516756476965, 49.06701879689175],
          [12.472723787726965, 49.06701879689175],
          [12.472723787726965, 51.67969948001264]]], null, false);

var dataset = ee.Image("USGS/SRTMGL1_003");
var elevation = dataset.select('elevation');
var data = dataset.clip(roi);
var SA_DEM = data.select('elevation');
print(SA_DEM, 'elevation');

Map.addLayer(SA_DEM, {min: 0, max: 300}, 'Studyarea');
Map.addLayer(dataset, {min: 0, max: 300}, 'Dataset');

Export.image.toDrive({
  image:SA_DEM,
  description:'SRTM_DEM2',
  scale:30,
  region:roi,
  maxPixels: 1e13
})
