import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const EmailForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_90jj22q', 'template_9d71rcw', formRef.current!, 'Y7jbLrbxnLbAE7stS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    useEffect(() => {
        const observerOne = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              handleObserverOne(entry)
            })
        }, {rootMargin:"-150px"})

        const handleObserverOne = (entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              entry.target.classList.toggle('animate-[animationOne_750ms_ease-in-out_forwards]', entry.isIntersecting)
            }
        }

        observerOne.observe(formRef.current as Element);
    }, [])


  return (
    <form ref={formRef} onSubmit={sendEmail} className='h-[60vh] w-[400px]  bg-white bg-opacity-10 backdrop-blur-md border-2 rounded border-white border-opacity-10 z-50 opacity-0'>
        <div className='h-[20%] text-2xl flex justify-center items-center'>
            <h1 className='text-white'>Send Me A Message</h1>
         </div>
        <div className='h-[10%] flex justify-center item'>
            <input required={true} type="email" name="email" placeholder='Email' className='w-[350px] text-white bg-transparent border-b-2 border-white/30 focus:border-white/60 focus:outline-none'></input>
        </div>
        <div className='h-[40%] flex justify-center items-center'>
            <textarea required={true} placeholder='Message' name="message" className='w-[350px] h-[70%] resize-none text-white bg-transparent border-b-2 border-white/30 focus:border-white/60 focus:outline-none'></textarea>
        </div>
        <div className="h-[30%] flex justify-center items-center">
            <input value={"Submit"} type="submit" className="text-white border-white border-[2px] p-5 pl-10 pr-10 hover:cursor-pointer"></input>
        </div>
    </form>
  )
}
