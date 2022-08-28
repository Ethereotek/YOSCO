autowatch = 1;
outlets = 1;


function test(){
	post("testing range-handler");
}
function simple_iterate(x, y){
	//post(x, y);
	indices = new Array(0);
	for(var i = x; i <= y; i++){
		indices.push(i);	
	};
	outlet(0, indices);
}