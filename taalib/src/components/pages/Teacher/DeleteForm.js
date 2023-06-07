import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteForm() {
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
  
    let token = localStorage.getItem("user");
        token = JSON.parse(token);
        token = token.token
  
        const data = {
        employeeId: String(searchString),
        };
  
    try {
      const response = await axios.get(
        `https://taalib-superadmin-api.onrender.com/api/teacher/retrieve/${data.employeeId}`,
        {
          headers: { Authorization: token },
        }
      );
  
      if (!response.data) {
        alert("Teacher not found");
        return;
      }
  
      localStorage.setItem("teacher", JSON.stringify(response.data));
      navigate("/ManageTeacher/DeleteTeacher/TeacherInfo");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="container">
      <br />
      <h1>Remove Teacher</h1>
      <h2>Search Teacher</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="employeeId">Employee ID</label>
          <input
            type="text"
            className="form-control"
            id="employeeId"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default DeleteForm;