import { Parallax } from 'react-scroll-parallax';

export const About = () => {
  return (
    <div className="w-screen h-[110vh] bg-slate-800 z-50">
      <div className="h-[30vh] w-screen flex justify-center items-end">
        <h1 className='text-white text-5xl font-medium bg-bottom bg-no-repeat bg-[length:100%_25%] bg-gradient-to-r from-red-600/90 to-red-600/90'>About</h1>
      </div>
      <div className="h-[70vh] w-screen flex justify-center items-center">
         <p className="text-white w-[500px]">
          As a web developer, I am passionate 
          about creating dynamic and user-friendly 
          websites that are both visually appealing
          and highly functional. I specialize in 
          Full-stack development and have extensive 
          knowledge of HTML, CSS, JavaScript, and React.
          My passion for clean code, optimization, and 
          user experience has driven me to constantly 
          learn and stay up-to-date with best practices.
          Feel free to browse some of my projects I've 
          worked on, and don't hesitate to get in 
          touch if you'd like to collaborate or have
          any questions. I look forward to helping you
          bring your ideas to life!
        </p>
      </div>
    </div>
  )
}
