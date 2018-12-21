import {Router, Request, Response} from 'express';
import Server from '../clases/server';
export const router = Router();

router.get('/mensajes',(req:Request, res:Response)=>{
    res.json({
        ok:true,
        mensaje: 'Respuesta ok!'
    })
});

// router.post('/mensajes',(req:Request, res:Response)=>{

//     const cuerpo = req.body.cuerpo;
    

//     res.json({
//         ok:true,
//         mensaje: 'Respuesta ok! con post',
//         cuerpo
//     })
// });

router.post('/mensajes',(req:Request,res:Response)=>{
    var entrada = req.body.entrada;
    var de = req.body.de;
    const payload={
        entrada:entrada,
        de:de,
    }
    const server = Server.instance;
    server.io.emit('mensajes-broadcast',payload);
    res.status(200).send({
        ok:true,
        mensaje: "Mensaje-correcto",
        entrada:entrada
    });
})

// router.post('/mensajes/:id',(req:Request, res:Response)=>{

//     const cuerpo = req.body.cuerpo;
//     const id = req.params.id;

//     res.json({
//         ok:true,
//         mensaje: 'Respuesta ok! con post',
//         cuerpo,
//         id
//     });
    router.post('/mensajes/:id',(req:Request, res:Response)=>{

        var entrada = req.body.entrada;
        var de = req.body.de;
        var id = req.params.id;
        const payload = {
            de:de,
            cuerpo:entrada
        }
        const server = Server.instance;
        server.io.in(id).emit('mensaje-privado',payload);
    
    
        res.status(200).send({
            ok:true,
            mensaje: 'Mensaje-correcto',
            entrada:entrada,
            id:id,
        });

        

});



router.get('/usuarios',(req:Request,res:Response)=>{
    const server = Server.instance;
    //RETORNA EL ARREGLO DE SOCKETS CONECTADOS
    server.io.clients((err:any,clientes:string[])=>{
        if(err){
            return res.status(505).send({
                ok:false,
                err:err
            });
        }else{
            return res.status(200).send({
                ok:true,
                clientes
            });
        }
    });
});
































