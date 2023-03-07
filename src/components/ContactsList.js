import React from 'react';
import { nanoid } from 'nanoid';
export const ContactsList = ({ state, onDeleteContact }) => {
  return (
    <>
      <ul>
        {state.contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(state.filter.toLowerCase())
          )
          .map(element => {
            return (
              <li key={nanoid()}>
                <p>{element.name}:</p>
                <p>{element.number}</p>
                <button onClick={() => onDeleteContact(element.id)}>
                  delete contact
                </button>
              </li>
            );
          })}
      </ul>
      <p>{state.name}</p>
    </>
  );
};
