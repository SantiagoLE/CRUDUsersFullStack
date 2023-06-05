import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import "./styles/formUser.css"


const FormUser = ({ createNewUser, updateInfo, updateUserByID, setUpdateInfo, formClose, setFormClose }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    console.log(updateInfo)

    useEffect(() => {
        reset(updateInfo)

    }, [updateInfo])

    const submit = data => {
        if (updateInfo) {
            // actualiza
            updateUserByID(updateInfo.id, data)
            setUpdateInfo()
        } else {
            // crea
            createNewUser(data)
        }
        setFormClose(true)

        reset(defaultValues)
    }

    const handleFormClosed = () => {
        setFormClose(true)
        setUpdateInfo()
        reset(defaultValues)
    }

    const handleFormCreateAndUpdate = () => {
        // setFormClose(true)        
    }





    return (
        <div className={`form_containt ${formClose && "form_containt-close"}`}>
            <form className='form' onSubmit={handleSubmit(submit)}>
                <h3 className='form_title'>{updateInfo ? "Update User Info" : "Create New User"}</h3>
                <i onClick={handleFormClosed} className='bx bx-x-circle circle_form'></i>
                <div className='form_item'>
                    <label className='form_label' htmlFor="email">Email</label>
                    <input className='form_input' {...register("email", { required: true })} type="email" id='email' placeholder={errors.email && "Required field"} autoComplete='off' />
                </div>
                <div className='form_item'>
                    <label className='form_label' htmlFor="password">Password</label>
                    <input className='form_input' {...register("password", { required: true })} type="password" id='password' placeholder={errors.password ? "Required field" : ""} />
                </div>
                <div className='form_item'>
                    <label className='form_label' htmlFor="first_name">First Name</label>
                    <input className='form_input' {...register("first_name", { required: true })} type="text" id='first_name' placeholder={errors.first_name && "Required field"} autoComplete='off' />
                </div>
                <div className='form_item'>
                    <label className='form_label' htmlFor="last_name">Last Name</label>
                    <input className='form_input' {...register("last_name", { required: true })} type="text" id='last_name' placeholder={errors.last_name && "Required field"} autoComplete='off' />
                </div>
                <div className='form_item'>
                    <label className='form_label' htmlFor="birthday">Birthday</label>
                    <input className='form_input input_date' {...register("birthday", { required: false })} type="text" id='birthday' placeholder={errors.birthday && "Required field"} autoComplete='off' />
                </div>
                <button onClick={handleFormCreateAndUpdate} className='form_btn'>{updateInfo ? "Update" : "Create"}</button>

            </form>
        </div>

    )
}

export default FormUser