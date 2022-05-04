import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import Search from "./components/search/Search"

import contactsListApi from "./utils/ApiContacts";


import "./css/App.css";

function App() {
  const [contacts, setContacts] = useState(contactsListApi);

  return (
    <div>
      <Search contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;
