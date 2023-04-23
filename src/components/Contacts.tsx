import React from 'react'

export const Contacts = () => {
    

  return (
      <div className='h-screen w-screen bg-slate-900'>
          <div className='absolute w-screen h-screen overflow-hidden'>
              <img className="brightness-[50%]" src="https://images.pexels.com/photos/2873669/pexels-photo-2873669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="waterfall"/>
          </div>
          <div className='w-screen h-screen flex items-center justify-center'>
            <form className='h-[60vh] w-[400px]  bg-white bg-opacity-10 backdrop-blur-md border-2 rounded border-white border-opacity-10 z-50'>
                <div className='h-[20%] text-2xl flex justify-center items-center'>
                    <h1 className='text-white'>Send Me A Message</h1>
                </div>
                <div className='h-[10%] flex justify-center item'>
                    <input required={true} type="email" placeholder='Email' className='w-[350px] text-white bg-transparent border-b-2 border-white/30 focus:border-white/60 focus:outline-none'></input>
                </div>
                <div className='h-[40%] flex justify-center items-center'>
                    <textarea required={true} placeholder='Message' className='w-[350px] h-[70%] resize-none text-white bg-transparent border-b-2 border-white/30 focus:border-white/60 focus:outline-none'></textarea>
                </div>
                <div className="h-[30%] flex justify-center items-center">
                    <input type="submit" className="text-white border-white border-[2px] p-5 hover:cursor-pointer"></input>
                </div>
            </form>
          </div>
      </div>
  )
}
