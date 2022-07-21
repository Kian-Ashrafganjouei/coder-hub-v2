import React from 'react'
import Navbar from '../Navbar';

function Courses2() {
  return (

    <>

    <div className="personal-info-container">
    <label>Select a course</label>
    <select>
        <option value="mario"> C Course</option>
        <option value="mario"> C++ Course</option>
        <option value="mario"> Java Course</option>
        <option value="mario"> JavaScript Course</option>
        <option value="mario"> Python Course</option>
    </select>
    <br />
    <label>Select a semester</label>
    <select>
        <option value="mario"> Fall semester</option>
        <option value="mario"> Winter semester</option>
        <option value="mario"> Summer semester</option>
    </select>
    </div>
    
    
    </>

  )
}

export default Courses2