import React from 'react'


const Form= ()=>{
  function handleChange(e) {
    e.preventDefault();
  }

  return (
    <div className="form-div">
      <form className="form">
        <label for="title-input"/>
        <input type="text"
          id="title-input"
          placeholder="Title"
          onChange={handleChange}
        />

      </form>
    </div>
  )
}
export default Form