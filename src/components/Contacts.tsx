import React, { useRef, useEffect } from 'react'
import { EmailForm } from './EmailForm'

export const Contacts = () => {
  return (
      <div className='h-screen w-screen bg-slate-900'>
          <div className='absolute w-screen h-screen overflow-hidden'>
              <img className="brightness-[50%]" src="https://images.pexels.com/photos/2873669/pexels-photo-2873669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="waterfall"/>
          </div>
          <div className='w-screen h-screen flex items-center justify-center'>
            <EmailForm />
          </div>
      </div>
  )
}
