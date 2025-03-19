/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../axiosConfig";
import { useAdminAuth } from "./Context/AdminAuthProvider";

function AdminLogin() {
  const navigate = useNavigate();
  const { checkAuthAdmin } = useAdminAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await instance.post("/admin/login", data, {
        withCredentials: true,
      });
      checkAuthAdmin();
      if (
        response.status === 200 &&
        response.data.message === "Login Successfull"
      ) {
        navigate("/admin/home");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      </div>
      </div>
    </>
  );
}

export default AdminLogin;
