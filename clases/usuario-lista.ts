import {Usuario} from './usuario';
import { CLIENT_RENEG_LIMIT } from 'tls';
export class UsuariosLista{
    private lista:Usuario[]=[];
    constructor(){

    }
    public agregar(usuario:Usuario){
        this.lista.push(usuario);
        console.log("[UsuarioLista|agregar] Usuario agregado");
        console.log("[UsuarioLista|agregar] Nueva lista de usuarios", this.lista);
    }

    public getLista(){
        let listaTemporal = this.lista.filter((usuario)=>{
            if(usuario.nombre !== 'sin nombre'){
                return usuario;
            };
        });
        return listaTemporal;
        
    }

    public actualizarNombre(id:string,nombre:string){
        for(let usuario of this.lista){
            if(usuario.id ===id){
                console.log("[UsuarioLista|actualizarNombre] Modificando de : ",usuario.nombre);
                usuario.nombre=nombre;
                console.log("[UsuarioLista|actualizarNombre] a : ",usuario.nombre);
                break;
                
            }
            
        }
        console.log("[UsuarioLista|actualizarNombre] Nueva lista de usuarios  : ",this.lista);

    }

    public getUsuario(id:string){
        for(let usuario of this.lista){
            if(usuario.id === id){
                return usuario;
            }
        }
        console.log("[UsuarioLista|getUsuario] No se encontró al usuario con id : ",id);
    }

    public borrarUsuario(id:string){
        this.lista=this.lista.filter((usuario)=>{
            if(usuario.id !== id){
                return usuario;
            }
        })
        console.log("[UsuarioLista|borrarUsuario] Usuario borrado");
        console.log("[UsuarioLista|borrarUsuario] Nueva lista de usuarios", this.lista);
    }
}