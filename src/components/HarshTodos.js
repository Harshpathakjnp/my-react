import React, { useState } from 'react'

const HarshTodos = () => {
    const [inp,setInp] = useState('');
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src='..' alt='image here'></img>
                <figcaption>Add Your List Here..</figcaption>
            </figure>
            <div className='addItems'>
                <input type='text' onChange={(event)=>{setInp(event.target.value)}} placeholder='Add items..✍' className='form-control'></input>
                {inp}
                <i className='fa fa-plus add-btn'></i>

            </div>
            {/* show our item here */}

            <div className='showItems'>
                <div className='eachItem'>
                    <h3>Apple lelo</h3>
                    <div className='todo-btn'>
                    <i className='far fa-edit add-btn'></i>
                    <i className='fa fa-trash-alt add-btn'></i>

                    </div>
                </div>
            </div>
            {/* remove btn link  */}
            <div className='showItems'><button className='btn effect04' data-sm-link-text="Remove all"><span>Check List </span></button>

            </div>

        </div>
        
      </div>
    </>
  )
}

export default HarshTodos;
