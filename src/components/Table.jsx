import PropTypes from "prop-types";
import { useState } from "react";

const Table = ({ contacts }) => {
  const [filter, setFilter] = useState("all");
  const handleChange = (e) => setFilter(e.target.value);

  let filteredContacts = [];
  if (filter === "all") {
    filteredContacts = contacts;
  } else {
    filteredContacts = contacts.filter((contact) => contact.group === filter);
  }

  return (
    <>
      <div>
        <p>
          Filters:
          <select onChange={handleChange} value={filter}>
            <option value="all">All</option>
            <option value="">None</option>
            <option value="home">Home</option>
            <option value="office">Office</option>
          </select>
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>GROUP</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact) => (
            <tr key="">
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

Table.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Table;
