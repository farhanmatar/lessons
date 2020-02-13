import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
  SET_ALERT,
  REMOVE_ALERT
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Romal Smith",
        email: "Romal.smith@gmail.com",
        phone: "015-111-111",
        type: "personal"
      },
      {
        id: 2,
        name: "John Smith",
        email: "john.smith@gmail.com",
        phone: "015-222-222",
        type: "personal"
      },
      {
        id: 3,
        name: "Ali",
        email: "Ali.ali@gmail.com",
        phone: "015-333-333",
        type: "personal"
      },
      {
        id: 4,
        name: "Sarah",
        email: "Sarah.Sarah@gmail.com",
        phone: "015-333-333",
        type: "buisness"
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  //ADD_CONTACT
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };

  //DELETE_CONTACT
 
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT, payload: id });
     
  };
  //Set Current_CONTACT

  //UBDATE_CONTACT

  //Filter
  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}{" "}
    </contactContext.Provider>
  );
};

export default ContactState;
