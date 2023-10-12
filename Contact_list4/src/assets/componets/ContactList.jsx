import React, { useState, useEffect } from "react";

const url = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const ContactList = () => {
  const [contacts, setContacts] = useState(dummyContacts);
  const [selectedContactId, setSelectedContactId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setContacts(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const selectedUser = contacts.find(
    (contact) => contact.id === selectedContactId
  );
  console.log(selectedUser);

  return (
    <div className="App">
      {selectedContactId ? (
        <div
          onClick={() => {
            setSelectedContactId(!selectedContactId);
          }}
          className="user"
        >
          <h2>{selectedUser.name}</h2>
          <ul>
            <li>Username: {selectedUser.username}</li>
            <li>Email: {selectedUser.email}</li>
            <li>Phone: {selectedUser.phone}</li>
            <li>Website: {selectedUser.website}</li>
            <li>
              Address: {selectedUser.address.street},{" "}
              {selectedUser.address.suite}, {selectedUser.address.city},{" "}
              {selectedUser.address.zipcode}
            </li>
          </ul>
        </div>
      ) : (
        <div className="user">
          <table>
            <thead>
              <tr>
                <th colSpan="3">Contact List</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
              </tr>
              {contacts.map((contact) => {
                return (
                  <>
                    <tr
                      key={contact.id}
                      onClick={() => {
                        setSelectedContactId(contact.id);
                      }}
                    >
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactList;