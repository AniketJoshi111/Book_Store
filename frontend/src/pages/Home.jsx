import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

function Home() {
  const [books, setbooks] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios
      .get("https://localhost:5555/books")
      .then((response) => {
        setbooks(response.data.data);
        setloading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8"></h1>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl " />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full border-seperate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No </th>
                <th className="border border-slate-600 rounded-md">Title </th>
                <th className="border border-slate-600 rounded-md">Author</th>
                <th className="border border-slate-600 rounded-md">
                  Publish Year
                </th>
                <th className="border border-slate-600 rounded-md">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => {
                <tr className="h-8" key={book._id}>
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {book.title}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {book.author}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {book.publishYear}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/create/${books._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/books/create/${books._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-800" />
                      </Link>
                      <Link to={`/books/create/${books._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-550" />
                      </Link>
                    </div>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Home;
