'use client'

import React from "react"
import { useSearchParams,usePathname,useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({placeholder}:{placeholder:string}) {
    const parametrosBusqueda = useSearchParams();
    const direccion = usePathname();
    const {replace} = useRouter();

    const buscar = useDebouncedCallback((termino)=>{
        console.log(termino);
        const parametro = new URLSearchParams(parametrosBusqueda);
        if (termino){
            parametro.set('userId',termino);

        }
        else{
            parametro.delete('userId');
        }
        replace(`${direccion}?${parametro.toString()}`);
},250);

    return (
       
            <input type='text' className=' w-1/4 p-2 m-2 rounded-md' placeholder={placeholder} onChange={(e)=>buscar(e.target.value)} defaultValue={parametrosBusqueda.get('userid')?.toString()}/>
        
    );

}