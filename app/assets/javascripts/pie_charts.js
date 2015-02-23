$(function(){
	// nv.addGraph(function() {
 //  var chart = nv.models.pieChart()
 //      .x(function(d) { return d.label })
 //      .y(function(d) { return d.value })
 //      .showLabels(true);

 //    d3.select("#chart svg")
 //        .datum(exampleData())
 //        .transition().duration(350)
 //        .call(chart);

console.log('reaching pie_charts');
});

// function getTreeZipData() {
// 	$.post('locations/brooklyn').done(function(data){
// 		var data = data['meta']['view']['columns'][23]['cachedContents']['top'];
// 		return data;
// 	});
// };

function renderGraph() {
	nv.addGraph(function() {
	  var chart = nv.models.pieChart()
	  .x(function(d) { return d.label })
	  .y(function(d) { return d.value })
	  .showLabels(true);

	  d3.select("#chart svg")
	    .datum(getTreeZipData())
	    .transition().duration(350)
	    .call(chart);

	  $('body').append(chart);
  });
// $('body').text('happy time');
};


Pie chart example data. Note how there is only a single array of key-value pairs.
function exampleData() {
  return  [
      { 
        "label": "One",
        "value" : 29.765957771107
      } , 
      { 
        "label": "Two",
        "value" : 0
      } , 
      { 
        "label": "Three",
        "value" : 32.807804682612
      } , 
      { 
        "label": "Four",
        "value" : 196.45946739256
      } , 
      { 
        "label": "Five",
        "value" : 0.19434030906893
      } , 
      { 
        "label": "Six",
        "value" : 98.079782601442
      } , 
      { 
        "label": "Seven",
        "value" : 13.925743130903
      } , 
      { 
        "label": "Eight",
        "value" : 5.1387322875705
      }
    ];
}