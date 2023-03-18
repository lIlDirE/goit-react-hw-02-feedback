import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.Div}>
      <h1>Please leave a feadback</h1>
      <div className={css.feedbackDiv}>
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

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
  };
  
export default FeedbackOptions;
