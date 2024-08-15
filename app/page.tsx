import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-cover bg-center w-screen h-screen" style={{backgroundImage:"url(/streaver-calidad.png)"}}>
        <div className="absolute top-3/4  left-1/2 transform -translate-x-1/2">
          <h1 className=" text-white">Click para ir a los posts</h1>
          <Link href="/posts" 
          className="flex h-15 w-40 items-center text-center justify-center rounded-md  bg-gray-400 hover:bg-sky-400">Posts
          </Link>
        </div>
    </div>
  );
}
