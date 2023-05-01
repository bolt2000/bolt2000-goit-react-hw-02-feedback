import React from 'react';
import FeedbackOptions from './FeedbackOptions ';
import Statistics from './Statistics';
// import propTypes from 'prop-types';
// import css from './Counter.module.css';
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
    return (this.state.good * 100) / this.countTotalFeedback();
  };

  render() {
    // const { good, neutral, bad } = this.state;

    return (
      <div>
        <FeedbackOptions
          onIandleGood={this.handleGood}
          onHandleNeutral={this.handleNeutral}
          onHandleBad={this.handleBad}
        />
        {/* <ul className={css.FeedbackOptions_buttonList}>
          <li className={css.FeedbackOptions_button_li}>
            <button
              className={css.FeedbackOptions_button}
              type="button"
              name="good"
              onClick={this.handleGood}
            >
              good
            </button>
          </li>
          <li className={css.FeedbackOptions_button_li}>
            <button
              className={css.FeedbackOptions_button}
              type="button"
              name="neutral"
              onClick={this.handleNeutral}
            >
              neutral
            </button>
          </li>
          <li className={css.FeedbackOptions_button_li}>
            <button
              className={css.FeedbackOptions_button}
              type="button"
              name="bad"
              onClick={this.handleBad}
            >
              bad
            </button>
          </li>
        </ul> */}
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          percentage={this.countPositiveFeedbackPercentage()}
        />
        {/* <div> */}
        {/* <ul>
            <li className={css.Statistics_item}>good: {good}</li>
            <li className={css.Statistics_item}>neutral: {neutral}</li>
            <li className={css.Statistics_item}>bad: {bad}</li>
            <li className={css.Statistics_item}>total: {this.total()}</li>
            <li className={css.Statistics_item}>
              positive feedback: {this.percent()}%
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default Counter;

// Counter.prototype = {
//   good: propTypes.number,
//   neutral: propTypes.number,
//   bad: propTypes.number,
//   total: propTypes.number,
//   percent: propTypes.number,
// };
