import useSWR from "swr"
import React from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json())

/*export async function fetchDatos () {
    /*const datos = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datosJson =  await datos.json()
*/
   /* const {data: datos,error,isValidating} = useSWR('https://jsonplaceholder.typicode.com/posts',fetcher,{
        revalidateonFocus:true,
        revalidateonrecounect:true,
        shouldRetryOnError:true,
        dedupingInterval:60000
    
    });

    if(error) return "Error al cargar los datos"
    if (!datos) return "Cargando..."
    return datos
    
    
}*/