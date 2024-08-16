'use client'
import useSWR from 'swr';
//import { fetchDatos } from '../datos';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import { url } from 'inspector';



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
    
    let  urlbase = 'https://jsonplaceholder.typicode.com/posts';
   
    
    
        
        const { data: datos,error,isLoading,isValidating} = useSWR<valoresCarta[]>(url,fetcher,{
            revalidateOnFocus:true,
            revalidateOnReconnect:true,
            shouldRetryOnError:true,
            dedupingInterval:1000
        
        });
        
     
   if (error) return <div>Error al cargar los datos</div>
    if (isLoading||isValidating) return <div>Cargando..</div>
    if (!datos || datos.length===0) return <div>No hay datos</div>

    return (
        <div className=' px-4'>
                <div className=' flex-wrap flex gap-4 '>
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
        <div className=' bg-sky-300  shadow-lg rounded-lg  w-80 p-2'>
            <div className='flex items-start space-x-3 bg-sky-600  shadow-lg rounded-lg p-2'>
                <UserCircleIcon className=' h-10  fill-white hover:fill-yellow-200'/>
                <h1 className=' font-bold justify-center py-2'>User Id: {userId}</h1>
            </div>
            <div className=' font-medium'>Title: {title}</div>
            <p className=' text-sm'> Body: {body}</p>
        </div>
    )
}


