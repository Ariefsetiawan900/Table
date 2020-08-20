import React from "react";

export default function BottomUnder({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="table-responsive">
      <h6>Lokasi</h6>
      <table
        className="table table-bordered table-striped"
        style={{ width: "55%" }}
      >
        <thead className="bg-primary text-center text-white">
          <tr>
            <th scope="col">Kode Area</th>
            <th scope="col">Lokasi</th>
            <th scope="col">Area</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, index2) => {
            return [
              <tr key={`bottomTable-${index2}`}>
                <td className="text-center">{item._id}</td>
                <td className="text-center">{item.locations}</td>
                <td className="text-center">{item.areas}</td>
              </tr>,
            ];
          })}
        </tbody>
      </table>
    </div>
  );
}
