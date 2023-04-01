import { Component } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/ Notification';
import { Section } from './Section/Section';
import { Statistic } from './Statistics/Statistics';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const totalFeebback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeebback;
  };
  countPositiveFeedbackPercentage() {
    const totalFb = this.countTotalFeedback();
    return totalFb ? `${Math.floor((this.state.good / totalFb) * 100)}%` : '0%';
  }
  leaveFeedback = option =>
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  render() {
    return (
      <AppStyled>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </AppStyled>
    );
  }
}
