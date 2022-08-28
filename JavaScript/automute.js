autowatch = 1;
outlets = 2;

var automute = 0;

function test_outlets(){
	outlet(0, "outlet 0");
	outlet(1, "outlet 1");
}

function get_automute(){
	post(automute);
}

function set_automute(am_state){
	/*when automute toggle is switched
	it is sent to input_dca subpatcher
	and runs this function to update the
	automute variable*/

	//am_state = auto-mute-state
	automute = am_state;
	//post(automute);
}



function handle_assign(assign){
	/* this func handles the assignment boolean
	depending on the value of the automute variable*/

	//if automute is off, just send to first outlet
	//which formats the SCP and does nothing special
	if(automute==0){
		outlet(0, assign);

	//if automute is on, then run the dca_assign func
	}else if(automute==1){
		dca_assign(assign);
		//post("automute == 1")
	}
}

function dca_assign(assignment){
	//if assigning to DCA:
		//make assignment first (outlet 0)
		//then turn channel on (outlet 1)
	if(assignment == 1){
		outlet(0, assignment);
		outlet(1, 1);
	//if un-assigning from DCA:
		//turn channel off (outlet 1)
		//then unassign from DCA (outlet 0)
	}else if(assignment == 0){
		outlet(1, 0);
		outlet(0, assignment);
	}
}