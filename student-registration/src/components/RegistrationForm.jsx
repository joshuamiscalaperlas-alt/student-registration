import { useState } from "react";
import "../styles/Form.css";
import Button from "./Button";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("Palihog kompletoha ang fields");
      return;
    }

    alert("Registration Successful!");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button text="Submit" type="submit" />
    </form>
  );
}

export default RegistrationForm;