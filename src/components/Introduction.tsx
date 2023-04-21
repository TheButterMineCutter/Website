import { Parallax } from 'react-scroll-parallax';

export const Introduction = () => {

    const handleClick = () => {
        document.getElementById('main')?.scrollIntoView({ behavior: "smooth"})
    }

  return (
    <>
        <div className="h-[110vh] w-screen">
            <div className="w-screen h-[49vh] flex justify-center items-end">
                <h1 className="z-10 text-white font-4 text-5xl font-medium">Hello, im Kamil</h1>
            </div>
            <div className="w-screen h-[49vh] flex justify-center items-start">
                <h3 className="z-10 text-white/50 font-mono mt-3 font-medium">Self-taught Developer</h3>  
            </div>
            <div className="w-screen h-[1vh] flex justify-center items-start">
                <span className="w-5 h-5 flex justify-center items-center self-end animate-bounce hover:cursor-pointer">
                    <button onClick={handleClick} className="w-5 h-5 bg-transparent border-b-2 border-r-2 rounded-[3px] rotate-45"></button>
                </span> 
            </div>
        </div>
    </>
  )
}
