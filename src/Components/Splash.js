import React, { useRef} from 'react';
import './Splash.css';

export default function Splash() {

    const splash = useRef(null);
    console.log(splash.current)
  
    document.addEventListener('DOMContentLoaded', (e)=>{
        setTimeout(()=>{
          splash.classList.add('displayNone')
        }, 2000);
      })



    return (
        <div className="splash" ref={splash}>
            <h1>Welcome to CommonPage</h1>
        </div>
    )
}
