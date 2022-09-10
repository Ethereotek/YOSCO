# YOSCO
 Yamaha-OSC Bridge

Yosco is a protocol bridge that receives OSC messages and translates them into a format that can be understood by Yamaha’s CL, QL and TF series consoles. Yosco runs on the same machine as the OSC sender, which can be any arbitrary application, such as QLab. It is not a controller in itself, it is a translator.

Note that the UDP/TCP toggle is for testing purposes only.
Use UDP to send test packets on the local-host.
Use TCP to send packets to a Yamaha console.