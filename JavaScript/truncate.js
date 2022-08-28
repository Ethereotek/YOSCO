autowatch = 1;
inlets = 1;
outlets = 1;

function test(){
	post("this test");
}

function truncate(name){
	if(name.length > 8){
		outlet(0, name.substring(0,8));
	}else{
		outlet(0, name);}
	}