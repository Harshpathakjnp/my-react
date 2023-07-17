import React from 'react'

function Weathertemp() {

  return (
    <>

      <div className='container'>
        <div className='input'>
          <input type='text'></input>
          <button>Search</button>
        </div>
        <div className='row' style={{ background: "white" }}>
          <div className='col'></div>
          <div className='col' style={{ border: "ridge" }}>
            <div className='row' style={{ border: "ridge" }}>
              <img src="/public/logo192.png" alt="Photo hai" />
            </div>
            <div className='row'>
              <div className='col' style={{ border: "ridge" }}>1</div>
              <div className='col' style={{ border: "ridge" }}>2</div>
            </div>
            <div className='row' style={{ border: "ridge" }}>
              <div className='col'>1</div>
              <div className='col'>2</div>
              <div className='col'>3</div>
              <div className='col'>4</div>
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </>
  )
}

export default Weathertemp;
