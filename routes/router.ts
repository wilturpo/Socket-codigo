import {Router, Request, Response} from 'express';

export const router = Router();

router.get('/mensajes',(req:Request, res:Response)=>{
    res.json({
        ok:true,
        mensaje: 'Respuesta ok!'
    })
});

router.post('/mensajes',(req:Request, res:Response)=>{

    const cuerpo = req.body.cuerpo;
    

    res.json({
        ok:true,
        mensaje: 'Respuesta ok! con post',
        cuerpo
    })
});

router.post('/mensajes/:id',(req:Request, res:Response)=>{

    const cuerpo = req.body.cuerpo;
    const id = req.params.id;

    res.json({
        ok:true,
        mensaje: 'Respuesta ok! con post',
        cuerpo,
        id
    })
});