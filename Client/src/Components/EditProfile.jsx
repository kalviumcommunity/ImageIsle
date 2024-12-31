import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const nav=useNavigate()
  const handleUpdate = (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId"); // Assuming userId is stored in localStorage
    axios
      .put("http://localhost:4050/updateProfile", { userId, name, email })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user",JSON.stringify(response.data.user))
        nav("/profile")
        alert("Profile updated successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("Error updating profile");
      });
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-profile-title">Edit Your Profile</h2>
      <form className="edit-profile-form" onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <div className="edit-profile-btn-group">
          <button className="save-btn" type="submit">
            Save Changes
          </button>
          <button className="cancel-btn" type="button" onClick={() => window.location.href = '/profile'}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;

