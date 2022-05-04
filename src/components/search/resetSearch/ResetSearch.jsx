import React from "react";

const ResetSearch = ({ contacts, showingContacts, setSearchQuery }) => {
  const clearSearchQuery = () => {
    setSearchQuery("");
  };
  return (
    <div className="flex items-center mt-4  font-semibold justify-center">
      {showingContacts.length !== contacts.length && (
        <div className="showingContacts">
          <span>
            Now showing {showingContacts.length} of {contacts.length}
          </span>
          <button className="pl-2 font-semibold text-blue-800 underline" onClick={clearSearchQuery}>
            Show all
          </button>
        </div>
      )}
    </div>
  );
};

export default ResetSearch;
