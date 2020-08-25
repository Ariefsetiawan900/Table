import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

import Middle from "../table/Middle";
import Pagination from "../components/Pagination";

export default function MiddleTable() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://api.mocki.io/v1/01fdfe57");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const headers = [
    { label: "Nik", key: "_id" },
    { label: "Nama", key: "name" },
    { label: "Lokasi", key: "locations" },
    { label: "Area", key: "areas" },
    { label: "Job Title", key: "jobs" },
    { label: "Masuk", key: "enter" },
    { label: "Pulang", key: "back" },
    { label: "Interval", key: "interval" },
  ];

  return (
    <section className="container">
      <h5>Data Absensi</h5>
      <CSVLink
        data={posts}
        headers={headers}
        filename={"data-absensi.csv"}
        className="btn btn-info mb-3 btn-sm"
        target="_blank"
      >
        Ekspor File.csv
      </CSVLink>
      {" "}{" "}{" "}
      <CSVLink
        data={posts}
        headers={headers}
        filename={"data-absensi.xls"}
        className="btn btn-info mb-3 btn-sm "
        target="_blank"
      >
        Ekspor File.excel
      </CSVLink>
      <Middle posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <span>Note : Menu Karyawan dan data Absensi beda page</span>
      <br />
      <br />
    </section>
  );
}
