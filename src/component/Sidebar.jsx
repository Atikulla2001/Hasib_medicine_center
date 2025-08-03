import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { LogOut, User, Users, MessageCircle, Settings, PlusCircle } from 'lucide-react';
import { userLoginInfo } from '../slices/UserSlice';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';

const Sidebar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = getAuth()


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            console.log(user)
            if (user) {
                dispatch(userLoginInfo({
                    name: user.displayName,
                    email: user.email,
                    uid: user.uid,
                }))
            } else {
                dispatch(userLoginInfo(null))
            }
        });
    }, [dispatch])




    const handlelogout = () => {
        signOut(auth).then(() => {
            navigate("/login")
        }).catch((error) => {
            alert(error)
        });

    }





    return (
        <>
            <div className=" bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col">

                {/* Profile Section */}
                <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        A
                    </div>
                    <div>
                        <h2 className="text-md font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">Atikulla Hasib</h2>
                        <p className="text-xs text-green-500">● Online</p>
                    </div>
                </div>

                {/* Search Bar */}
                {/* <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search chats..."
                        className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div> */}

                {/* Action Buttons */}
                {/* <div className="space-y-2 mb-4">
                    <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                        <PlusCircle size={18} className="mr-2" /> New Chat
                    </button>
                    <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600">
                        <Users size={18} className="mr-2" /> New Group
                    </button>
                </div> */}

                {/* Menu */}
                <div className="space-y-2 text-gray-700 dark:text-gray-200">
                    <button className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                        <MessageCircle size={18} className="mr-2" /> Chats
                    </button>
                    <button className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                        <User size={18} className="mr-2" /> Contacts
                    </button>
                    <button className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Users size={18} className="mr-2" /> Groups
                    </button>
                    <button className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Settings size={18} className="mr-2" /> Settings
                    </button>
                    <button onClick={handlelogout}
                        className="flex items-center w-full px-3 py-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg">
                        <LogOut size={18} className="mr-2" /> Logout
                    </button>
                </div>
            </div>


        </>


    )
}

export default Sidebar