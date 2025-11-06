import './NavBar.css'
import React, {useState} from "react";

export default function NavBar (){
//La barra de navegacion no es lo mmismo que la barra fija que esta hasta arriba de la pagina web
    return(
        <>
            <div className='search-bar' >
                
                <button>Buscar Tienda</button>
                <button>Ayuda</button>
                <button>Unete a nosotros</button>
                <button>Iniciar sesion</button>
                <button>Registrarse</button>
            </div>
            
        </>
    )
}