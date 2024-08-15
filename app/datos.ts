

export async function fetchDatos () {
    const datos = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datosJson = await datos.json()

    return datosJson
    
}