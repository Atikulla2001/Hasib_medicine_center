import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from 'firebase/auth';




const Userlist = () => {

    const [userList, setUserList] = useState([]);
    const db = getDatabase();
    const auth = getAuth()

    useEffect(() => {
        const userlistRef = ref(db, "userlist/");
        onValue(userlistRef, (snapshot) => {
            const arry = []
            snapshot.forEach((item) => {
                if (item.key != auth.currentUser.uid) {
                    arry.push(item.val())
                }

            })
            setUserList(arry);
        });

    }, [])




    return (
        <>
            <div className="max-w-2xl">
                <div className="p-4 max-w-md bg-white rounded-lg border border-gray-500 m-1">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white font-Poppins">
                            {/* {data.displayName} */}
                        </h3>
                    </div>
                    <div className="flow-root">
                        <ul
                            role="list"
                            className="divide-y divide-gray-200 dark:divide-gray-700 h-[400px] overflow-y-scroll pr-5"
                        >

                            {userList.map((item) => {
                                return (
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="w-8 h-8 rounded-full"
                                                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                                    alt="Neil image"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    {item.name}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {item.email}
                                                </p>
                                            </div>
                                            <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-green-600 cursor-pointer">
                                                <AiOutlinePlus className="text-xl" />
                                            </button>
                                        </div>
                                    </li>
                                )

                            })}





                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Userlist