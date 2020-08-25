import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

import Top from "../table/Top";
import Pagination from "../components/Pagination";

export default function TopTable() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://api.mocki.io/v1/9b24102a");
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
    { label: "Nik", key: "id" },
    { label: "Nama", key: "name" },
    { label: "Lokasi", key: "locations" },
    { label: "Area", key: "areas" },
    { label: "Job Title", key: "jobs" },
  ];

  return (
    <section className="container">
      <h5>Karyawan</h5>
      <CSVLink
        data={posts}
        headers={headers}
        filename={"data-karyawan.csv"}
        className="btn btn-info mb-3 btn-sm"
        target="_blank"
      >
        Eksport File.csv
      </CSVLink>
      {" "}{" "}{" "}
      <CSVLink
        data={posts}
        headers={headers}
        filename={"data-karyawan.xls"}
        className="btn btn-info mb-3 btn-sm"
        target="_blank"
      >
        Eksport File.excel
      </CSVLink>
      <Top posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </section>
  );
}
