import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
  <div className="relative bg-cover bg-center  " style={{backgroundImage:"url(/streaver-calidad.png)"}}>
    <div className="py-4">
      <img src="/iconynombre.png" alt="nomicon" />
    </div>
        
        
    <div className="flex items-center justify-center h-screen">
      <div className="absolute bottom-1/4 flex flex-col items-center">
        <h1 className=" text-white  text-2xl ">Click para ir a los posts</h1>
        <Link href="/posts" 
          className="flex h-15 w-40  font-bold items-center text-center justify-center rounded-md  bg-gray-400 hover:bg-custom-blue">Posts
        </Link>
      </div>
    </div>
  </div>
  );
}
