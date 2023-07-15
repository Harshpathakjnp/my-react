import React, { useState, useEffect } from 'react';
// get the local storage
const getLocaldata = () => {
  const lists = localStorage.getItem("mytodoslist")
  if (lists) {
    return JSON.parse(lists);
  }
  else {
    return [];
  }
};

const HarshTodos = () => {
  const [inp, setInp] = useState('');
  const [items, setItems] = useState(getLocaldata());
  const [iseditItem, setIsEditItem] = useState('');
  const addItem = () => {
    if (!inp) {
      alert("Please Fill the Data");
    }
    else {
      const mynewInputData = {
        id: new Date().getTime().toString(),
        name: inp,
      }
      setItems([...items, mynewInputData]);

      setInp("")
    }

  }
  //Adding Local storage 
  useEffect(() => {
    localStorage.setItem("mytodoslist", JSON.stringify(items))
  }, [items])



  const removeAll = () => {
    setItems([]);
  }
  const deleteitem = (index) => {
    const updatedItem = items.filter((curEle) => {
      return curEle.id !== index;
    })
    setItems(updatedItem);
  }
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <img width={100} src='https://user-images.githubusercontent.com/55911470/214786962-51be4929-05a4-489a-add4-79033c7fe037.png' alt='image here'></img>
            <figcaption>Add Your List Here..</figcaption>
          </figure>
          <div className='addItems'>
            <center><input
              type="text"
              onChange={(event) => setInp(event.target.value)}
              placeholder="Add items..✍"
              value={inp}
              className="form-control"
              style={{
                border: '1px solid #ccc',
                borderRadius: '3px',
                width: '300px',
                // Add your additional CSS properties here
              }}
            ></input>
            </center>






            <button
              onClick={addItem}
              style={{
                padding: '5px 10px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                // Add your additional CSS properties here
              }}
            >
              (+)
            </button>

          </div>
          {/* show our item here */}

          <div class="row">
            <div class="col-3"></div>
            <div class="col">





              {items.map((curr, ind) => {
                return <div key={ind} className='eachItem' style={{
                  padding: '5px 5px',
                  margin: '30px 30px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  // Add your additional CSS properties here
                }}>
                  <div class="row">
                    <div class="col-1"></div>
                    <div class="col-10"><h4>{curr.name}</h4></div>
                    <div class="col-1"><i className='fa fa-trash-alt add-btn ' onClick={() => {
                      deleteitem(curr.id)
                    }}></i></div>
                  </div>





                </div>

              })}</div>
            <div class="col-3"></div>
          </div>

          <div className='showItems'>


          </div>
          {/* remove btn link  */}
          <div className='showItems'><button className='btn effect04' onClick={removeAll} data-sm-link-text="Remove all"><span>Remove All </span></button>

          </div>

        </div>

      </div >
    </>
  )
}

export default HarshTodos;
