import PropTypes from 'prop-types';

const propTypes = { text: PropTypes.string };
const defaultProps = { text: 'Test' };

function Test(props) {
  const { text } = props;

  return <h1 data-testid="test">{text}</h1>;
}

Test.propTypes = propTypes;
Test.defaultProps = defaultProps;

export default Test;
