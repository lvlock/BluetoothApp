import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';

import { BLE } from '@ionic-native/ble';


@Component({
	selector: 'page-led',
	templateUrl: 'led.html'
})

export class LEDPage {

	public isScanning: boolean;
	public var2: string;
	public devices = [];
	public connected_device: any;
	public info_device = [];
	public serviceUUID: string;
	public characteristicUUID: string;


	constructor(private ble: BLE) {
			
	}

	led_on(event) {
		if (this.connected_device != undefined) {
			console.log("led ON");
			document.getElementById("state").innerHTML = "led ON";
			var data = new Uint8Array(1);
			data[0] = 1;
			this.ble.writeWithoutResponse(this.connected_device.id, this.serviceUUID, this.characteristicUUID, data.buffer);
		} else {
			document.getElementById("test").innerHTML = "led_on() ERROR: No connected device: " + this.connected_device;
		}
	}


	led_off(event) {
		if (this.connected_device != undefined) {
			console.log("led OFF");
			document.getElementById("state").innerHTML = "led OFF";
			var data = new Uint8Array(1);
			data[0] = 0;
			this.ble.writeWithoutResponse(this.connected_device.id, this.serviceUUID, this.characteristicUUID, data.buffer);
		} else {
			document.getElementById("test").innerHTML = "led_off() ERROR: No connected device: " + this.connected_device;
		}
	}

  ble_scan(event) {
		this.devices = [];

		document.getElementById("scan").innerHTML = "Scanning for BLE devices";

		this.ble.scan([], 15).subscribe(
			(device) => {
				this.devices.push(device);
				document.getElementById("scan").innerHTML = "Scan successful";
			},
			(reason) => {
				document.getElementById("scan").innerHTML = "BLE scan failed: " + reason;
			}
		);
	}


	connect(device) {
		if(device != undefined) {
			
			document.getElementById("scan").innerHTML = "Attempting to connect...";
			this.ble.connect(device.id).subscribe(
				(success) => {
					document.getElementById("state").innerHTML = "Connected: " + success;
					this.connected_device = success;
					this.get_IDs();
				},
				(reason) => {
					document.getElementById("test").innerHTML = "connection failed: " + reason;
				}
			);
		} else {
			document.getElementById("test").innerHTML = "Cannot connect. No device: "+ device;
		}
	}


	disconnect(event) {
		if (this.connected_device != undefined) {
			document.getElementById("scan").innerHTML = "Attempting to disconnect...";
			this.ble.disconnect(this.connected_device.id).then(
				(success) => {
					document.getElementById("state").innerHTML = "Disconnected";
					document.getElementById("test").innerHTML = "Disconnection successful: " + success;
					
				},
				(reason) => {
					document.getElementById("test").innerHTML = "Failed to disconnect: " + reason;
				}
			);
		} else {
			document.getElementById("test").innerHTML = "Cannot disconnect. No connected device: " + this.connected_device;
		}
	}


	emergency_stop(event) {
		if (this.connected_device != undefined) {
			document.getElementById("state").innerHTML = "EMERGENCY STOP";
			var data = new Uint8Array(1);
			data[0] = 10;
			this.ble.writeWithoutResponse(this.connected_device.id, this.serviceUUID, this.characteristicUUID, data.buffer);
		} else {
			document.getElementById("test").innerHTML = "emergency_stop() ERROR: No connected device: " + this.connected_device;
		}
	}


	brake(event) {
		if (this.connected_device != undefined) {
			document.getElementById("state").innerHTML = "BRAKE";
			var data = new Uint8Array(1);	// CHANGE
			data[0] = 0;
			/*
			this.ble.writeWithoutResponse(this.connected_device.id, "FFE0", "FFE1", data.buffer).then(
				(success) => {
					document.getElementById("test").innerHTML = "BRAKE: " + success;
				},
				(reason) => {
					document.getElementById("test").innerHTML = "Failed to BRAKE: " + reason;
				}
			);*/
			this.ble.writeWithoutResponse(this.connected_device.id, this.serviceUUID, this.characteristicUUID, data.buffer);
		} else {
			document.getElementById("test").innerHTML = "brake() ERROR: No connected device: " + this.connected_device;
		}
	}


	forward(event) {
		if (this.connected_device != undefined) {
			document.getElementById("state").innerHTML = "FORWARD";
			var data = new Uint8Array(1);	// CHANGE
			data[0] = 1;
			/*
			this.ble.writeWithoutResponse(this.connected_device.id, "FFE0", "FFE1", data.buffer).then(
				(success) => {
					document.getElementById("test").innerHTML = "FORWARD: " + success;
				},
				(reason) => {
					document.getElementById("test").innerHTML = "Failed to move FORWARD: " + reason;
				}
			);*/
			this.ble.writeWithoutResponse(this.connected_device.id, this.serviceUUID, this.characteristicUUID, data.buffer);
		} else {
			document.getElementById("test").innerHTML = "forward() ERROR: No connected device: " + this.connected_device;
		}
	}


	backward(event) {
		if (this.connected_device != undefined) {
			document.getElementById("state").innerHTML = "BACKWARD";
			var data = new Uint8Array(1);	// CHANGE
			data[0] = 2;
			/*
			this.ble.writeWithoutResponse(this.connected_device.id, "FFE0", "FFE1", data.buffer).then(
				(success) => {
					document.getElementById("test").innerHTML = "BACKWARD: " + success;
				},
				(reason) => {
					document.getElementById("test").innerHTML = "Failed to move BACKWARD: " + reason;
				}
			);*/
			this.ble.writeWithoutResponse(this.connected_device.id, this.serviceUUID, this.characteristicUUID, data.buffer);
		} else {
			document.getElementById("test").innerHTML = "backward() ERROR: No connected device: " + this.connected_device;
		}
	}


	left(event) {
		if (this.connected_device != undefined) {
			document.getElementById("state").innerHTML = "LEFT";
			var data = new Uint8Array(1);	// CHANGE
			data[0] = 3;
			/*
			this.ble.writeWithoutResponse(this.connected_device.id, "FFE0", "FFE1", data.buffer).then(
				(success) => {
					document.getElementById("test").innerHTML = "LEFT: " + success;
				},
				(reason) => {
					document.getElementById("test").innerHTML = "Failed to move LEFT: " + reason;
				}
			);*/
			this.ble.writeWithoutResponse(this.connected_device.id, this.serviceUUID, this.characteristicUUID, data.buffer);
		} else {
			document.getElementById("test").innerHTML = "left() ERROR: No connected device: " + this.connected_device;
		}
	}


	right(event) {
		if (this.connected_device != undefined) {
			document.getElementById("state").innerHTML = "LEFT";
			var data = new Uint8Array(1);	// CHANGE
			data[0] = 4;
			/*
			this.ble.writeWithoutResponse(this.connected_device.id, "FFE0", "FFE1", data.buffer).then(
				(success) => {
					document.getElementById("test").innerHTML = "LEFT: " + success;
				},
				(reason) => {
					document.getElementById("test").innerHTML = "Failed to move LEFT: " + reason;
				}
			);*/
			this.ble.writeWithoutResponse(this.connected_device.id, this.serviceUUID, this.characteristicUUID, data.buffer);
		} else {
			document.getElementById("test").innerHTML = "left() ERROR: No connected device: " + this.connected_device;
		}
	}


	// this is causing an error
	// This method parses through the connected Bluetooth Object to find the service ID and characteristic ID
	// Every service and its characteristic have properties: ["Read", "Write", "WriteWithoutResponse", etc..]
	// We need to find the characteristic for the Bluetooth Module that has a property "WriteWithoutResponse"
	get_IDs() {
		// document.getElementById("device").innerHTML = JSON.stringify(this.connected_device);
		
		// If there is a device connected
		if (this.connected_device != undefined) {
			// Look at each service ID value in the list of offered services...
			this.connected_device.services.forEach(service => {
				// For each characteristic object (item) in the list of characteristics...
				this.connected_device.characteristics.forEach(item => {
					// If the characteristic's service ID matches one of the offered services
					if (item.service == service) {
						// Find out if the properties of the characteristic contain "WriteWithoutResponse"
						item.properties.forEach(property => {
							if (property == "WriteWithoutResponse") {
								// If the characteristic contains the "WriteWithoutResponse"
								// Save the characteristic and service UUIDs
								this.serviceUUID = item.service;
								this.characteristicUUID = item.characteristic

								// For testing
								this.info_device.push(item.service);
								this.info_device.push(item.characteristic);
								this.info_device.push(item.properties);
							}
						});						
					}
				});
			});
			
			// For Testing
			if (this.info_device != undefined) {
				document.getElementById("service").innerHTML = JSON.stringify(this.info_device);
			} else {
				document.getElementById("service").innerHTML = "UNDEFINED";
			}
		}
	}	
	
/*
	Device Object:

		Android:
			{
				"name": "",
				"id": "",
				"advertising": {},
				"rssi": -0,
				"services":["","","ffe0"],	// use this: for each (service = device.services) -> for each ([service])
				"characteristics":				// device.characteristics -> [{},{},..}].item -> {}.service === devices
					[
						{	// This is the one we need
							"service": "ffe0",
							"characteristic": "ffe1",
							"properties": ["Read","WriteWithoutResponse","Notify"],
							// optional:
							"descriptors": [{"uuid": ""}, {"uuid": ""}]
						},
						{
							"service": "",
							"characteristic": "",
							"properties": ["","",""],
						},
						.
						.
						.
					]
			}

		iOS:
			{
				"characteristics":
					[
						{	// this is the one we want
							"properites": ["Read", "WriteWithoutResponse", "Notify"],
							"isNotifying": false,
							"characteristic": "FFE1",
							"service": "FFE0"
						},
						{
							"properties": ["", ""],
							"isNotifying": boolean,
							"characteristic": "",
							"service": ""
						},
						.
						.
						.
					],
				"id": "",
				"rssi": -0,
				"advertising": 
					{
						"kCBAdvDataLocalName": "",
						"kCBAdvDataServiceUUIDs": [""],	// could be useful, but doesn't exist in android object
						"kCBAdvDataTxPowerLevel": 0,
						"kCBAdvDataIsConnectable": boolean
					},
				"name": "",
				"services": ["","ffe0"]	// use this: for each (service = device.services) -> for each (["service"])
											// device.characteristics -> [{},{},...].item -> {}.service == service
			}
*/


}