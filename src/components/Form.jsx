import PropTypes from 'prop-types';

export function Form({ onSubmit, searchQuery, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        className="input"
        value={searchQuery}
        onChange={onChange}
        type="search"
        name="search"
        autocomplete="off"
        autofocus
        placeholder="find favourite movie"
      ></input>
      <button type="submit" className="submit-btn">
        Search
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
