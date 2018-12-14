import Server from './classes/server';
import bodyParser from 'body-parser';
import cors from 'cors';
import {router} from './routes/router';
//INSTANCIANDO AL SERVIDOR
const server = new Server();

//CONFIGURANDO A BODYPARSER para que los argumentoss lleguen en el arreglo' body' del request
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
//CORS
server.app.use(cors({origin:true, credentials:true}))
//CONFIGURANDO LAS RUTAS
server.app.use('/',router);
server.start(()=>{
    console.log(`Servidor corriendo in the port ${server.port}`);
});
