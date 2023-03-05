export const Filter = ({ filter, searchContact }) => {
  return (
    <div>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={searchContact}
      ></input>
    </div>
  );
};
