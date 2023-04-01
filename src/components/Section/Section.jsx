import { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionWrapp, Title } from './Section.styled';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionWrapp>
        <Title>{title}</Title>
        {children}
      </SectionWrapp>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
