import React, { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchForm() {
    const navigate = useNavigate();
    const [searchString, setSearchString] = useState("");

    const handleSearch = async (e) => {
    
        let token = localStorage.getItem("user");
        token = JSON.parse(token);
        token = token.token
    e.preventDefault();

    const data = {
      employeeId: String(searchString),
      };

    try {
      const response = await axios.get(
        `https://taalib-superadmin-api.onrender.com/api/academicOfficer/retrieve/${data.employeeId}`,
        {
          headers: { Authorization: token },
        }
      );
    
      localStorage.setItem("acaofficer", JSON.stringify(response.data));
      navigate("/ManageAcaOfficer/ViewAcaOfficer/SearchResult");
    } catch (error) {
      alert("Academic Officer not found");
    }
  };

  return (
    <div className="container">
      <br />
      <h1>View Academic Officer Details</h1>
      <h2>Search Academic Officers</h2>
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
    </div> 
  );
}

export default SearchForm;
