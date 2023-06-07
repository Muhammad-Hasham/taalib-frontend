import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TeacherForm() {
  const navigate = useNavigate();
  useEffect(() => {
    const getTeachers = async () => {
      try {
        let token = localStorage.getItem("user");
        token = JSON.parse(token);
        token = token.token
        await axios.get(
          "https://taalib-superadmin-api.onrender.com/api/teacher/allteachers",
          {
            headers: { Authorization: token },
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    getTeachers();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const teacher = {
      name,
      email,
      password,
    };
  
    try {
      let token = localStorage.getItem("user");
      token = JSON.parse(token);
      token = token.token;
      const response = await axios.post(
        "https://taalib-superadmin-api.onrender.com/api/teacher/create",
        teacher,
        {
          headers: { Authorization: token },
        }
      );
      localStorage.setItem("teacher", JSON.stringify(response.data.data));
      setName("");
      setEmail("");
      setPassword("");
      console.log(response.data.data)
      navigate("/ManageTeacher/RegisterTeacher/TeacherInfo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <br />
      <h1>Register Teacher</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
    
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default TeacherForm;
