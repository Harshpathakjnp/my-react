import React from 'react'

function Resturant() {
  return (
    <>
    <div className='card-container'>
        <div className='card'>
          <div className='card-body'>
            <span className='card-number card-circle subtle'>1</span>
            <span className='card-author subtle'>Breakfast</span>
            <h2 className='card-title'>Maggi</h2>
            <span className='card-discription subtle'>
              I really love maggi so much Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore et itaque modi ipsam quaerat tempora voluptatem nam reprehenderit voluptate, dolorum autem, officia officiis adipisci! Corrupti provident non quis iusto alias autem ipsa minima quia inventore!
            </span>
            <div className='card-read'>
            </div>
            <img src="...\hr.jpg" alt='images' className='card-media'></img>
            <span className='card-tag subtle'>order Now </span>

          </div>
        </div>
    </div>
    </>
  )
}

export default Resturant
