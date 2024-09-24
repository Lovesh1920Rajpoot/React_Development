import React from 'react'

export default function Hero() {
  return (
    <main className="Hero container">
       <div className="Hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>   
            <p>YOUR FEET DESERVE THE BEST AND 
            WE’RE HERE TO HELP YOU WITH OUR SHOES.
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU 
            WITH OUR SHOES</p>   
            <div className='Hero-btn'>
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className='copy-text'>
                <p>Also Available on</p>
            </div>    
            <div className="brands-logo">
                <img src="\images\amazon.png" alt="brands-logo"/>
                <img src="\images\flipkart.png" alt="brands-logo" />
            </div>
       </div>
       <div className="Hero-image">
            <img src="\images\hero-image.png" alt="hero-image" />
       </div>
    </main>
  )
}
