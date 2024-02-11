import React from 'react'
import { useForm } from 'react-hook-form';
import './style/formUser.css';
const FormUser = ({createUser,isOpen,setIsOpen}) => {
    
    const {handleSubmit,register,reset}= useForm();
    
    const submit=(data)=>{
        createUser('/users', data);
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
      <button onClick={handleClose}>X</button>
      <h2 className='form_title' >Nuevo usuario</h2>
        <div className='form_item'> 
          <label htmlFor="email">Email</label>
          <input {...register('email')} id='email' type="email"/>
        </div> 
        <div className='form_item'> 
          <label htmlFor="password">Password</label>
          <input {...register('password')} id='password' type="password"/>
        </div> 
        <div> 
          <label htmlFor="first_name">first_name</label>
          <input {...register('first_name')} id='first_name' type="text" />
        </div> 
        <div className='form_item'> 
          <label htmlFor="last_name">last_name</label>
          <input {...register('last_name')} id='last_name' type="text" />
        </div> 
        <div className='form_item'> 
          <label htmlFor="birthday">birthday</label>
          <input {...register('birthday')} id='birthday' type="date" />
        </div>
      
          <button >Submit</button>
        
       
        </form>

    
      
    </div>
  )
}

export default FormUser
