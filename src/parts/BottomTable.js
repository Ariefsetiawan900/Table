import React from "react";

export default function BottomTable() {
  return (
    <section>
      <div className="container">
        <h6>Master Data</h6>
        <h6>Lokasi</h6>
        <table class="table table-bordered mb-5" style={{width: "30%"}}>
          <thead className="bg-primary text-center text-white">
            <tr>
              <th scope="col">Kode Lokasi</th>
              <th scope="col">Nama Lokasi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">JKT</td>
              <td className="text-center">Jakarta</td>
            </tr>
          </tbody>
        </table>
        
        <h6>Lokasi</h6>
        <table class="table table-bordered" style={{width: "55%"}}>
          <thead className="bg-primary text-center text-white">
            <tr>
              <th scope="col">Kode Area</th>
              <th scope="col">Lokasi</th>
              <th scope="col">Area</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">EMP</td>
              <td className="text-center">Jakarta</td>
              <td className="text-center">Emporium Mall</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
