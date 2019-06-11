const w = 1600;
const h = 600;
const paddingX = 25;
const paddingY = 20;

let tooltip = d3.select("body")
              .append("div")
              .attr("class", "tooltip")
              .attr("id", "tooltip")
              .style("opacity", 0);


const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December']

temp_data = new XMLHttpRequest();
temp_data.open("GET",'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json', false);
temp_data.setRequestHeader('Content-Type','text/plain');

var temp_data_table;
temp_data.onreadystatechange = function() {
    if((temp_data.readyState == 4) && (temp_data.status==200)) {
      temp_data_table = JSON.parse(temp_data.responseText);
    }
}
temp_data.send();   