import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TeacherForm() {
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState(false);

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
        token = token.token
      const response = await axios.put(
        `https://taalib-superadmin-api.onrender.com/api/teacher/update/${searchString}`,
        teacher,
        {
          headers: { Authorization: token },
        }
      );

      localStorage.setItem("teacher", JSON.stringify(response.data.data));
      setName("");
      setEmail("");
      setPassword("");
      navigate("/ManageTeacher/EditTeacher/TeacherInfo");
    } catch (error) {
      alert(error);
    }
  };

  const handleSearch = async (e) => {
    let token = localStorage.getItem("user");
        token = JSON.parse(token);
        token = token.token
        console.log(token)
    e.preventDefault();

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

      setSearchString(response.data.employeeId);
      setName(response.data.name);
      setEmail(response.data.email);
      setPassword(response.data.password);
      setShowForm(true);
    } catch (error) {
      alert("Teacher not found");
      console.log(error);
    }
  };

  return (
    <div className="container">
      <br />
      <h1>Edit Teacher</h1>
      <h2>Search Teacher</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="name">Employee ID</label>
          <input
            type="String"
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

      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
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
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
}

export default TeacherForm;
