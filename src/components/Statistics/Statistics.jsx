import PropTypes from 'prop-types';
import css from './Satistics.module.css';

const Satistics = ({bad, good, neutral, positivePercentage, total}) => {
	return (
		<div className={css.statisticsDiv}>
		<h1>Statistics</h1>
		<p>Good: {good}</p>
		<p>Neutral: {neutral}</p>
		<p>Bad: {bad}</p>
		<p>Total: {total}</p>
		<p>Positive feadback: {positivePercentage}</p>
		</div>
	);
};

Satistics.propTypes = {
	bad: PropTypes.string.isRequired,
	good: PropTypes.string.isRequired,
	neutral: PropTypes.string.isRequired,
	positivePercentage: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
  };
export default Satistics;