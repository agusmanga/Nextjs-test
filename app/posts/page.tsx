import react from 'react';
import { Card } from '../ui/card';
//import { fetchDatos } from '../datos';
import CartasDatos from '../ui/card';
import { Suspense } from 'react';
import useSWR from 'swr';

interface valoresCarta{
    userId:number;
    id:number;
    title:string;
    body:string;
}

export default async function page(){
    const datos = await CartasDatos();
    return(
        <div>
            <h1 className=' text-center bg-slate-400 text-white text-xl w-full'>Posts</h1>
            <div>
                
            </div>
            <div className=' px-4'>
                <Suspense fallback={<div className=' text-center'>Loading...</div>}>
                    <CartasDatos/>
                </Suspense>
            
            </div>
        </div>
    );
}