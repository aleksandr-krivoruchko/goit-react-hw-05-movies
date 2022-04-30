import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export function GoBack({ href, label }) {
  return (
    <Link to={href} className="go-back">
      {label}
    </Link>
  );
}

GoBack.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
