import { SERVER_PORT } from '../globals/environment';
import express from 'express';
import socketIO from 'socket.io';
import http from 'http';

export default class Server{

    private static _instance:Server;

    public app:express.Application;
    public port:Number;
    //servicor para emitir y escuchar eventos
    public io: socketIO.Server;
    private httpServer:http.Server;

    private constructor(){
        this.app = express();
        this.port = SERVER_PORT;
        //configurando el nuevo server
        this.httpServer = new http.Server(this.app);
        //cnfigurando el socket
        this.io = socketIO(this.httpServer);
        this.escucharSockets();
    }

    public static get instance(){
        if(this._instance){
            return this._instance;
        }else{
            this._instance = new this();
            return this._instance;
        }
    }

    private escucharSockets(){
        console.log("Escuchando conexiones o sockets");
        this.io.on('connection',cliente=>{
            console.log("nuevo cliente conectado");
            cliente.on('disconnect',()=>{
                console.log("nuevo cliente desconectado");
            });
            cliente.on('mensaje',(payload:any)=>{
                console.log("nuevo mensaje ",payload);
                this.io.emit("mensaje-nuevo",payload);
            });

        });
    }

    start(callback:Function){
        this.httpServer.listen(this.port, callback);

    }
}