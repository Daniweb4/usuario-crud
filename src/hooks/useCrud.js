import  { useState } from 'react'
import axios from 'axios';
const useCrud = (urlBase) => {
    
    const [apiData, setapiData] = useState()
    //read leer
    const getApi=(path)=>{
        axios.get(`${urlBase}${path}/`)
        .then(res=>setapiData(res.data))
        .catch(err=>console.log(err));
    }
    //create
    const postApi=(path,data) =>{
        axios.post(`${urlBase}${path}/`,data)
        .then(res=>{ 
            setapiData([...apiData,res.data])
            console.log(res.data);
        
        })
        .catch(err=>console.log(err))
    }
    //Delete
    const deleteApi=(path,id) =>{
        axios.delete(`${urlBase}${path}/${id}`)
        .then(() => {
            setapiData(apiData.filter(element => element.id!==id))
            console.log('borrado con exito');
       
        })
        .catch(err => console.log(err));
    } 
    //update
    const updateApi=(path,id,data) => {
        axios.patch(`${urlBase}${path}/${id}/`,data)
        .then(res=>{ 
            setapiData(apiData.map(element=>element.
            id===id? res.data:element))
            console.log(res.data);
        })
        .catch(err =>console.log(err))

    }
    return [apiData, getApi, postApi,deleteApi,updateApi];
}

export default useCrud