'use client'

import CartasDatos from '../cartasDatos';
import { Suspense,useState,useCallback } from 'react';
import { browser } from 'process';
import { useSearchParams,usePathname,useRouter } from "next/navigation"
import SearchBar2 from '../ui/search2';

export default  function Page({searchParams,}:{searchParams?:{'userId'?:string};}){
     const [url, setUrl] = useState(() => {
        const userId = searchParams?.userId || '';
        return `https://jsonplaceholder.typicode.com/posts${userId ? `?userId=${userId}` : ''}`;
    });

    // Función para actualizar la URL cuando el usuario busca por un id
     function cambiarUrl (userId: any){
        const nuevaURL = `https://jsonplaceholder.typicode.com/posts${userId ? `?userId=${userId}` : ''}`;
        setUrl(nuevaURL);  
    }
    
    return(
        <div>
            
            <div className='flex justify-center'>
                <SearchBar2 hayBusqueda={cambiarUrl}/>
            </div>
                
            
            <div className=' px-4'>
                <Suspense fallback={<div className=' text-center'>Loading...</div>}>
                     <CartasDatos url={url} />
                </Suspense>
            
            </div>
        </div>
    );
}