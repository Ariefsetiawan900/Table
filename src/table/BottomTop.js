import React from "react";

export default function BottomTop({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="table-responsive mb-2">
      <h5>Master Data</h5>
      <h6>Lokasi</h6>
      <table
        className="table table-bordered mb-5 table-striped"
        style={{ width: "30%" }}
      >
        <thead className="bg-primary text-center text-white">
          <tr>
            <th scope="col">Kode Lokasi</th>
            <th scope="col">Nama Lokasi</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, index1) => {
            return [
              <tr key={`bottomTable-${index1}`}>
                <td className="text-center">{item._id}</td>
                <td className="text-center">{item.name}</td>
              </tr>,
            ];
          })}
        </tbody>
      </table>
    </div>
  );
}
