import { useState } from "react";
import axios from "axios";

const TableList = ({ handleOpen, setTableData, tableData }) => {
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this data?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/clients/${id}`);
        setTableData((prevData) =>
          prevData.filter((client) => client.id !== id)
        );
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="overflow-x-auto mt-10">
      {error && <div className="alert alert-error">{error}</div>}

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="hover">
          {/* row 1 */}
          {tableData &&
            tableData.map((client) => {
              return (
                <tr key={client.id}>
                  <th>{client.id}</th>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.job}</td>
                  <td>{client.rate}</td>
                  <td>
                    <button
                      className={`btn rounded-full w-20 ${
                        client.isactive
                          ? "btn-primary"
                          : "btn-outline btn-primary"
                      }`}
                    >
                      {client.isactive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleOpen("edit", client)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-accent"
                      onClick={() => handleDelete(client.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
