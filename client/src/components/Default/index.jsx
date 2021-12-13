import PropTypes from 'prop-types';

const propTypes = { text: PropTypes.string };
const defaultProps = { text: 'Hello World' };

function Default(props) {
  const { text } = props;

  return <h1>{text}</h1>;
}

Default.propTypes = propTypes;
Default.defaultProps = defaultProps;

export default Default;
