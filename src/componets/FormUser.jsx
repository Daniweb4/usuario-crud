import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import './style/formUser.css';
const FormUser = ({createUser,isOpen,setIsOpen,editUser,updateUser}) => {
  
    const {handleSubmit,register,reset}= useForm();
    useEffect(() => {
      reset(editUser);
      
    }, [editUser])
    
    const submit=(data)=>{
      if(editUser){
        updateUser('/users',editUser.id,data);
      
      }else{
        createUser('/users', data);
      }
        reset({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday:'',
        });
       // setIsOpen(false);

    }
    const handleClose=()=>{
      setIsOpen(false);
    }
   
return (
    <div className={`form_background ${isOpen&&"able"} `}>
      <form className='form_container' onSubmit={handleSubmit(submit)}>
      <div className='close' onClick={handleClose}><ion-icon name="close-circle-outline"></ion-icon></div>
      <h2 className='form_title' >Nuevo usuario</h2>
        <div className='form_item'> 
          <label htmlFor="first_name">Nombres</label><br></br>
          <input required className='input_data' {...register('first_name')} id='first_name' type="text" />
        </div> 
        <div className='form_item'> 
          <label htmlFor="last_name">Apellidos</label><br></br>
          <input required className='input_data' {...register('last_name')} id='last_name' type="text" />
        </div> 
        <div  className='form_item'> 
          <label htmlFor="email">Email</label><br></br>
          <input required className='input_data' {...register('email')} id='email' type="email"/>
        </div> 
        <div className='form_item'> 
          <label htmlFor="password">Password</label><br></br>
          <input required className='input_data' {...register('password')} id='password' type="password"/>
        </div> 
        <div className='form_item'> 
          <label htmlFor="birthday">Cumpleaños</label><br></br>
          <input required className='input_birthday'{...register('birthday')} id='birthday' type="date" />
        </div>
      
          <button className='save_user' >Guardar usuario</button>
        
       
        </form>

    
      
    </div>
  )
}

export default FormUser
