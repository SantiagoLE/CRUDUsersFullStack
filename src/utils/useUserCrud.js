import axios from "axios"
import { useState } from "react"

const useUserCrud = () => {

    const [users, setUsers] = useState()
    const [userError, setUserError] = useState(false)
    console.log(users)
    const url = import.meta.env.VITE_REACT_APP_URL

    // GET
    const getAllUsers = () => {
        axios.get(`${url}/users`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }

    // POST
    const createNewUser = (data) => {
        axios.post(`${url}/users`, data)
            .then(res => {
                console.log(res);
                getAllUsers()
                setUserError(false)
            })
            .catch(err => {
                console.log(err)
                setUserError(true)
            })

    }

    // DELETE
    const deleteUserByID = (id) => {
        const urlDelete = `${url}/users/${id}`
        axios.delete(urlDelete)
            .then(res => getAllUsers())
            .catch(err => console.log(err))
    }

    // PATCH o PUT
    const updateUserByID = (id, data) => {
        const urlUpdate = `${url}/users/${id}`
        console.log(urlUpdate)
        axios.put(urlUpdate, data)
            .then(res => getAllUsers())
            .catch(err => console.log(err))
    }


    return { users, getAllUsers, createNewUser, deleteUserByID, updateUserByID, userError }




}

export default useUserCrud