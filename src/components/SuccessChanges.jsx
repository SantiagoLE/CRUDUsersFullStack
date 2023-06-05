import React from 'react'
import "./styles/successChanges.css"


const SuccessChanges = ({ successClose }) => {


  return (
    <div className={`success_containt ${successClose && "success_containt-close"}`}>
      <article className='success_card'>
        <h2 className='success_title'>The user has been deleted successfully</h2>
        <img className={`success_icon ${!successClose && "success_icon-animate"}`} src="./success.svg" alt="" />
      </article>
    </div>
  )
}

export default SuccessChanges