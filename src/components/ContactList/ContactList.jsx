import { PropTypes } from "prop-types";
import { Fragment } from "react";
import { AiFillDelete } from "react-icons/ai";

const ContactList = ({ contacts, setContacts, showingContacts }) => {
  const removeContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

 
  return (
    <Fragment>
      <div className="parent_container w-[100vw]">
        {showingContacts.map(({ id, name, handle, avatarUrl }) => (
          <div
            key={id}
            className="second-parent__container flex items-center justify-between h-[25vh] w-[90vw] p-10 bg-slate-50  m-8  mt-16 shadow-xl rounded-lg"
          >
            <ul className="list-none flex items-center ">
              <li className="img-container">
                <img
                  className="rounded-full mr-[10px]"
                  src={avatarUrl}
                  alt="img-profile"
                />
              </li>
              <div className="names_container text-[1.5rem]">
                <li className="name">{name}</li>
                <li>{handle}</li>
              </div>
            </ul>
            <div className="btn_container">
              <button
                onClick={() => removeContact(id)}
                className="text-xl text-[black] hover:text-red-600 duration-100"
              >
                <AiFillDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
