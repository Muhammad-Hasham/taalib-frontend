import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AccOfficerForm() {
  const [accOfficers, setAccOfficers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getAccOfficers = async () => {
      try {
        let token = localStorage.getItem("user");
        token = JSON.parse(token);
        token = token.token
        const response = await axios.get(
          "https://taalib-superadmin-api.onrender.com/api/accountOfficer/allaccountofficers",
          {
            headers: { Authorization: token },
          }
        );
        setAccOfficers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAccOfficers();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accofficer = {
      name,
      email,
      password,
    };
  
    try {
      let token = localStorage.getItem("user");
      token = JSON.parse(token);
      token = token.token;
      const response = await axios.post(
        "https://taalib-superadmin-api.onrender.com/api/accountOfficer/create",
        accofficer,
        {
          headers: { Authorization: token },
        }
      );
      localStorage.setItem("accofficer", JSON.stringify(response.data.data));
      setName("");
      setEmail("");
      setPassword("");
      console.log(response.data.data)
      navigate("/ManageAccOfficer/RegisterAccOfficer/AccOffInfo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <br />
      <h1>Register Account Officer</h1>
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

export default AccOfficerForm;
