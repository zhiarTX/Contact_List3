import React from "react";

export default function SelectedContact({ selectedContact, setSelectedContactId }) {
  return (
    <div>
      {/* Render the detailed contact information here */}
      <h2>Contact Details</h2>
      <p>Name: {selectedContact.name}</p>
      <p>Email: {selectedContact.email}</p>
      <p>Phone: {selectedContact.phone}</p>
      <p>UserId: {selectedContact.Id}</p>
      
    </div>
  );
}
