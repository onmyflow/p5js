
var earthquakesData
$.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson", function(data) {
  console.log(data)
    earthquakesData = data.result
});
