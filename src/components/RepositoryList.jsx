import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RepositoryCard from './RepositoryCard';

class RepositoryList extends PureComponent {
    static propTypes = {
        repositories: PropTypes.array.isRequired, // eslint-disable-line
        inicialized: PropTypes.bool.isRequired, // eslint-disable-line
    };

    render() {
      const { repositories, inicialized } = this.props;

      return (
        <RepoCardsContainer>
          {repositories.map(repo => <RepositoryCard key={repo.id} repo={repo} />)}
          { inicialized && !repositories.length && <NoResultsFound> No Repositories Found</NoResultsFound>}
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

const NoResultsFound = styled.div`
    text-align: center;
    font-size: 18px; 
    width: 100%;
`;
