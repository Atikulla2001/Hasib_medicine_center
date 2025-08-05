import Userlist from '../component/Userlist'
import { useDispatch } from 'react-redux'



// data niye asar jonno useSelector call korte hobe //

import { useSelector } from 'react-redux'

// data pathanor jonno dispatch call call korte hobe //










const Home = () => {

  // const dispatch = useDispatch()

  // const handleincert = () => {
  //   const userdata = {
  //     name: "MD. Atikulla Hasib",
  //     address: "Creative IT Institute"
  //   }

  //   dispatch(userLoginInfo(userdata))

  // }



  // console.log(auth)

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
