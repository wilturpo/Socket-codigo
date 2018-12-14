//IMPORTANDO LIBRERIA EXPRESS
import express from 'express';
import {SERVER_PORT} from '../globals/environment'; // entre llaves al ser una variable y no una libreria que devuelva clases
//CREANDO LA CLASEE SERVER
export default class Server{
    //CREANDO LA VARIABLE DEL SERVIDOR EXPRESS
    public app:express.Application;
    public port:Number;

    //CONSTRUCTOR DEL SERVER
    constructor(){
        this.port = SERVER_PORT;
        this.app = express();
    }

    //FUNCION PARA INICAR EL SERVIDOR
    public start(callback:Function){
        this.app.listen(this.port,callback);
    }
}