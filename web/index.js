/**
 * Created by Juan on 10/26/2016.
 */
var wsUri = "ws://172.22.36.197:8080";
function run() {
    output = document.getElementById("output");
    start();
}
function takeOff() {
    doSend("takeoff");

}

function down(){
    doSend("down")
}
function left(){
    doSend("left")
}

function right(){
    doSend("right")
}

function forward(){
    doSend("forward")
}

function backward(){
    doSend("backward")
}

function rollLeft(){
    doSend("rollLeft")
}

function rollRight(){
    doSend("rollRight")
}
function up(){
    doSend("up")
}
function start() {
    alert("Started");
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) {
        onOpen(evt)
    };
    websocket.onmessage = function(evt) {
        onMessage(evt)
    };
    websocket.onerror = function(evt) {
        onError(evt)
    };
}

function onOpen(evt) {
}
function onMessage(evt) {
    alert("recibo")
}
function onError(evt) {
    //writeToScreen('ERROR: ' + evt.data);
}
function doSend(message) {
    websocket.send(message);
}


