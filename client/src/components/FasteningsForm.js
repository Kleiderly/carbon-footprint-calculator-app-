import React, { useState } from "react";

function FasteningsForm({ name, selectFastening1, setSelectFastening1 }) {
  const handleSubmit = (event) => event.preventDefault();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectFastening1((prevState) => ({
      ...selectFastening1,
      [name]: value,
    }));
  };
  return (
    <form className="QuoteForm" onSubmit={handleSubmit}>
      <label htmlFor="fastening">{name}:</label>
      <input
        id="name"
        name={name}
        type="number"
        value={selectFastening1}
        onChange={handleChange}
      />
    </form>
  );
}

export default FasteningsForm;
