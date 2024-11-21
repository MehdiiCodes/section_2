'use client';
import { IconPencil, IconTrash } from '@tabler/icons-react';
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

    const deleteUser = async (id) => {
        const res = await axios.delete(`http://localhost:5000/user/delete/${id}`);
        if (res.status === 200) {
            fetchUsers();
        }
    }


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
                            <tbody className='bg-gray-100'>
                                {
                                    userList.map( (user) => {
                                        return <tr key={user._id} className=''>
                                            <td className='p-2 border border-gray-300'>{user._id}</td>
                                            <td className='p-2 border border-gray-300'>{user.name}</td>
                                            <td className='p-2 border border-gray-300'>{user.email}</td>
                                            <td className='p-2 border border-gray-300'>{user.city}</td>
                                            <td className='p-2 border border-gray-300'>{user.createdAt}</td>
                                            <td className='p-2 border border-gray-300'>
                                                <button onClick={() => { deleteUser(user._id) }} className='bg-red-500 text-white px-2 py-1 rounded-full'>
                                                    <IconTrash />
                                                </button>
                                            </td>
                                            <td className='p-2 border border-gray-300'>
                                                <button className='bg-blue-500 text-white px-2 py-1 rounded-full' >
                                                    <IconPencil />
                                                </button>
                                            </td>
                                        </tr>
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