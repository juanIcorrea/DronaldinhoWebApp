//! Js usado en el index.html
/*!
*   Este archivo tiene la función de encargarse de la comunicación via websocket con la aplicación de celular
*
* */
var wsUri = "ws://172.22.36.197:8080";

//! Método run
/*!
*   Tiene la función de ejecutarse primero y comenzar la cadena de comunicación con el dispositivo
* */
function run() {
    output = document.getElementById("output");/*!< Instancia del elemento con id output en el index.html*/
    start();/*!< Llamado a método start()*/
}
//! Método ChangeUri
/*!
*   Permite modificar la uri/ip a la cual se conecta la webApp
    \param uri a valid uri argument (ws://xxx.xx.xx.xxx:xxxx)
* */
function changeUri(uri) {
    wsUri = uri
}
//! Método takeOff
/*!
* Envía un mensaje al dispositivo por medio del método toSend al dispositivo con valor "takeoff"
* */
function takeOff() {
    doSend("takeoff");

}

//! Método down
/*!
 * Envía un mensaje al dispositivo por medio del método toSend al dispositivo con valor "down"
 * */
function down(){
    doSend("down")
}

//! Método left
/*!
 * Envía un mensaje al dispositivo por medio del método toSend al dispositivo con valor "left"
 * */
function left(){
    doSend("left")
}


//! Método right
/*!
 * Envía un mensaje al dispositivo por medio del método toSend al dispositivo con valor "right"
 * */
function right(){
    doSend("right")
}


//! Método forward
/*!
 * Envía un mensaje al dispositivo por medio del método toSend al dispositivo con valor "forward"
 * */
function forward(){
    doSend("forward")
}


//! Método backward
/*!
 * Envía un mensaje al dispositivo por medio del método toSend al dispositivo con valor "backward"
 * */
function backward(){
    doSend("backward")
}


//! Método rollLeft
/*!
 * Envía un mensaje al dispositivo por medio del método toSend al dispositivo con valor "rollLeft"
 *
 * */
function rollLeft(){
    doSend("rollLeft")
}


//! Método TakeOff
/*!
 * Envía un mensaje al dispositivo por medio del método toSend al dispositivo con valor "takeoff"
 * */
function rollRight(){
    doSend("rollRight")
}


//! Método up
/*!
 * Envía un mensaje al dispositivo por medio del método toSend al dispositivo con valor "up"
 *
 * */
function up(){
    doSend("up")
}
//! Método start
/*!
* Establece la conexión con la uri especificada
* */
function start() {
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
//! Método onOpen
/*
* Override necesario para websockets, no efectua nada
* */
function onOpen(evt) {
}


//! Método onMessage
/*
 * Método de chequeo de recepción de mensajes via websockets
 * */
function onMessage(evt) {
    alert("recibo")
}

//! Método onError
/*
* Método necesario para websockets, avisa de un error por medio de la consola
* */
function onError(evt) {
    //writeToScreen('ERROR: ' + evt.data);
}

//! Método doSend
/*
* Envía por websockets un mensaje
\param message String
* */
function doSend(message) {
    websocket.send(message);
}


