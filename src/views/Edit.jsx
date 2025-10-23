import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import toast,{Toaster} from "react-hot-toast"
import { useParams } from 'react-router'

function Edit() {

    const {userid} = useParams();
    const [teacher,setTeacher] = useState({
        id:"",
        name:"",
        city:""
    })

    const editTeacher = async() => {
        try{
      const response =await axios.put(`http://localhost:5005/teachers/${userid}`,{
        id:teacher.id,
        name:teacher.name,
        city:teacher.city
      });
      if(response.data.success){
    toast.success(response.data.message);
    }else{
        toast.error(response.data.message);
    }}catch(e){
          toast.error(e.response.data.message);
    }
    };

    const loadteachers = async()=>{
       try{
        const response = await axios.get(`http://localhost:5005/teachers/${userid}`);
        setTeacher(response.data.data);
    }
    catch(e){
          toast.error(response.data.data);
       }
    }
    useEffect(()=>{
        if(userid){
            loadteachers();
        }
    },[userid]);

  return (
    <div>
      <h1 className='text-center text-4xl my-4'>Edit Teachers</h1>
      <div className='border-2 border-gray-600 w-1/2 h-[300px] mx-auto rounded-md my-8 p-4'>
      <input type="text"
       placeholder='Enter ID' 
       className='block mx-auto border-2 border-gray-500 shadow-2xl p-2 m-2 rounded-md'
       value= {teacher.id}
       onChange={(e) => setTeacher({...teacher, id: e.target.value})} 
       disabled/>
     
      <input type="text" 
      placeholder='Enter Name' 
      value={teacher.name}
      onChange={(e)=> setTeacher({...teacher, name: e.target.value})}
      className='block mx-auto border-2 border-gray-500 shadow-2xl p-2 m-2 rounded-md' />
      
      <input type="text" 
      placeholder='Enter City' 
      value={teacher.city}
      onChange={(e) => setTeacher({...teacher, city: e.target.value})}
      className='block mx-auto border-2 border-gray-500 shadow-2xl p-2 m-2 rounded-md focus:outline-none'/>
      
      <button className='bg-purple-400 text-2xl px-4 py-2 m-4 rounded-full text-white mx-auto block' onClick={editTeacher}>Edit Teachers</button>
      </div>
      <Toaster/>
    </div>
  )
}

export default Edit
