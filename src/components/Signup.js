import {useState} from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import {ref,set,getDatabase} from "firebase/database";
import { auth } from './FBConfig'; // Import the Firebase Authentication instance

function Signup() {
  const [uname, setUname] = useState('');
  const [emailid, setEmailid] = useState('');
  const [passw, setPassw] = useState('');

  const huname = (event) => {
    setUname(event.target.value);
  };

  const hemail = (event) => {
    setEmailid(event.target.value);
  };

  const hpass = (event) => {
    setPassw(event.target.value);
  };

  const sendVerificationEmail = async () => {
    try {
      // Send email verification
      await sendEmailVerification(auth.currentUser);
      alert('Verification email sent. Please check your email inbox.');
      window.location.href = "Login";
    } catch (error) {
      console.error('Error sending verification email: ', error);
      alert('An error occurred while sending the verification email. Please try again.');
    }
  };

  const save = async (event) => {
    event.preventDefault();
 
    const data = { emailid, uname, passw };
        // const node = emailid + "-" + new Date().toString();
        const sanitizedEmail = emailid.replace(/[.#$[\]]/g, ''); // Remove invalid characters
      const node = sanitizedEmail + "-" + new Date().toString();
        const db = getDatabase();
        set(ref(db, "student/" + node), data)
        .then(() => {
                    console.log("Data submitted");
                  })
                  .catch((error) => {
                    console.error("Error saving data: ", error);
                  });


    try {
      // Create a new user with email and password
      const { user } = await createUserWithEmailAndPassword(auth, emailid, passw);

      // Set additional user data
      await updateProfile(user, {
        displayName: uname,
      });

      // Send verification email
      await sendVerificationEmail();
    } catch (error) {
      console.error('Error registering user: ', error);
      if(passw.length<6)
      {
        alert("Password is not Strong");
      }
      else{
        alert("Email is Incorrect")
      }
     
    }
  };

  return (
    <>
      {/* <section className="text-gray-600 body-font bg-gradient-to-r from-[#2DFFF5] to-[#FFF878]"> */}
      <section className="text-gray-600 body-font bg-[#101828]">
        <div className="container px-3 py-12 mx-auto flex flex-wrap items-center justify-center min-h-screen">
          <form
            onSubmit={save}
            className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-xl p-8 flex flex-col md:ml-0 mt-10 md:mt-0"
          >
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-gray-50-400 focus:ring-2 focus:ring-[#101828] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={huname}
                value={uname}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-gray-50 focus:ring-2 focus:ring-[#101828] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={hemail}
                value={emailid}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-gray-50 focus:ring-2 focus:ring-[#101828] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={hpass}
                value={passw}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="cpassword" className="leading-7 text-sm text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-[#101828] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <input
              type="submit"
              className="text-white bg-[#475467] border-0 py-2 px-8 focus:outline-none hover:bg-[#101828] cursor-pointer rounded text-lg"
              value="Register"
            />
            <p className="text-sm text-gray-500 mt-3">
              <a href="/login">
                <u>Already have an account.</u>
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-3">
              By signing up, you agree to{' '}
              <a href="#">
                <u>Terms of Use</u>
              </a>{' '}
              and{' '}
              <a href="#">
                <u>Privacy Policy</u>
              </a>
              .
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Signup;