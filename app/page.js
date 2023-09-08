"use client"
import Image from 'next/image'
import {BiSolidPhoneCall} from 'react-icons/Bi'
import {BsFillMoonStarsFill,BsGit,BsFileEarmarkCodeFill} from 'react-icons/bs';
import {DiMongodb } from 'react-icons/di';
import{SiExpress,SiMysql,SiPostman,SiLeetcode} from 'react-icons/si';
import {AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import {TbBrandNextjs,TbBrandVscode,TbWorld} from "react-icons/tb";
import {FaHashnode,FaReact,FaNodeJs,FaNpm} from "react-icons/fa6";
import cuppp from "../public/cuppp.png"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import Harshit from '../public/Harshit.jpg';
import HJ from '../public/HJ.jpg';
import React,{useState} from 'react';
import { persons } from './persons';
import Footer from './Footer';
var classNames = require('classnames');

export default function Home() {
  const [darkMode,setDarkMode]=useState(false);
  const [activeItem,setActiveItems]=useState(4);
  return (
    <div className={darkMode ?"dark":""}>
    <main  className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
   <section className=' min-h-screen '>
    <nav className='py-10 flex justify-between'>
      <div className='flex gap-10'>
        <h1 className='text-4xl font-burtons dark:text-white my-auto'>Harshit Joshi</h1>
      <div className='relative  w-20 h-20 rounded-full overflow-hidden shadow-xl'>
     
      <Image src={HJ} layout="fill" objectFit="cover" className='bg-cover dark:block'/>
      <Image src={Harshit} layout="fill" objectFit="cover" className='bg-cover dark:hidden'/>
    </div>
      </div>

      <ul className='flex items-center'>
        <li><BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)}className='cursor-pointer text-2xl dark:text-white'/></li>
        <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 ring-2 ring-blue-300 hover:ring-4' href='#'>Resume</a></li>
      </ul>
    </nav>
    <div className='text-center p-10'>
      <h2 className='text-4xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-300'> Harshit Joshi </h2>
      <h3 className='text-1xl py-2 md:text-3xl dark:text-white'> Full-Stack Devloper and AL & ML Enthusiast</h3>
      <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white' >I'm an undergraduate student majoring in Computer Science and Engineering. I am an avid reader. I am working on Web Technologies with various frameworks such as React.js for frontend and Node.js for backend. I am an enthusiastic passionate learner who loves to explore to different opportunities.</p>
    </div>
    <div className='text-5xl flex  justify-center gap-16 py-3 text-gray-600 dark:text-white'>
    <a href='https://www.linkedin.com/in/harshit-joshi-120910279/' target='_blank'><AiFillLinkedin className='hover:fill-blue-800'/></a>  
      <a href='https://github.com/HJoshi012802' target='_blank'><AiFillGithub className='hover:fill-black dark:hover:fill-gray-500' /></a>
      <a href='https://hashnode.com/@harshitjoshi2002' target='_blank'><FaHashnode className='hover:fill-blue-600'/></a>
     <a href='https://leetcode.com/HJoshi012802/' target='_blank'><SiLeetcode className='hover:fill-yellow-600'/></a> 
    </div>
    <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full mt-20 w-80 h-80 md:h-96 md:w-96'>
     
      <Image src={cuppp} layout="fill" objectFit="cover"/>
    </div>
   </section>



   <div className='m-32'>
 <div className="flex h-full w-full items-center justify-center">
     <div className='w-[1200px] max-w-full'>
     <ul className='group flex h-[500px] gap-[1%]'>
       {persons.map((person,index)=>(
        <li onClick={()=>setActiveItems(index)}
        aria-current={activeItem===index} className={classNames('transition-[width]  w-[8%] first:w-[1%] overflow-hidden last:w-[1%] [&[aria-current=true]]:w-[48%]  ',
        'hover:w-[12%] [&:not(:hover)]group-hover:w-[7%]')} key={person.name}>
         <div className="relative h-full w-full overflow-hidden rounded-3xl">
         <img src={person.img} alt={person.name} className="w-full h-full max-w-none object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
         <div className={classNames(" absolute w-[590px] left-8 top-8 transition-[transtale,opacity]",
         activeItem===index ? "translate-x-0 opacity-100 ":"translate-x-4 opacity-0")}>
           <p className='text-violet-700 text-bold text-lg uppercase '>{person.title}</p>
           <p className='text-gray-600 text-4xl font-semibold'>{person.name}</p>
         </div>
         </div >
         </li>
       ))}
     </ul>
     </div>
    </div>
    </div>











   <section className='min-h-screen'>
    <div>
      <h3 className=' text-3xl py-1 dark:text-white'>Services I offer</h3>
      <p className='text-md py-8 leading-8 text-gray-800 dark:text-white'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<span className='text-teal-500'>sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<span className='text-teal-500'>sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </div>
    <div className='lg:flex gap-10'>
      <div className='text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-slate-300'>
         <Image src={design} width={100} height={100} className='block ml-auto mr-auto'/>
         <h3 className='text-md font-medium pt-8 pb-2'>Personality And Hobby</h3>
         <span className='py-2'> Adaptable, optimistic, good communicator, thrive under pressure, eager to learn, embrace changes, versatile personality.</span>
         <h4 className='py-4 text-teal-600'> Hobby </h4>
         <p className=' text-gray-800 py-1  hover:text-xl'>Photography</p>
         <p className=' text-gray-800 py-1 hover:text-xl'>Football</p>
         <p className=' text-gray-800 py-1 hover:text-xl'>Swimming</p>
         <p className=' text-gray-800 py-1 hover:text-xl'>Blogging</p>
      </div>
      <div className='text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-slate-300'>
         <Image src={code} width={100} height={100} className='block ml-auto mr-auto'/>
         <h3 className='text-lg font-medium pt-8 pb-2'>Full-Stack Devloper</h3>
         <span className='py-2'>I am professionally skilled in both front-end and back-end development, capable of creating complete web applications. </span>
         <h4 className='text-teal-600 py-4'>React   Next   Node   MongoDB   Express</h4>
         <div className='py-4 text-3xl flex  justify-center gap-4 text-gray-600 dark:text-gray-900'>
         <FaReact className='hover:fill-cyan-400 hover:text-5xl'/>
         <TbBrandNextjs className=' hover:text-5xl' />
         <FaNodeJs className='hover:fill-green-400 hover:text-5xl'/>
         <DiMongodb  className='hover:fill-green-600 hover:text-5xl'/>
        < SiExpress className='hover:text-5xl'/>
    </div>
      </div>
      <div className='text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-slate-300'>
         <Image src={consulting} width={100} height={100} className='block ml-auto mr-auto'/>
         <h3 className='text-lg font-medium pt-8 pb-2'> Tools And Technology</h3>
         <span className='py-2'>Database Management Systems (DBMS),Version Control System, NPM , Postman ,VSCode ,Documentation</span>
         <h4 className='py-4 text-teal-600 '>GitBash Npm Mysql Postman VSCode</h4>
         <div className='py-4 text-3xl flex  justify-center gap-4 text-gray-600 dark:text-gray-900'>
         <BsGit className='hover:fill-rose-400 hover:text-5xl'/>
         <FaNpm className=' hover:fill-rose-600 hover:text-5xl' />
         <SiMysql className='hover:fill-blue-600 hover:text-5xl'/>
         <SiPostman  className='hover:fill-orange-600 hover:text-5xl'/>
        < TbBrandVscode className='hover:fill-sky-400 hover:text-5xl'/>
    </div>
      </div>
    </div>
   </section>
   <section className='py-10'>
    <div>
      <h3 className=' text-3xl py-1 dark:text-white'>My Work</h3>      
      <p className='text-md py-8 leading-8 text-gray-800 dark:text-white'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<span className='text-teal-500'>sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </div>

  
    
   </section>
   

   <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap '>
      <div className=' lg:basis-1/3 flex-1 bg-indigo-600 rounded-lg shadow-2xl'>
        <Image src={web1} layout="responsive" className='rounded-t-lg bg-cover  h-100% w-100%' />
        <div className='flex justify-around text-2xl m-3 text-white'>
        <a>Blogit!</a>
        <BsFileEarmarkCodeFill/>
        <TbWorld/> 
        </div>
        </div>


      <div className=' lg:basis-1/3 flex-1 '>
        <Image src={web2} layout="responsive" className='rounded-lg bg-cover shadow-2xl  h-100% w-100%'/>
        </div>
      <div className=' lg:basis-1/3 flex-1'>
        <Image src={web3} layout="responsive" className='rounded-lg bg-cover shadow-2xl  h-100% w-100%'/>
        </div>
      <div className=' lg:basis-1/3 flex-1'>
        <Image src={web4} layout="responsive" className='rounded-lg bg-cover shadow-2xl  h-100% w-100%'/>
        </div>
      <div className=' lg:basis-1/3 flex-1 '>
        <Image src={web5} layout="responsive" className='rounded-lg bg-cover shadow-2xl  h-100% w-100%'/>
        </div>
      <div className=' lg:basis-1/3 flex-1 '>
        <Image src={web6} layout="responsive" className='rounded-lg bg-cover shadow-2xl  h-100% w-100%'/>
        </div>
    </div>

    

    </main>
    <Footer/>
     
    </div>

    
  )
}
