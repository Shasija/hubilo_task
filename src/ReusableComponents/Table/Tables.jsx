import React from "react";
import Layout from "../../Container/Layout.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
const Table = () => {
  return (
    <table className="table table-hover mt-2">
      <thead>
        <tr>
          <th scope="col">Index</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Portfolio Link</th>
          <th scope="col">Gender</th>
          <th scope="col">Hobbies</th>
          <th scope="col">Skills</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-active">
          <th scope="row">1</th>
          <td>Sankalp</td>
          <td>hasijasankalp@gmail.com</td>
          <td>www.sankalp.com</td>
          <td>male</td>
          <td>basketball,guitar</td>
          <td>
            team work,leadership,team work,leadership,team work,leadership
          </td>
          <td>
            <FontAwesomeIcon icon={faPencilAlt} />
          </td>
          <td>
            <FontAwesomeIcon icon={faTrash} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Layout(Table);
