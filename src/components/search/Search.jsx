import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import ContactList from "../ContactList/ContactList";
import ResetSearch from "./resetSearch/ResetSearch";
const Search = ({ contacts, setContacts }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };
  const showingContacts =
    searchQuery === ""
      ? contacts
      : contacts.filter((c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center mt-2"
      >
        <div className="form-container relative">
          <input
            id="search"
            type="text"
            value={searchQuery}
            className="w-[90vw] placeholder:capitalize  focus:outline-none rounded-lg p-[0.8rem] pl-10"
            placeholder="search contacts"
            onChange={handleSearchInput}
          />
          <div className="search-icon">
            <label htmlFor="search">
              <FaSearch className="cursor-pointer text-xl hover:text-sky-700 absolute top-4 left-3 focus:outline text-[#807f7f]" />
            </label>
          </div>
          <div className="addUser-icon">
            <AiOutlineUserAdd className="cursor-pointer hover:text-sky-700 absolute top-4 right-3 text-xl text-[#807f7f]" />
          </div>
        </div>
      </form>
      <ResetSearch
        contacts={contacts}
        setSearchQuery={setSearchQuery}
        showingContacts={showingContacts}
      />
      <ContactList
        contacts={contacts}
        setContacts={setContacts}
        showingContacts={showingContacts}
      />
    </Fragment>
  );
};

Search.prototype = {
  contacts: PropTypes.array.isRequired,
};
export default Search;
