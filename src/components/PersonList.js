import React from "react";

const PersonList = (props) => {
  return (
    <div>
      <table className="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>{props.name}</td>
            <td>{props.gender}</td>
            <td>{props.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PersonList;
