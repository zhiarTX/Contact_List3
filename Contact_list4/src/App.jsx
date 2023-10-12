import { useState } from "react";
import "./App.css";
import ContactList from "./assets/componets/ContactList";
import SelectedContact from "./assets/componets/SelectedContact"


export default function App () {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
      <div>Selected Contact View</div>
    ) : (
        <ContactList />
    )}
        </>
  );
}
                                                                                   