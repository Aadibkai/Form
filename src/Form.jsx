import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries")) || []
  );
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedEntry, setEditedEntry] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const handleDelete = (indexToDelete) => {
    const updatedEntries = entries.filter(
      (_, index) => index !== indexToDelete
    );
    setEntries(updatedEntries);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const entryToEdit = entries[index];
    setEditedEntry({ ...entryToEdit });
  };

  const handleSaveEdit = () => {
    const updatedEntries = [...entries];
    updatedEntries[editingIndex] = editedEntry;
    setEntries(updatedEntries);
    setEditingIndex(null);
    setEditedEntry({ name: "", mobile: "", email: "" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
          borderBottom: "2px solid #000",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "600" }}>
          Personal Details
        </div>
        <div>
          <Link to="/input">
            <button
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              <img style={{ height: "20px" }} src="./img/add.png" alt="Add" />
            </button>
          </Link>
        </div>
      </div>
      <table
        style={{ width: "50%", borderCollapse: "seprte", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #000",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
                fontWeight: "bold",
              }}
            >
              No
            </th>
            <th
              style={{
                border: "1px solid #000",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
                fontWeight: "bold",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid #000",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
                fontWeight: "bold",
              }}
            >
              Mobile
            </th>
            <th
              style={{
                border: "1px solid #000",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
                fontWeight: "bold",
              }}
            >
              Email
            </th>
            <th
              style={{
                border: "1px solid #000",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
                fontWeight: "bold",
              }}
            >
              Actions
            </th>
            <th
              style={{
                border: "1px solid #000",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
                fontWeight: "bold",
              }}
            >
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td
                style={{
                  border: "1px solid #000",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {index + 1}
              </td>
              <td
                style={{
                  border: "1px solid #000",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editedEntry.name}
                    onChange={(e) =>
                      setEditedEntry({ ...editedEntry, name: e.target.value })
                    }
                  />
                ) : (
                  entry.name
                )}
              </td>
              <td
                style={{
                  border: "1px solid #000",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editedEntry.mobile}
                    onChange={(e) =>
                      setEditedEntry({ ...editedEntry, mobile: e.target.value })
                    }
                  />
                ) : (
                  entry.mobile
                )}
              </td>
              <td
                style={{
                  border: "1px solid #000",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editedEntry.email}
                    onChange={(e) =>
                      setEditedEntry({ ...editedEntry, email: e.target.value })
                    }
                  />
                ) : (
                  entry.email
                )}
              </td>
              <td
                style={{
                  border: "1px solid #000",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {editingIndex === index ? (
                  <button onClick={handleSaveEdit}>Save</button>
                ) : (
                  <button
                    onClick={() => handleDelete(index)}
                    style={{
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{ height: "20px" }}
                      src="./img/Trash.png"
                      alt="Delete"
                    />
                  </button>
                )}
              </td>
              <td
                style={{
                  border: "1px solid #000",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {editingIndex === index ? (
                  <button onClick={() => setEditingIndex(null)}>Cancel</button>
                ) : (
                  <button
                    onClick={() => handleEdit(index)}
                    style={{
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{ height: "20px" }}
                      src="./img/edit.png"
                      alt="Edit"
                    />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
