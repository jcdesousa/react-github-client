import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

class AppHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Code Discovery',
  }

  render() {
    const { title } = this.props;

    return (
      <Header>
        <HeaderTitle>
          <HeaderLink href="/">{title}</HeaderLink>
        </HeaderTitle>
      </Header>
    );
  }
}

export default AppHeader;


const HeaderTitle = styled.h2`
    text-align: center;
`;

const HeaderLink = styled.a`
    color: white;

    &:hover {
      color: white;
`;
