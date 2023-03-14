const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h1>Please leave a feadback</h1>
      <div className="fedbackButtons">
        <ul>
          {options.map(option => (
            <button
              key={option}
              name={option}
              type="button"
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackOptions;
