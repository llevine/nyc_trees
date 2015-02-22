var brooklyn_data_array;

function brooklynDataCall() {
	$.post('locations/brooklyn').done(function(data){
		// brooklyn_data_array = data['data'];
		// getZips(data['data']); 
		console.log(data['meta']['view']['columns'][23]['cachedContents']['top']);
	});
}

var brooklyn_zips_unique;
var brooklyn_zips = [];

function getZips(borough) {
	for (var i = 0; i < borough.length; i++) {
		brooklyn_zips << borough[i][23];	
	}
	// brooklyn_zips_unique = brooklyn_zips.unique();
	console.log(brooklyn_zips);
}