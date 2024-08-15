import react from 'react';
import { Card } from '../ui/card';
import { fetchDatos } from '../datos';





export default async function page(){
    const datos = await fetchDatos();
    const datosJson = datos[3];

    return(
        <div>
            <h1>Posts</h1>
            <div className=' grid gap-6'><Card userId={datosJson.userId}id={datosJson.id}title={datosJson.title} body={datosJson.body}></Card></div>
        </div>
        
    );
}