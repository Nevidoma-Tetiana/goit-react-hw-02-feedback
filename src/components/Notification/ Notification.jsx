import { Component } from 'react';
import PropTypes from 'prop-types';
import { NotifyMessage } from 'components/Notification/Notification.styled';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <NotifyMessage>{message}</NotifyMessage>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
