import React from "react";
import 'searchBar.css';

//*nota: esta funcion que se llama search bar está alojada dentro del comonente Menu, ya que es un subcompnente
//el porposito de este es buscar el producto que se quiera
export default function SearchBar (){
    return(
        <>
            <h1>buscar</h1>
            <button>Buscar</button>
        </>
    )

}