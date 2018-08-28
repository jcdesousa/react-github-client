import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RepositoryCard from './RepositoryCard';

class RepositoryList extends PureComponent {
    static propTypes = {
        repositories: PropTypes.array.isRequired, // eslint-disable-line
    };

    render() {
      const { repositories } = this.props;

      return (
        <RepoCardsContainer>
          {repositories.map(repo => <RepositoryCard repo={repo} />)}
        </RepoCardsContainer>
      );
    }
}

export default RepositoryList;

const RepoCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px
`;
