import axios from "axios";
import { useState } from "react";

function AdminLogin() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const changeEmailinput =(e)=>{
    setEmail(e.target.value);
  }
  const changePasswordinput =(e)=>{
    setPassword(e.target.value);
  }

  const submitForm = async (e) =>{
    e.preventDefault();
    if(email!='' && password!='')
    {
      const response = await axios.post('http://localhost:8000/login',{
        email:email,
        password:password
      })
      console.log(response.data);
    }
    setEmail('');
    setPassword('');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-orange-100 to-orange-300 from-orange-100 to-orange-300">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center text-orange-600">Admin Login</h2>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-700">Username</label>
            <input
              type="text"
              value={email}
              onChange={changeEmailinput}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Admin Email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={changePasswordinput}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
