'use client'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const UpdateUser = () => {

  const { id } = useParams();
  console.log(id);


  const fetchUserData = async () => {
    const res = await axios.get(`http://localhost:5000/user/getbyid/${id}`);
    console.log(res.data);
  }
  
  useEffect(() => {
    fetchUserData();
  }, [])

  return (
    <div>UpdateUser</div>
  )
}

export default UpdateUser