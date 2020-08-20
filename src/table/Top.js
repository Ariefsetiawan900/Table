import React from "react";


export default function Top({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return (
    <div className="table-responsive">
      <h6>Karyawan</h6>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark text-center">
          <tr>
            <th scope="col">Nik</th>
            <th scope="col">Nama</th>
            <th scope="col">Lokasi</th>
            <th scope="col">Area</th>
            <th scope="col">Job Title</th>
            <th scope="col">Tools</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, index1) => {
            return [
              <tr key={`tobTable-${index1}`}>
                <td className="text-center">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.locations}</td>
                <td>{item.areas}</td>
                <td>{item.jobs}</td>
                <td className="text-right">
                  <button
                    className="btn btn-primary badge-pill mr-2 "
                    style={{ width: "80px" }} 
                  >
                    View
                  </button>
                  <button
                    className="btn btn-warning badge-pill mr-2"
                    style={{ width: "80px" }}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger badge-pill"
                    style={{ width: "80px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>,
            ];
          })}
        </tbody>
      </table>

     
    </div>
  );
}
