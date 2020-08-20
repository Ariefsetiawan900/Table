import React from "react";

export default function Middle({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className=" table-responsive topdown">
      <table className="table table-bordered mb-5 table-striped">
        <thead className="bg-success text-center text-white">
          <tr>
            <th scope="col">Nik</th>
            <th scope="col">Nama</th>
            <th scope="col">Lokasi</th>
            <th scope="col">Area</th>
            <th scope="col">Job Title</th>
            <th scope="col">Masuk</th>
            <th scope="col">Pulang</th>
            <th scope="col">Interval</th>
            <th scope="col">Tools</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, index2) => {
            return [
              <tr key={`middleTable-${index2}`}>
                <td className="text-center">{item._id}</td>
                <td>{item.name}</td>
                <td>{item.locations}</td>
                <td>{item.areas}</td>
                <td>{item.jobs}</td>
                <td>{item.enter}</td>
                <td>{item.back}</td>
                <td>{item.interval}</td>
                <td className="text-right">
                  <button
                    className="btn btn-primary badge-pill mr-2"
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
