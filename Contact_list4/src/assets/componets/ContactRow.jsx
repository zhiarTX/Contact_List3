import React from "react";

export default function ContactRow({ setSelectedContactId, contact, onBackClick }) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
        <button onClick={() => setSelectedContactId(contact.id)}>
          View
        </button>
        <button onClick={onBackClick}>
          Back
        </button>
      </td>
    </tr>
  );
}
