import React from 'react';

const Footer = () => {
    return ( 
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-200'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>Hard-Working</p>
                <p>Good Person</p>
                <p>Honest</p>
                <p>Learner</p>
                
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Call Me -954894135</p>
                <p>Portfolio</p>
                <p>Nice Website</p>
                <p>Comments</p>
              
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p>Prepresnt</p>
                <p>Server</p>
                <p>Client</p>
                <p>Cool</p>
                
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>NEXT.js</p>
                <p>Javascript</p>
                <p>Tailwind css</p>
                <p>Config file problem</p>
               
            </div>
            
        </div>
     );
}
 
export default Footer;