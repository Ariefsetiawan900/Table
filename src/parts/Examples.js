// import React from "react";
// import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

// export default function Examples() {
//   const products = [
//     {
//       nik: 1190,
//       nama: "Septian",
//       lokasi: "Jakarta",
//       area: "Emporium Mall",
//       job: "Security",
//     },
//   ];
//   const product = [
//     {
//       nik: 1190,
//       nama: "Septian",
//       lokasi: "Jakarta",
//       area: "Emporium Mall",
//       job: "Security",
//       masuk: "08.15",
//       pulang: "17.16",
//       interval: "09.00",
//     },
//   ];
//   const baru = [
//     {
//       nik: 1190,
//       nama: "Jakarta",
     
//     },
//   ];

//   function buttonFormatter(cell, row) {
//     return (
//       '<button class="btn btn-primary badge-pill" style=width:80px>View</button> ' +
//       '<button class="btn btn-warning badge-pill" style=width:80px>Update</button> ' +
//       '<button class="btn btn-danger badge-pill" style=width:80px>Delete</button>'
//     );
//   }

  
// const options = {
//   exportCSVText: 'my_export',
//   insertText: 'my_insert',
//   deleteText: 'my_delete',
//   saveText: 'my_save',
//   closeText: 'my_close'
// };
  
//   return (
//     <div className="container table-responsive">
//       <h6>Karyawan</h6>
//       <BootstrapTable data={products} options={options} insertRow >
//         <TableHeaderColumn 
//           width="30"
//           dataField="nik"
//           dataAlign="center"
//           isKey
//           thStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Nik
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="60"
//           headerAlign="center"
//           dataField="nama"
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Nama
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="35"
//           headerAlign="center"
//           dataField="lokasi"
//           thStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Lokasi
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="65"
//           headerAlign="center"
//           dataField="area"
//           thStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Area
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="35"
//           headerAlign="center"
//           dataField="job"
//           thStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Job Title
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="100"
//           dataAlign="center"
//           dataField="button"
//           dataFormat={buttonFormatter}
//           tdStyle={{ whiteSpace: "normal" }}
//         >
//           Tool
//         </TableHeaderColumn>
//       </BootstrapTable>
//       <br />

//       <h6>Data Absensi</h6>
//       <BootstrapTable data={product} version="4">
//         <TableHeaderColumn
//           width="80"
//           dataField="nik"
//           dataAlign="center"
//           isKey
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Nik
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="190"
//           headerAlign="center"
//           dataField="nama"
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Nama
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="100"
//           headerAlign="center"
//           dataField="lokasi"
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Lokasi
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="150"
//           headerAlign="center"
//           dataField="area"
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Area
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="100"
//           headerAlign="center"
//           dataField="job"
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Job Title
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="80"
//           headerAlign="center"
//           dataField="masuk"
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Masuk
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="80"
//           headerAlign="center"
//           dataField="pulang"
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Pulang
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="85"
//           headerAlign="center"
//           dataField="interval"
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Interval
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="100"
//           dataAlign="center"
//           dataField="button"
//           dataFormat={buttonFormatter}
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Tool
//         </TableHeaderColumn>
//       </BootstrapTable>
//       <br/>
//       <h6>Master Data</h6>
//       <h6>Lokasi</h6>
//       <BootstrapTable data={baru} tableStyle={{width: "38%"}}>
//         <TableHeaderColumn
//           width="10"
//           dataField="nik"
//           dataAlign="center"
//           isKey
//           thStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Kode Lokasi
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="10"
//           dataAlign="center"
//           dataField="nama"
//           thStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Nama Lokasi
//         </TableHeaderColumn>
        
//       </BootstrapTable>
//       <br/>
//       <h6>Area</h6>
//       <BootstrapTable data={baru} tableStyle={{width: "56%"}}>
//         <TableHeaderColumn
//           width="10"
//           dataField="nik"
//           dataAlign="center"
//           isKey
//           thStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Kode Lokasi
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="10"
//           dataAlign="center"
//           dataField="nama"
//           thStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Nama Lokasi
//         </TableHeaderColumn>
//         <TableHeaderColumn
//           width="10"
//           dataAlign="center"
//           dataField="nama"
//           thStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//           tdStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
//         >
//           Nama Lokasi
//         </TableHeaderColumn>
        
//       </BootstrapTable>
//     </div>
//   );
// }
