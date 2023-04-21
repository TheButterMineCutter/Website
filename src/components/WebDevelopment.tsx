import React, {useEffect, useRef } from 'react'
import { Parallax } from 'react-scroll-parallax';

export const WebDevelopment = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const textOneRef = useRef<HTMLDivElement>(null);
  const textTwoRef = useRef<HTMLDivElement>(null);
  const technologies = useRef<HTMLDivElement>(null);
  const browserRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLDivElement>(null);
  const blueBoxRef = useRef<HTMLDivElement>(null)
  const options = {
    rootMargin:"-50px",
  }

  useEffect(() => {
    const observerOne = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        handleObserverOne(entry)
      })
    }, options)

    const observerTwo = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        handleObserverTwo(entry)
      })
    }, options)

    const observerThree = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        handleObserverThree(entry)
      })
    })
  
    observerOne.observe(titleRef.current as Element);
    observerOne.observe(browserRef.current as Element);
    observerOne.observe(codeRef.current as Element);
    observerTwo.observe(textOneRef.current as Element);
    observerTwo.observe(textTwoRef.current as Element);
    observerTwo.observe(technologies.current as Element);
    observerThree.observe(typingRef.current as Element);

    const handleObserverOne = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle('animate-[animationOne_750ms_ease-in-out_forwards]', entry.isIntersecting)
      }
    }

    const handleObserverTwo = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle('animate-[animationTwo_750ms_ease-in-out_forwards]', entry.isIntersecting)
      }
    }

    const handleObserverThree = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          handleAnimation()
        }, 2500)
        entry.target.classList.toggle('animate-[typed_2.5s_steps(20)_forwards]', entry.isIntersecting)
      }
    }
  }, [])

  const handleAnimation = () => {
    blueBoxRef.current!.classList.add('animate-[move_1s_forwards]')
    typingRef.current!.classList.remove('w-0')
    typingRef.current!.classList.add('w-[154px]')
    typingRef.current!.classList.remove('animate-[typed_2.5s_steps(20)_infinite_alternate]')
    typingRef.current!.classList.add('animate-[blink_1s_step-end_infinite]')
  }

  return (
      <div className='w-screen h-[120vh] bg-slate-900'>
        <div className='w-screen h-[30vh] flex justify-center items-center'>
          <h1 ref={titleRef} id="main" className='text-white text-5xl font-medium opacity-0 bg-bottom bg-no-repeat bg-[length:100%_25%] bg-gradient-to-r from-blue-600/90 to-blue-600/90'>What I do...</h1>
        </div>
        <div className='flex w-screen h-[70vh]'>
          <div className='w-[60vw] h-[70vh]'>
            <div className="w-[60vw] h-[70vh] absolute flex justify-center items-center">
              <div ref={browserRef} className="w-[80%] h-[60%] bg-white bg-opacity-20 backdrop-blur-md border-2 rounded border-white border-opacity-20 relative bottom-[10%] opacity-0">
                <div className='w-full h-[10%] bg-white bg-opacity-20 flex items-center'>
                  <span className='w-3 h-3 m-1 rounded-2xl bg-red-500'/>
                  <span className='w-3 h-3 m-1 rounded-2xl bg-yellow-500'/>
                  <span className='w-3 h-3 m-1 rounded-2xl bg-green-500'/>
                </div>
                <div className='w-full h-[90%] flex items-center justify-center'>
                  <span ref={blueBoxRef} className='w-[60%] h-[45%] bg-blue-400 bg-opacity-20 backdrop-blur-md border-2 rounded border-white border-opacity-20 relative bottom-[10%]'/>
                </div>
              </div>
            </div> 
            <div className='w-[60vw] h-[70vh] absolute flex justify-center items-center'>
              <div ref={codeRef} className="w-[85%] h-[20%] bg-white bg-opacity-10 backdrop-blur-md border-2 rounded border-white border-opacity-10 relative top-[25%] opacity-0">
                <div className='flex ml-[3px] text-md whitespace-nowrap overflow-hidden'>
                  <span className='text-white/60'>
                    &lt;
                  </span>
                  <span className='text-red-500/70'>
                    div
                  </span>
                  <span className='text-orange-400/70 ml-1'>
                    className
                  </span>
                  <span className='text-blue-400/90'>
                    =
                  </span>
                  <span className='text-green-400/70'>
                    "w-screen h-screen flex justify-center items-center"
                  </span>
                  <span className='text-white/60 flex'>
                    &gt;
                  </span>
                </div>
                <div className='flex ml-[20px] text-md whitespace-nowrap overflow-hidden'>
                  <span className='text-white/60'>
                    &lt;
                  </span>
                  <span className='text-red-500/70'>
                    div
                  </span>
                  <span className='text-orange-400/70 ml-1'>
                    className
                  </span>
                  <span className='text-blue-400/90 flex'>
                    =
                  </span>
                  <span className='text-green-400/70 flex'>
                    "w-[60%] h-[45%] bg-blue-400
                  </span>
                  <span ref={typingRef} className='text-green-400/70 flex ml-1 whitespace-nowrap overflow-hidden w-0 border-r-2 border-white'>
                    relative right-[15%]"
                  </span>
                  <span className='text-white/60 flex'>
                    &gt;
                  </span>
                  <span className='text-white/60'>
                    &lt;/
                  </span>
                  <span className='text-red-500/70'>
                    div
                  </span>
                  <span className='text-white/60 flex'>
                    &gt;
                  </span>
                </div>
                <div className='flex ml-[3px] text-md whitespace-nowrap overflow-hidden'>
                  <span className='text-white/60'>
                    &lt;/
                  </span>
                  <span className='text-red-500/70'>
                    div
                  </span>
                  <span className='text-white/60 flex'>
                    &gt;
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[40vw] h-[70vh] border-l-2 border-opacity-20 pl-5 border-white '>
            <h1 ref={textOneRef} className='w-[100%] h-[30%] text-3xl text-white mt-[10px] opacity-0'>I Build<br></br>Full Stack<br></br>Web Application</h1>
            <h3 ref={textTwoRef} className='w-[100%] h-[10%] text-xl text-white opacity-0'>Some Technologies I use</h3>
            <div ref={technologies} className="w-[100%] h-[60%] opacity-0">
              <h1 className='text-white/50 flex items-center'><span className="material-symbols-outlined text-blue-500 saturate-200">arrow_right</span>HTML</h1>
              <h1 className='text-white/50 flex items-center'><span className="material-symbols-outlined text-blue-500 saturate-200">arrow_right</span>CSS</h1>
              <h1 className='text-white/50 flex items-center'><span className="material-symbols-outlined text-blue-500 saturate-200">arrow_right</span>Javascript</h1>
              <h1 className='text-white/50 flex items-center'><span className="material-symbols-outlined text-blue-500 saturate-200">arrow_right</span>Typescript</h1>
              <h1 className='text-white/50 flex items-center'><span className="material-symbols-outlined text-blue-500 saturate-200">arrow_right</span>React</h1>
              <h1 className='text-white/50 flex items-center'><span className="material-symbols-outlined text-blue-500 saturate-200">arrow_right</span>Tailwind</h1>
              <h1 className='text-white/50 flex items-center'><span className="material-symbols-outlined text-blue-500 saturate-200">arrow_right</span>Django</h1>
              <h1 className='text-white/50 flex items-center'><span className="material-symbols-outlined text-blue-500 saturate-200">arrow_right</span>NodeJS</h1>
              <h1 className='text-white/50 flex items-center'><span className="material-symbols-outlined text-blue-500 saturate-200">arrow_right</span>PostgresSQL</h1>
              <h1 className='text-white/50 flex items-center'><span className="material-symbols-outlined text-blue-500 saturate-200">arrow_right</span>MongoDB</h1>
            </div>
          </div>
        </div>
      </div>
  )
}
