
import react from 'react';
import { Card } from '../ui/card';
import SearchBar from '../ui/searchbar';
import CartasDatos from '../ui/card';
import { Suspense } from 'react';



export default async function page({searchParams,}:{searchParams?:{'userId'?:string};}){
     let url = 'https://jsonplaceholder.typicode.com/posts';
     const userId = searchParams?.userId || '';
     if (userId){
         url += `?userId=${userId}`;
     }
    
    return(
        <div>
            
            <div className='flex justify-center'>
                <SearchBar placeholder="Buscar por id de usuario..."/>
            </div>
                
            
            <div className=' px-4'>
                <Suspense fallback={<div className=' text-center'>Loading...</div>}>
                     <CartasDatos url={url} />
                </Suspense>
            
            </div>
        </div>
    );
}