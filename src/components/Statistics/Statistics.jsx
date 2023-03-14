const Satistics = ({bad, good, neutral, positivePercentage, total}) => {
	return (
		<div>
		<h1>Statistics</h1>
		<p>Good: {good}</p>
		<p>Neutral: {neutral}</p>
		<p>Bad: {bad}</p>
		<p>Total: {total}</p>
		<p>Positive feadback: {positivePercentage}</p>
		</div>
	);
};

export default Satistics;