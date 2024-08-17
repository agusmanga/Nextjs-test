
export default function Layout({children}:{children:React.ReactNode}){
    return(
        <div className='  bg-gradient-to-b from-slate-700 to-yellow-50'>
            <h1 className=' text-center text-white text-5xl py-10 w-full'>Posts</h1>
            <main>{children}</main>
            </div>
            
    );
}       