
import react from 'react';
import { Card } from '../ui/card';
import SearchBar from '../ui/searchbar';
import CartasDatos from '../ui/card';
import { Suspense } from 'react';



interface valoresCarta{
    userId:number;
    id:number;
    title:string;
    body:string;
}

export default async function page({searchParams,}:{searchParams?:{'userId'?:string};}){
     let url = 'https://jsonplaceholder.typicode.com/posts';
     const userId = searchParams?.userId || '';
     if (userId){
         url += `?userId=${userId}`;
     }
     console.log(url);
    return(
        <div>
            <h1 className=' text-center bg-slate-400 text-white text-xl w-full'>Posts</h1>
            <div className='flex justify-center'>
                <SearchBar placeholder="Buscar"/>
            </div>
                
            
            <div className=' px-4'>
                <Suspense fallback={<div className=' text-center'>Loading...</div>}>
                     <CartasDatos url={url} />
                </Suspense>
            
            </div>
        </div>
    );
}