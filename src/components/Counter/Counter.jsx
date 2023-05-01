import React from 'react';
import css from './Counter.module.css';

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

  render() {
    return (
      <div>
        <ul className={css.FeedbackOptions_buttonList}>
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
        </ul>
        <h2>Statistics</h2>
        <div>
          <ul>
            <li className={css.Statistics_item}>good: {this.state.good}</li>
            <li className={css.Statistics_item}>
              neutral: {this.state.neutral}
            </li>
            <li className={css.Statistics_item}>bad: {this.state.bad}</li>
            <li className={css.Statistics_item}>
              total: {this.state.valueTotal}
            </li>
            {/* <li className={css.Statistics_item}>positive feedback:33%</li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Counter;
