import React from 'react';
import FeedbackOptions from './FeedbackOptions ';
import Statistics from './Statistics';
import propTypes from 'prop-types';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };



  
  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {

    return (
      <div>
        <FeedbackOptions
          onIandleGood={this.handleGood}
          onHandleNeutral={this.handleNeutral}
          onHandleBad={this.handleBad}
        />
        <h2>Statistics</h2>

        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    );
  }
}

export default Counter;

Counter.prototype = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  percentage: propTypes.number,
};
