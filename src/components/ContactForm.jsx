import { useState } from "react";
import PropTypes from "prop-types";

const CONCTACT_FORM_INITIAL_STATE = {
  name: "",
  email: "",
  group: "",
};

const ContactForm = ({ getContact, group }) => {
  const [values, setValue] = useState({ ...CONCTACT_FORM_INITIAL_STATE });
  const { name, email } = values;

  const onChangeHandler = (event) => {
    setValue({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    getContact(values);
    setValue({ ...CONCTACT_FORM_INITIAL_STATE });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="group">Email:</label>
        <select
          name="group"
          id="group"
          onChange={onChangeHandler}
          value={group}
        >
          <option value="">Select Group</option>
          <option value="home">HOME</option>
          <option value="office">OFFICE</option>
        </select>
      </div>
      <input type="submit" value={"Create new contact"} />
    </form>
  );
};

ContactForm.propTypes = {
  getContact: PropTypes.func.isRequired,
  group: PropTypes.string
};

export default ContactForm;
