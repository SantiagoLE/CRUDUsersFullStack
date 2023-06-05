import React, { useState } from 'react'
import "./styles/userCard.css"



const UserCard = ({ user, deleteUserByID, setUpdateInfo, setFormClose, setSuccessClose }) => {

  const [deleteUser, setDeleteUser] = useState(true)

  const handleDelete = () => {
    deleteUserByID(user.id)
    setSuccessClose(false)

    const closeSuccess = () => {
      setSuccessClose(true)
    };

    setTimeout(closeSuccess, 2500);
  }

  const handleNotDelete = () => {
    setDeleteUser(true)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
  }

  const handleFormOpen = () => {
    setFormClose(false)
  }

  const handleCheckDelete = () => {
    setDeleteUser(false)
  }



  return (
    <article className='user'>

      <h2 className='user_name'>{user.first_name} {user.last_name}</h2>
      <ul className='user_list'>
        <li className='user_item'>
          <span className='user_label'>EMAIL</span>
          <div className='user_value-content'>
            <i className='bx bx-envelope'></i>
            <span className='user_value-email'>{user.email}</span>
          </div>
        </li>

        <li className='user_item'>
          <span className='user_label'>BIRTHDAY</span>
          <div className='user_value-content'>
            <i className='bx bx-gift'></i>
            <span className='user_value-birthday'>{user.birthday}</span>
          </div>
        </li>
      </ul>

      <img className='user_img' src="/cardIcon.png" alt="" />

      <hr className='user_hr' />

      <footer className='user_footer'>
        {
          deleteUser
            ? <>
              <button className='user_btn user_delete' ><i onClick={handleCheckDelete} className='bx bx-trash'></i></button>
              <button className='user_btn user_update' ><i onClick={() => { handleUpdate(); handleFormOpen() }} className='bx bx-edit-alt'></i></button>
            </>

            : <div className="user_footer-delete">
              <h5 className='user_footer-delete-title'>Delete this user?</h5>
              <div className='user_footer-delete-btns'>
                <i onClick={handleDelete} className='bx bx-check-circle'></i>
                <i onClick={handleNotDelete} className='bx bx-x-circle circle_user'></i>
              </div>
            </div>

        }
      </footer>




    </article>

  )
}

export default UserCard