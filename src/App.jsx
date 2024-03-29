import { useEffect, useState } from 'react'

import './App.css'
import useCrud from './hooks/useCrud';
import FormUser from './componets/FormUser';
import CardUser from './componets/CardUser';

function App() {
  const url='https://users-crud.academlo.tech/';
  const [editUser, seteditUser] = useState()
  const [users,getUsers,createUser,deleteUser,updateUser]=useCrud(url);
  const [isOpen, setIsOpen] = useState(true);
 

  useEffect(() => {
    getUsers('/users');
    
  }, []);
  
  const handleOpen=()=>{
    setIsOpen(true);

  }
  


  return (
   
      <div>
        <div className='container'>
        <h1>Usuarios</h1><button className='create_users' onClick={handleOpen}>+ Crear nuevo usuario</button></div>
       
        <FormUser
        createUser={createUser}
        editUser={editUser}
       
        updateUser={updateUser}
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        /> 
         <div className='card_user'>
          {
            users?.map(user =>(
              <CardUser
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              isOpen={isOpen} 
              setIsOpen={setIsOpen}
              seteditUser={seteditUser}
              
            
              /> 

            ))
          }
          </div> 
        
      </div>
    

  )
}

export default App
