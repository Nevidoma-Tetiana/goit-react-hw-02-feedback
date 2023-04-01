import { Component } from 'react';
import PropTypes from 'prop-types';
import { OptionBtn } from 'components/FeedbackOptions/FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map((option, index, options) => (
          <OptionBtn
            onClick={() => onLeaveFeedback(option)}
            key={options[index]}
          >
            {option}
          </OptionBtn>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
