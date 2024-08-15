import useSWR from 'swr';
//import { fetchDatos } from '../datos';
import { UserCircleIcon } from '@heroicons/react/16/solid';

interface valoresCarta{
    userId:number;
    id:number;
    title:string;
    body:string;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function CartasDatos(){
    


    /*const datos = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datosJson =  await datos.json()
*/
    const {data: datos,error,isValidating} = useSWR<valoresCarta[]>('https://jsonplaceholder.typicode.com/posts',fetcher,{
        revalidateOnFocus:true,
        revalidateOnReconnect:true,
        shouldRetryOnError:true,
        dedupingInterval:60000
    
    });

    if(error) return <div>Error al cargar los dato</div>
    if (!datos) return <div>Cargando...</div>
    

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


