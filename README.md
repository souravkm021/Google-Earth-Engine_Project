👉 This repository provides Google Earth Engine (GEE)–based tutorials and workflows, covering a range of geospatial data processing and analysis techniques. It includes schema descriptions and practical implementations for:

1. Digital Elevation Models (DEM) collections

2. Geospatial indexing methods

3. Multispectral image collections

4. Image classification with machine learning (r/ML) and accuracy assessment

5. Research project on water resource assessments for coastal vulnerability analysis

🌍 Research Project: NDWI-Based Water Change Detection (1994–2024)

This project investigates long-term surface water dynamics using the Normalized Difference Water Index (NDWI) and Normalized Difference Vegetation Index (NDVI)  in GEE. It evaluates water extent changes over three decades, focusing on the years 1994, 2004, 2014, and 2024, to understand spatial and temporal variations in water coverage.

Source script: gee-scripts/historical_image_analysis4flood_change_detection.js

✨ Key Features

- Compute NDWI from Landsat satellite imagery (Landsat 5 & 8).

- Extract water-covered areas for multiple years (1994, 2004, 2014, 2024).

- Perform change detection analysis to quantify water gained and lost areas.

- Calculate total water-covered area (km²) for each study year.

- Generate professional maps, charts, and graphs for research reporting.

- Export results in CSV/GeoTIFF format for integration with Python workflows.

🛠️ Tools & Technologies

- Google Earth Engine (JavaScript API) → NDWI, NDVI calculation & change detection

- Python (Matplotlib, Plotly, Pandas) → Data visualization & research-ready charts

- Landsat datasets (Landsat 5 and Landsat 8)

📊 Research Applications

- Monitoring surface water distribution over time

- Assessing the impacts of climate change and land-use dynamics

- Supporting water resource management and coastal vulnerability assessments

- Providing reproducible methods for remote sensing-based environmental studies.

