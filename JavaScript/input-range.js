autowatch = 1;
outlets = 1;



function output_range(start, end){
	// start = range[0];
	// end = range[1];
	for(i = start; i <= end; i++){
		post(i);
		outlet(0, i);
	}
}