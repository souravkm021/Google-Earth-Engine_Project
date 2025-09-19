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
          [91.62090011811142, 25.245952184439865]]], null, false),
    Water = 
    /* color: #0e10d6 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([91.15595420532988, 25.127432630028228]),
            {
              "Class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([91.15107325201076, 25.137595637903466]),
            {
              "Class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([91.18746546392482, 25.145987131614607]),
            {
              "Class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([91.18077067022365, 25.11890695267324]),
            {
              "Class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([91.12785605077785, 25.14357852114507]),
            {
              "Class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([91.12412241582912, 25.130679992021648]),
            {
              "Class": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([91.1164834845547, 25.13215639873903]),
            {
              "Class": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([91.09330919866603, 25.145987131614607]),
            {
              "Class": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([91.09296587591213, 25.150881903217847]),
            {
              "Class": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([91.07949045782131, 25.151736525747374]),
            {
              "Class": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([91.07322481756252, 25.153368061228498]),
            {
              "Class": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([91.07425478582424, 25.13712942689668]),
            {
              "Class": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([91.06901911382717, 25.136196999543085]),
            {
              "Class": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([91.04901480531124, 25.167900745506373]),
            {
              "Class": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([91.05296301698117, 25.17364910689637]),
            {
              "Class": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([91.11905264710812, 25.17768833383062]),
            {
              "Class": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([91.11321616029171, 25.1772222760155]),
            {
              "Class": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([91.04925586250035, 25.14399886378033]),
            {
              "Class": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([91.03981448676792, 25.124728335716714]),
            {
              "Class": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([91.09182788398472, 25.140735520503362]),
            {
              "Class": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([91.24503566291538, 25.129701666312698]),
            {
              "Class": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([91.2500996735355, 25.138793012852034]),
            {
              "Class": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([91.17442413440585, 25.052080647183438]),
            {
              "Class": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([91.10850616565585, 25.0559683863903]),
            {
              "Class": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([91.10816284290195, 25.034973129974222]),
            {
              "Class": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([91.19416519275546, 25.01646321999902]),
            {
              "Class": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([91.21064468494296, 25.032795638413994]),
            {
              "Class": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([91.28514572254062, 25.02338531983271]),
            {
              "Class": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([91.25047012439609, 25.032017953490584]),
            {
              "Class": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([91.24283119312167, 25.035595263321184]),
            {
              "Class": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([91.2335614787662, 25.033573318407903]),
            {
              "Class": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([91.22823997608066, 25.039327997142927]),
            {
              "Class": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([91.02314585200054, 25.012390213888924]),
            {
              "Class": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([91.02795237055523, 24.988120089892597]),
            {
              "Class": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([90.94624155512554, 25.031678430072407]),
            {
              "Class": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([90.9591864914122, 25.042969710575637]),
            {
              "Class": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([90.96399300996688, 25.055566474340438]),
            {
              "Class": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([91.03454583589462, 25.054166897842297]),
            {
              "Class": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([91.0913657516661, 24.971719233372028]),
            {
              "Class": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([91.0693930954161, 24.958491346662687]),
            {
              "Class": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([91.06458657686142, 24.966583869732755]),
            {
              "Class": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([91.0606383651915, 24.976387559769925]),
            {
              "Class": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([91.03265756074813, 24.96697291993604]),
            {
              "Class": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([91.0104274124327, 24.966039197381797]),
            {
              "Class": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([91.00562089387802, 24.95872479228072]),
            {
              "Class": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([90.99746697847274, 24.953900159547004]),
            {
              "Class": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([91.38026911233686, 25.150209780098233]),
            {
              "Class": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([91.37923914407514, 25.144304919307764]),
            {
              "Class": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([91.45700174783491, 25.111667643954227]),
            {
              "Class": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([91.4921923301103, 25.103429239582674]),
            {
              "Class": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([91.52120310281538, 25.100164812620275]),
            {
              "Class": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([91.31761270974897, 25.01914806041717]),
            {
              "Class": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([91.11505228494428, 25.019459167600846]),
            {
              "Class": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([91.17925363992475, 25.074512712610247]),
            {
              "Class": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([91.15384775613569, 25.116486075992878]),
            {
              "Class": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([90.92794138406538, 25.087261701050714]),
            {
              "Class": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([91.25581539322712, 24.954753656069443]),
            {
              "Class": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([91.20672023941853, 24.915215950148866]),
            {
              "Class": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([91.37941158463337, 24.924556709905353]),
            {
              "Class": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([91.57591079622917, 25.022912582600224]),
            {
              "Class": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([91.38811324984245, 25.010468030395483]),
            {
              "Class": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([91.39515136629753, 25.01202366839851]),
            {
              "Class": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([91.41403411776237, 24.9882202517432]),
            {
              "Class": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([91.43841003328971, 24.991176482337902]),
            {
              "Class": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([91.26537536532096, 25.094133344093496]),
            {
              "Class": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([91.29593109041862, 25.078275535176637]),
            {
              "Class": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([91.13971923739128, 24.913045901486402]),
            {
              "Class": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([91.01303314119987, 24.93452896911948]),
            {
              "Class": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([90.98350738436393, 24.917405087443267]),
            {
              "Class": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([90.97183441073112, 24.916159621461535]),
            {
              "Class": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([90.91655944735221, 24.94168915971543]),
            {
              "Class": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([90.90969299227409, 24.974682919522774]),
            {
              "Class": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([90.88669036776237, 24.987442284507903]),
            {
              "Class": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([90.96428131014518, 24.99895569679672]),
            {
              "Class": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([90.997926940028, 25.04095494227833]),
            {
              "Class": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([91.03946899325065, 25.051219238328176]),
            {
              "Class": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([91.01097320467643, 25.08418358648191]),
            {
              "Class": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([91.26949523836784, 25.070190371386047]),
            {
              "Class": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([91.29902099520378, 25.074543987452326]),
            {
              "Class": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([91.32435025058945, 24.96417044795156]),
            {
              "Class": 0,
              "system:index": "79"
            })]),
    Vegetation = 
    /* color: #207c0c */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([91.24805220457776, 25.166243540666017]),
            {
              "Class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([91.13552817198499, 25.20529263683706]),
            {
              "Class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([91.14602205088151, 25.143590704518214]),
            {
              "Class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([90.96746770283367, 25.159459401263295]),
            {
              "Class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([91.0278066768327, 25.17045172497809]),
            {
              "Class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([91.32754878239734, 25.195516961217837]),
            {
              "Class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([91.44651011662586, 25.19334232773786]),
            {
              "Class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([91.41955928044422, 25.20530233131564]),
            {
              "Class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([91.34025172429187, 25.179516964144472]),
            {
              "Class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([91.36823252873523, 25.16809820599671]),
            {
              "Class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([91.20951636726531, 24.986613356943415]),
            {
              "Class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([91.25517829353484, 24.995170783449886]),
            {
              "Class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([91.27337439949187, 25.020061726797795]),
            {
              "Class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([91.30727752144011, 25.00053831963596]),
            {
              "Class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([91.30264266426238, 24.996415450401475]),
            {
              "Class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([91.28959639961394, 24.982879020512065]),
            {
              "Class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([91.34263976509246, 24.99820463705894]),
            {
              "Class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([90.91194137031707, 24.95899214532736]),
            {
              "Class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([91.25629409248504, 25.129910415955376]),
            {
              "Class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([91.32976516182097, 25.225452074985103]),
            {
              "Class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([91.4410017340866, 25.227315557199212]),
            {
              "Class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([91.43138869697722, 25.23880639981534]),
            {
              "Class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([91.60133346016082, 25.230731867094466]),
            {
              "Class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([90.9466169684616, 24.92132394388934]),
            {
              "Class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([91.01013167793425, 24.916030794799344]),
            {
              "Class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([91.17801650459441, 24.96490594046842]),
            {
              "Class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([91.39911635811004, 24.93906990324283]),
            {
              "Class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([91.53938440422726, 25.158282213101145]),
            {
              "Class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([91.52359155754758, 25.153931578569168]),
            {
              "Class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([91.44050745110226, 25.160768220316537]),
            {
              "Class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([91.59156946282101, 24.95674770157132]),
            {
              "Class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([90.98972467522336, 24.96515158394825]),
            {
              "Class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([91.10147623161984, 25.205585341100274]),
            {
              "Class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([91.1473956499548, 25.204420460036708]),
            {
              "Class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([91.52289453186488, 25.21611425009237]),
            {
              "Class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([91.4913088385055, 25.224189753417203]),
            {
              "Class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([91.31209436096644, 25.221083854042277]),
            {
              "Class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([91.22008386291957, 25.209901959703725]),
            {
              "Class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([91.18231835998988, 25.22543209096036]),
            {
              "Class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([91.00653710998988, 25.22170504026184]),
            {
              "Class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([90.96808496155238, 25.224189753417203]),
            {
              "Class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([90.92413964905238, 25.22481092377503]),
            {
              "Class": 1,
              "system:index": "41"
            })]);
//Code Editor
var imageCollection = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2") // for L8 Imagery collection
//var imageCollection = ee.ImageCollection("LANDSAT/LT05/C02/T1_L2")
  .filterBounds(AOI)
  .filterDate('2024-01-01', '2024-12-31') 
  .filter(ee.Filter.lt('CLOUD_COVER', 10));

// Apply scaling factors for optical and thermal bands
function applyScaleFactors(image) {
  var opticalBands = image.select(['SR_B.*']).multiply(0.0000275).add(-0.2);
  var thermalBands = image.select(['ST_B.*']).multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true)
              .addBands(thermalBands, null, true);
}

// Apply scaling and generate median composite
var image = imageCollection
  .map(applyScaleFactors)
  .median()
  .clip(AOI);

// Visualization parameters for True Color (SR_B4 = Red, SR_B3 = Green, SR_B2 = Blue)
var visParams = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],//for L8
  //bands: ['SR_B3', 'SR_B2', 'SR_B1'],//for L5
  min: 0.0,
  max: 0.3,
};

Map.addLayer(image, visParams, 'Landsat 8 - 2024');//Landsat 5 - 2004, Landsat 8 - 2014, Landsat 8 - 2024
Map.centerObject(AOI, 8);
Map.addLayer(AOI, {}, 'AOI');

print(image)

//End of the Image Collection

//merge the Training Points
var trainingPoints = Water.merge(Vegetation);
var trainingSample = trainingPoints.map(function(point){return point.buffer(30);})

//Select bands for classification
var label = 'Class';
var bands = ['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B6', 'SR_B7', 'SR_QA_AEROSOL', 'ST_B10', 'ST_ATRAN']

// Here should be selecting bands from the image not from AOI
var input = image.select(bands);

// Sample the image using the points
var trainingImage = input.sampleRegions({
  collection: trainingSample,
  properties: [label], // Must exist in your drawn points!
  scale: 30
});

// Define split threshold (e.g., 70% training, 30% testing)
var trainingData = trainingImage.randomColumn();
var trainingSet = trainingData.filter(ee.Filter.lessThan('random', 0.8));
var testSet = trainingData.filter(ee.Filter.greaterThanOrEquals('random', 0.8));

// Train the classifier on training set
var classifier = ee.Classifier.smileRandomForest(64).train({
  features: trainingSet,
  classProperty: label,
  inputProperties: bands
});


//Classify the image
var classified = image.classify(classifier);


//Visualize the result
Map.addLayer(classified, 
  {min: 0, max: 1, palette: ['0000FF', '00FF00']}, // 0 = Water, 1 = Vegetation
  'LULC Classification');


//Accuracy Assessment
var testClassification = testSet.classify(classifier);
var confusionMatrix = testClassification.errorMatrix('Class', 'classification');
print('Confusion Matrix:', confusionMatrix);
print('Overall Accuracy:', confusionMatrix.accuracy());

//Kappa Validation
var kappa = confusionMatrix.kappa();
print ('Kappa', kappa)