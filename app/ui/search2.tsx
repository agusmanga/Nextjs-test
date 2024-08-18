import React from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar2({ hayBusqueda }:{hayBusqueda:Function}) {
    //Debounce para no hacer tantos llamados
    const buscar = useDebouncedCallback((termino) => {
        hayBusqueda(termino);  //
    }, 250);

    return (
        <input type='text'  className='w-1/4 p-2 m-2 rounded-md' placeholder="Buscar por id de usuario..." onChange={(e) => buscar(e.target.value)}/>
    );
}