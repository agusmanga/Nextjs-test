'use client'

import useSWR from 'swr';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';



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

interface cartasUrl{
    url:string;
}

export default  function CartasDatos({url}:{url:string}){
    const [conexionLenta,setConexionLenta] = useState(false);

    const { data: datos,error,isLoading,isValidating} = useSWR<valoresCarta[]>(url,fetcher,{
        revalidateOnFocus:true,
        revalidateOnReconnect:true,
        shouldRetryOnError:true,
        dedupingInterval:1000,
        onLoadingSlow:()=>{
            setConexionLenta(true);
            console.log("conexionLenta")
        },loadingTimeout:500,
        });
        
   if (error) return <div className='flex justify-center items-center pt-5 text-lg'>Error al cargar los datos</div>
   if(conexionLenta && datos && !isLoading && !isValidating)setConexionLenta(false);
   if (conexionLenta) {
        console.log('hola');
        return <div className='flex items-center pt-5 text-lg bg-yellow-100 rounded-md text-yellow-600 justify-center'>La conexion es lenta, podria tardar mas de lo esperado...</div>
    }
    if (isLoading||isValidating) return <div className='flex justify-center items-center pt-5 text-lg'>Cargando datos..</div>
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


export function Card({userId,id,title,body}:{
    userId:number;
    id:number;
    title:string;
    body:string;
}) {
    

    return (
        <div className=' relative w-60 h-auto bg-yellow-50 shadow-xl rounded-lg   p-2 hover:scale-125'>
            <div className='flex items-center space-x-3 bg-sky-600  shadow-lg rounded-lg p-2'>
                <UserCircleIcon className=' h-10  fill-white hover:fill-yellow-200'/>
                <h1 className=' font-bold justify-center py-2'>User Id: {userId}</h1>
            </div>
            <div className=' bg-slate-200 rounded-lg  font-bold'>Title: {title}</div>
            <p className=' text-sm'> Body: {body}</p>
        </div>
    )
}


