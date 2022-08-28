autowatch = 1;
outlets = 2;

colors = ["Blue",
"Orange",
"Yellow",
"Purple",
"Cyan",
"Magenta",
"Red",
"Green",
"Off"];

test_nums = new Array(0, 1, 2, 4);

function check_color(color){
	
	if(colors.indexOf(color) > -1){
		outlet(0, color);
	}else{
		outlet(1, "InvalidColor");
		post("InvalidColor");
	}

	
}