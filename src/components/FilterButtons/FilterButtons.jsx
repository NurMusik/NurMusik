const FilterButtons = ({ terms, selection, setSelection }) => (
  <div className="btn-group">
    {terms.map((term) => (
      <button className="filterButton">
        <input
          type="radio"
          id={term}
          className="btn-check"
          checked={term === selection}
          autoComplete="off"
          onChange={() => setSelection(term)}
        />
        <label htmlFor={term} data-cy={term}>
          {term}
        </label>
      </button>
    ))}
  </div>
);

export default FilterButtons;
