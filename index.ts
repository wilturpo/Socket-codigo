import Server from './clases/server';
import { router } from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

//configurando el body parser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
//configurando el CORS
server.app.use(cors({origin:true, credentials:true}))
//configurando las rutas
server.app.use('/',router);

server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`)
})