# YOSCO
## Yamaha-OSC Bridge -- Introduction

Yosco is a protocol bridge that receives OSC messages and translates them into a format that can be understood by Yamaha’s CL, QL and TF series consoles. Yosco runs on the same machine as the OSC sender, which can be any arbitrary application, such as QLab. It is not a controller in itself, it is a translator.

**NOTE:** This verison of YOSCO is *not* compatible with Mac M1 architecture.

### **UI Indicators**

`Send:` Blinks when Yosco successfully dispatches a command to the network. Note that this does not indicate whether the message has reached a destination, nor whether it has been successfully interpreted, i.e. your Yamaha device may receive the message, but fail to properly read it.

`Receive:` Blinks when Yosco successfully receives an OSC message. Note that this does not indicate whether the message is valid or can be properly interpreted and translated by the Yosco application. Invalid messages and arguments generally open an error dialog.

### **UI Controls**

`UDP/TCP:` This is for testing purposes only. Toggle this to TCP, your Yamaha console will not read UDP packets.

`Active:` Toggles the bridge on and off.

`Automute:` Toggle this on to handle muting and unmuting channels automatically when assigning and unassigning them from DCA’s.

`Receive Port:` This is the network port that Yosco will receive OSC messages on. This is the port to which your OSC application should send messages.

`Console IP:` The IP address of the console you want to control. Currently, only one console can be controlled at once.

`Console Model:` Allows you to select the model of console you would like to control. While the OSC API is identical for each model, this is not the case for the format to which they are being converted. Further, Yosco will place constraints on what you can target, e.g. channel numbers, and will raise an error if you target a channel outside the console’s range, e.g. calling channel 64 on a QL1.

### **Building the Application**
First you will have to edit the build_script.txt file, which lives in the parent directory. Replace <path/to/package> with the directory path on your machine, for example: 
- folder C:/Users/user-account/Documents/YOSCO/JavaScript
- folder C:/Users/user-account/Documents/YOSCO/SubPatches

Save the file. Then open the patcher and navigate to `File>Build Collective/Application`. In the Build window, click `Open Script` and open the `build_script` text file that you just edited. Then click build. Save as type `Application (*.exe)` on Windows.

### **Using the Patcher**

If you choose to use the patcher, you may have to make some changes to the file settings. This is because it uses external javascript and subpatches. In Max, navigate to `Options>File Preferences` and click the `+` symbol in the bottom left-hand corner to add a path. Add a path to the `JavaScript` directory in the package folder. Click the `+` again and add another path to the `SubPatches` directory. Restart Max.

### **Project Set Up**

*Example using QLab*

-	In QLab `Settings>Network` create a network patch with the destination set to “localhost” and any port number; the 35000-36000 range is recommended. 
-	Create a Network Cue and select the Network Patch you just created.
-	Enter a valid OSC string, e.g. `/set/mixer/input/5/fader/level -20`

-	In YOSCO, in the `Receive Port` parameter, enter the port number you designated in the QLab Network patch.
-	Enter the IP Address of the console you would like to control.
-	Select the model you want to control.

You are now ready to control your Yamaha console with OSC.

### **API Documentation**
In the `Documentation` folder you will find a web doc with the OSC API detailing all available set commands as well as bridge control commands.



