
'use client'
import useSWR from 'swr';
import { useState } from 'react';
import { Carta } from './ui/card';

//interfaz para tipos de datos de la carta
interface valoresCarta{
    userId:number;
    id:number;
    title:string;
    body:string;
}

//funcion fetcher que toma swr y devuelve los datos de jsonplaceholder
const fetcher = async (url:string) => {
    const res = await fetch(url);
    if (!res.ok){
        throw new Error('Error al cargar los datos');
    }
    return res.json();
}


export default  function CartasDatos({url}:{url:string}){
    
    const [conexionLenta,setConexionLenta] = useState(false);
    //uso swr para traer datos, o errores
    const { data: datos,error,isLoading} = useSWR(url,fetcher,{
        revalidateOnFocus:true,
        revalidateOnReconnect:true,
        shouldRetryOnError:true,
        dedupingInterval:1000,
        onLoadingSlow:()=>{
            setConexionLenta(true);
        },loadingTimeout:500,
        });
        
   if (error) return <div className='flex justify-center items-center pt-5 text-lg '>Error al cargar los datos, revisa la conexión</div>
    
   //si el estado de conexion lenta es verdadero, pero se trajeron los datos,
   //se elimina la notificacion de conexion lenta
   if(conexionLenta && datos && !isLoading)setConexionLenta(false);

   if (conexionLenta) return <div className='flex items-center pt-5 text-lg bg-yellow-100 rounded-md text-yellow-600 justify-center'>La conexion es lenta, podria tardar mas de lo esperado...</div>
    
   if (isLoading) return <div className='flex justify-center items-center pt-5 text-lg'>Cargando datos..</div>
    
   if (!datos || datos.length===0) return <div className='flex justify-center items-center pt-5 text-lg'>No hay datos disponibles para ese usuario</div>
    
    return (
        <div className=' px-4 '>
            <div className=' flex flex-wrap gap-4 '>
                {datos.map((dato:valoresCarta)=>(<Carta key={dato.id} userId={dato.userId}id={dato.id} title={dato.title} body={dato.body}/>
                ))}
            </div>
        </div>
    )

}