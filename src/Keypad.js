import React from 'react'
import "./Keypad.css"

export default function Keypad() {
  return (
    <>

    
    <div  className='container'>


        <h3>Mobile number</h3>

        <input className='mobile-number' type="number" placeholder='+91'>

        </input>

        <div className='keypad'>

            <div className='one'><h2>1</h2><h4>abc</h4></div>
            <div className='two'><h2>2</h2><h4>def</h4></div>
            <div className='three'><h2>3</h2><h4>ghi</h4></div>
            <div className='four'><h2>4</h2><h4>jkl</h4></div>
            <div className='five'><h2>5</h2><h4>mno</h4></div>
            <div className='six'><h2>6</h2><h4>pqrs</h4></div>
            <div className='seven'><h2>7</h2><h4>tuv</h4></div>
            <div className='eight'><h2>8</h2><h4>wxyz</h4></div>
            <div className='nine'><h2>9</h2></div>
            <div className='star'><h2>*</h2><h4>+</h4></div>
            <div className='zero'><h2>0</h2></div>
            <div className='hash'><h2>#</h2></div>

        </div>
    </div>
    </>
  )
}
