import React, { useEffect, useState } from 'react'
import axios from "axios"
import TeacherCard from "./../components/TeacherCard"
import AddUser from "./../assets/add-user.png"
import { Link } from 'react-router';

function Home() {
  const [teachers,setTeachers] = useState([]);

  const loadteachers = async()=>{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/teachers`);
    setTeachers(response.data.data);
  };

  useEffect(()=>{
    loadteachers();
  },[])

  return (
    <div>
      <h1 className='text-center text-4xl p-2'>All Teachers</h1>
      <div>
        {teachers.map((teachObj,i)=>{
         const {id,name,city} = teachObj;
         return <TeacherCard key={i} id={id} name={name} city={city} loadteachers={loadteachers}/>
        })}
      </div>
      <Link to="/add">
      <img src={AddUser} alt="addimg" className='h-[70px] fixed bottom-5 right-5' />
      </Link>
    </div>
  )
}

export default Home
