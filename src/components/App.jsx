import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx'
import Notification from './Notification/Notifiaction.jsx';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = evt => {
    this.setState(prevState => ({
      [evt.target.name]: prevState[evt.target.name] + 1,
    }));
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    const positivePercentage = (good / total) * 100;
    return (
      <div>
		<Section>
			<FeedbackOptions
			options={Object.keys(this.state)}
			onLeaveFeedback={this.handleFeedback}
			/>
		</Section>
		{total > 0 ? (
		<Section>
			<Statistics
			good={good}
			neutral={neutral}
			bad={bad}
			total={total}
			positivePercentage={positivePercentage}
			/>
		</Section>
      ) : (
        <Notification />
      )}
      </div>
    );
  }
}
