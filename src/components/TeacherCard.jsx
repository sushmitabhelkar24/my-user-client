import React from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import toast,{Toaster} from 'react-hot-toast'
import DeleteIco from './../assets/delete.png'
import EditIco from './../assets/edit.png'


function TeacherCard({id,name,city,loadteachers}) {
const deleteTeacher = async() => {
    const response =await axios.delete(`https://backend-method-server.onrender.com/teachers/${id}`);

    if(response.data.success){
        toast.success(response.data.message);
        loadteachers();
    }else{
        toast.error(response.data.message)
    }
}

  return (
    <div>
    <div className='border-2 border-gray-400 p-4 m-2 rounded-2xl shadow-2xl relative'>
      <h1 className='text-2xl'>{id}--{name}</h1>
      <p className='text-xl'>{city}</p>
      <img src={DeleteIco} alt="trash" className='h-8 absolute top-2 right-5' onClick={deleteTeacher}/>
      <Link to={`/edit/${id}`}>
      <img src={EditIco} alt="edit" className='h-6 absolute bottom-2 right-5' />
      </Link>
    </div>
    <Toaster/>
    </div>
  )
}

export default TeacherCard
