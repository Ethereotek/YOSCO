autowatch = 1;
outlets = 5;

/*array vals:
{MonoInputs,
MixBuses,
Matrices,
Scenes, (not num of scenes, but call format)
DCA}
*/
var QL1 = new Array(
	32,
	16,
	8,
	0,
	16
);

var QL5 = new Array(
	64,
	16,
	8,
	0,
	16
);

var CL1 = new Array(
	48,
	24,
	8,
	0,
	16
);

var CL3 = new Array(
	64,
	24,
	8,
	0,
	16
);

var CL5 = new Array(
	72,
	24,
	8,
	0,
	16
);

var TF1 = new Array(
	40,
	20,
	4,
	1,
	8
);

var TF3 = new Array(
	48,
	20,
	4,
	1,
	8
);

var TF5 = new Array(
	48,
	20,
	4,
	1,
	8
);

consoles = [QL1,
QL5,
CL1,
CL3,
CL5,
TF1,
TF3,
TF5];

function test(){
	post("Testing JS Object");
}

function ChooseConsole(index){
	for(var i = 0; i <= 4; i++){
		outlet(i, consoles[index][i]);
	}
}



