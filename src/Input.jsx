import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Input = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const mobile = mobileRef.current.value.trim();

  
    if (!name || !email || !mobile) {
      alert('Please fill in all fields.');
      return;
    }

    const newEntry = { name, email, mobile };
    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.push(newEntry);
    localStorage.setItem("entries", JSON.stringify(entries));

    // Clear input fields after saving
    nameRef.current.value = "";
    emailRef.current.value = "";
    mobileRef.current.value = "";

    navigate("/");
  };

  return (
    <div style={{ display: "flex", paddingTop: "120px" }}>
      <div
        style={{
          padding: "20px",
          width: "20%",
          margin: "0 auto",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ margin: "20px 0" }}>
          <label
            htmlFor="nameField"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Name
          </label>
          <input
            id="nameField"
            type="text"
            ref={nameRef}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
            placeholder="Enter name"
          />
        </div>
        <div style={{ margin: "20px 0" }}>
          <label
            htmlFor="emailField"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Email
          </label>
          <input
            id="emailField"
            type="email"
            ref={emailRef}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
            placeholder="Enter email"
          />
        </div>
        <div style={{ margin: "20px 0" }}>
          <label
            htmlFor="mobileField"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Mobile Number
          </label>
          <input
            id="mobileField"
            type="tel"
            ref={mobileRef}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
            placeholder="Enter mobile number"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={handleClick}
              style={{
                borderRadius: "6px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              Save
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/">
              <button
                style={{
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
