import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { app, auth } from '../firebase.config';
import { useNavigate } from 'react-router';

const Registration = () => {


  const [userInfo, setUserInfo] = useState({
    Username: "",
    Emailaddress: "",
    Password: "",
    Confrimpassword: "",
  });



  const navigate = useNavigate()


  const handleusername = (e) => {
    setUserInfo((prev) => {
      return { ...prev, Username: e.target.value }
    })
  };

  const handleemail = (e) => {
    setUserInfo((prev) => {
      return { ...prev, Emailaddress: e.target.value }
    })
  };

  const handlepassword = (e) => {
    setUserInfo((prev) => {
      return { ...prev, Password: e.target.value }
    })
  };

  const handleconfrimpassword = (e) => {
    setUserInfo((prev) => {
      return { ...prev, Confrimpassword: e.target.value }
    })
  }






  // button function start // 

  const handlesubmit = (e) => {
    e.preventDefault();

    // password regex email regex code //
    const { Emailaddress, Password, Confrimpassword } = userInfo;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // password regex code //


    // validation //


    if (!userInfo.Username || !userInfo.Emailaddress || !userInfo.Password || !userInfo.Confrimpassword) {
      toast('Please fill out all fields.');
      return;
    }

    if (!emailRegex.test(Emailaddress)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(Password)) {
      toast.error('Password should be at least 8 characters and include uppercase, lowercase, number, and special character.');
      return;
    }

    if (Password !== Confrimpassword) {
      toast.error('Password and Confirm Password do not match.');
      return;
    }
    else {
      createUserWithEmailAndPassword(auth, userInfo.Emailaddress, userInfo.Password, userInfo.Confrimpassword)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              // Email verification sent!
              updateProfile(auth.currentUser, {
                displayName: userInfo.Username

              }).then(() => {
                const user = userCredential.user;
                console.log(user)
                toast.success('Registration successful!');
                setTimeout(() => {
                  navigate("/");
                }, 1000);


              }).catch((error) => {
                // An error occurred
                // ...

              });

            });
          // Signed up 


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          if (errorCode.includes("auth/email-already-in-use"))
            toast.error("Email already in use")
          setUserInfo({
            Username: "",
            Emailaddress: "",
            Password: "",
            Confrimpassword: "",
          })
        });
    }



  };

  // validation //

  // button function end //






  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <Toaster />
        <form onSubmit={handlesubmit}
          className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <h2 className='font-Poppins'>Talk to me</h2>
          </div>

          {/* Username */}
          <div className="mt-6">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              name="Username"
              onChange={handleusername}
              value={userInfo.Username}
              type="text"
              placeholder="Enter your name"
              className="block w-full py-3 px-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              name="Emailaddress"
              onChange={handleemail}
              value={userInfo.Emailaddress}
              type="email"
              placeholder="user@example.com"
              className="block w-full py-3 px-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              name="Password"
              onChange={handlepassword}
              value={userInfo.Password}
              type="password"
              placeholder="Minimum 8 chars, A-Z, a-z, 0-9, @#$%"
              className="block w-full py-3 px-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              name="Confrimpassword"
              onChange={handleconfrimpassword}
              value={userInfo.Confrimpassword}
              type="password"
              placeholder="Re-type your password"
              className="block w-full py-3 px-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
          </div>


          <div className="mt-6">

            <button
              type='submit' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Registration
            </button>

            <div className="mt-6 text-center ">
              <Link
                to={"/login"}
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>

  )
}

export default Registration