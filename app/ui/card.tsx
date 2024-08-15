
import { fetchDatos } from '../datos';
import { UserCircle } from 'heroicons-react';

interface valoresCarta{
    userId:number;
    id:number;
    title:string;
    body:string;
}

export default async function cartasDatos(){
    const datos:valoresCarta[] = await fetchDatos();
    return (
        <div>{datos.map((dato: any)=>(
            <Card key={dato.id} userId={dato.userId} id={dato.id} title={dato.title} body={dato.body}/>
        ))}</div>
    )
}


export function Card({userId,id,title,body}:{
    userId:number;
    id:number;
    title:string;
    body:string;
}) {
    

    return (
        <div className=' bg-sky-300  shadow-lg rounded-lg  w-80'>
            <div className='flex items-start space-x-4 bg-sky-600  shadow-lg rounded-lg'>
                <UserCircle className=' h-12  fill-white hover:fill-yellow-200'/>
                <h1 className=' font-bold justify-center py-3'>User Id: {userId}</h1>
            </div>
            <div className=' font-medium'>Title: {title}</div>
            <p className=' text-sm'> Body: {body}</p>
        </div>
    )
}


