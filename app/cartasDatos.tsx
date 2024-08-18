
'use client'
import useSWR from 'swr';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Card } from './ui/card';


interface valoresCarta{
    userId:number;
    id:number;
    title:string;
    body:string;
}

const fetcher = async (url:string) => {
    const res = await fetch(url);
    if (!res.ok){
        throw new Error('Error al cargar los datos');
    }
    return res.json();
}


export default  function CartasDatos({url}:{url:string}){
    
    const [conexionLenta,setConexionLenta] = useState(false);
    const { data: datos,error,isLoading} = useSWR(url,fetcher,{
        revalidateOnFocus:true,
        revalidateOnReconnect:true,
        shouldRetryOnError:true,
        dedupingInterval:1000,
        onLoadingSlow:()=>{
            setConexionLenta(true);
            console.log("conexionLenta")
        },loadingTimeout:500,
        });
        
   if (error) return <div className='flex justify-center items-center pt-5 text-lg '>Error al cargar los datos, revisa la conexión</div>
   if(conexionLenta && datos && !isLoading)setConexionLenta(false);
   if (conexionLenta) {
        return <div className='flex items-center pt-5 text-lg bg-yellow-100 rounded-md text-yellow-600 justify-center'>La conexion es lenta, podria tardar mas de lo esperado...</div>
    }
    if (isLoading) return <div className='flex justify-center items-center pt-5 text-lg'>Cargando datos..</div>
    if (!datos || datos.length===0) return <div className='flex justify-center items-center pt-5 text-lg'>No hay datos disponibles para ese usuario</div>
    
    return (
        <div className=' px-4 '>
            <div className=' flex flex-wrap gap-4 '>
                {datos.map((dato:valoresCarta)=>(<Card key={dato.id} userId={dato.userId}id={dato.id} title={dato.title} body={dato.body}/>
                ))}
            </div>
        </div>
    )

}