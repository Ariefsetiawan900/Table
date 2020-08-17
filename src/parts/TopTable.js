import React from "react";

export default function TopTable() {
  return (
    <section>
      <div className="container" >
        <h6>Karyawan</h6>
        <table class="table table-bordered" style={{width: "90%"}}>
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
            <tr>
              <td className="text-center" rowspan={3}>1190</td>
              <td rowspan={3}>Septian</td>
              <td rowspan={3}>Jakarta</td>
              <td rowspan={3}>Emporium Mall</td>
              <td rowspan={3}>Security</td>
              <td className="bg-primary text-white">View</td>
            </tr>
            <tr>
              <td className="bg-warning text-white">Update</td>
            </tr>
            <tr>
              <td className="bg-danger text-white">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
