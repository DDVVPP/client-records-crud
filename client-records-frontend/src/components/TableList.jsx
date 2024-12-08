const TableList = ({ handleOpen }) => {
  const clients = [
    {
      id: 1,
      name: "John Doe",
      email: "John.Doe@gmail.com",
      job: "Developer",
      rate: "100",
      isActive: true,
    },
    {
      id: 2,
      name: "John1 Doe",
      email: "John1.Doe@gmail.com",
      job: "Developer1",
      rate: "100",
      isActive: true,
    },
    {
      id: 3,
      name: "John2 Doe",
      email: "John2.Doe@gmail.com",
      job: "Developer2",
      rate: "100",
      isActive: false,
    },
  ];
  return (
    <div className="overflow-x-auto mt-10">
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
          {clients.map((client) => {
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
                      client.isActive
                        ? "btn-primary"
                        : "btn-outline btn-primary"
                    }`}
                  >
                    {client.isActive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleOpen("edit")}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-accent">Delete</button>
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
