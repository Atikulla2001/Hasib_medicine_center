
import React from 'react'
import Userlist from '../component/Userlist'

// data niye asar jonno useSelector call korte hobe //

import { useSelector } from 'react-redux'

// data pathanor jonno dispatch call call korte hobe //

import { useDispatch } from 'react-redux'
import { userLoginInfo } from '../slices/UserSlice'






const Home = () => {

  // const dispatch = useDispatch()

  // const handleincert = () => {
  //   const userdata = {
  //     name: "MD. Atikulla Hasib",
  //     address: "Creative IT Institute"
  //   }

  //   dispatch(userLoginInfo(userdata))

  // }



  const data = useSelector((state) => state.userLogin.value)
  console.log(data)




  return (

    <>

      {/* <button onClick={handleincert} className='bg-red-500'>incert data</button> */}


      <div className='grid grid-cols-3 gap-3 '>
        {/* <h2>{data.displayName}</h2> */}
        <Userlist />
        {/* <Userlist />
        <Userlist />
        <Userlist />
        <Userlist />
        <Userlist /> */}
      </div>
    </>




  )
}

export default Home
