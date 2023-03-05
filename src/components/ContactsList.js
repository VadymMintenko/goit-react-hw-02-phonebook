import { nanoid } from 'nanoid';
export const ContactsList = ({ state }) => {
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
              </li>
            );
          })}
      </ul>
      <p>{state.name}</p>
    </>
  );
};
