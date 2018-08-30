import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class TopContributorsTitle extends PureComponent {
    static propTypes = {
      repo: PropTypes.string.isRequired,
    };

    render() {
      const { repo } = this.props;

      return (
        <PageTitle>
          <h3>
            <span>Top 10 Contributors for </span>
            <PageRepo>{repo}</PageRepo>
          </h3>
        </PageTitle>
      );
    }
}

export default TopContributorsTitle;


const PageTitle = styled.div`
  font-size: 20px;
  text-align: center;
  padding-bottom:20px;
`;

const PageRepo = styled.span`
  text-transform: capitalize;
  font-weight: 500;
`;
