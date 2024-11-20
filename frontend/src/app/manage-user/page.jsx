'use client';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ManageUser = () => {

    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);


    const fetchUsers = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/user/getall')
        console.log(res.data);
        setUserList(res.data);
        setLoading(false);
    };

    useEffect(() => {
      fetchUsers();
    }, []);


  return (
    <div className='h-screen bg-gray-200 pt-10'> 
        <h1 className='text-center my-10 font-bold text-3xl'>Manage Users</h1>
        <div className='container mx-auto'>
            {
                loading ? <p className='text-center text-gray-500 text-2xl font-bold'>
                    Loading... Please Wait
                    </p> : (
                        <table className='w-full my-10'>
                            <thead className='border border-slate-800 text-white bg-slate-800'>
                                <tr>
                                    <th className='p-2'>ID</th>
                                    <th className='p-2'>Name</th>
                                    <th className='p-2'>Email</th>
                                    <th className='p-2'>City</th>
                                    <th className='p-2'>Registered At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userList.map( (user) => {
                                        return <tr></tr>
                                    })
                                }
                            </tbody>
                        </table>
                    )
            }
        </div>

    </div>
  )
}

export default ManageUser