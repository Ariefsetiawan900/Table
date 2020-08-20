import React from 'react'
import { CSVLink } from "react-csv";

export default function X() {

 
const headers = [
  { label: "First Name", key: "firstname" },
  { label: "Last Name", key: "lastname" },
  { label: "Email", key: "email" }
];
 
const data = [
  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];
    return (
        <div>
            <CSVLink data={data} headers={headers} filename={"my-file.csv"} className="btn btn-primary"
  target="_blank">
  Download me
</CSVLink>
        </div>
    )
}
