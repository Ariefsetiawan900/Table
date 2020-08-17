import React from "react";

export default function MiddleTable() {
  return (
    <section>
      <div className="container">
          <h6>Data Absensi</h6>
        <table class="table table-bordered mb-5">
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
            <tr>
              <td className="text-center">1190</td>
              <td>Septian</td>
              <td>Jakarta</td>
              <td>Emporium Mall</td>
              <td>Security</td>
              <td>08.05</td>
              <td>17.15</td>
              <td>09.01</td>
              <td className="bg-primary text-white">View</td>
            </tr>
          
          </tbody>
        </table>
        <span>Note : Menu Karyawan dan data Absensi beda page</span>
      </div>
    </section>
  );
}
