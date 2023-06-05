
import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './utils/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import SuccessChanges from './components/SuccessChanges'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true)
  const [successClose, setSuccessClose] = useState(true)

  const { users, getAllUsers, createNewUser, deleteUserByID, updateUserByID, userError } = useUserCrud()

  useEffect(() => {
    getAllUsers()
  }, [])

  const handleFormClose = () => {
    setFormClose(false)
  }

  return (
    <div className="App">
      <header className='app_header' >
        <h1 className='app_title'>Users</h1>
        <button onClick={handleFormClose} className='app_btn'><i className='bx bx-user-plus'></i>Create New User</button>

      </header >
      {users?.length === 0 &&
        <div className='app_noUsers-containt'>
          <img className='app_noUsers-img' src="/userIcon.png" alt="" />
          <h2 className='app_noUsers'>¡ No users, Please create a user !</h2>
        </div>
      }

      <SuccessChanges
        successClose={successClose}
      />

      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserByID={updateUserByID}
        setUpdateInfo={setUpdateInfo}
        formClose={formClose}
        setFormClose={setFormClose}
        userError={userError}
      />

      <div className='card_content'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserByID={deleteUserByID}
              setUpdateInfo={setUpdateInfo}
              setFormClose={setFormClose}
              setSuccessClose={setSuccessClose}

            />
          ))
        }
      </div>

    </div>
  )
}

export default App
