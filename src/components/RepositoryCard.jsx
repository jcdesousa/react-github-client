import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';
import styled from 'styled-components';

class RepositoryCard extends PureComponent {
    static propTypes = {
        repo: PropTypes.object.isRequired, // eslint-disable-line
    };

    renderDescription() {
      const { repo } = this.props;

      return (
        <div>
          <RepoTitle>
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </RepoTitle>
          <small>
            {repo.language || '--'}
          </small>
          <RepoDescription>
            {repo.description}
          </RepoDescription>
          <ContributorsLink>
            <a href={`/${repo.fullName}/contributors`}>
              Top Contributors
            </a>
          </ContributorsLink>
        </div>
      );
    }

    render() {
      const { repo } = this.props;

      return (
        <CardWrapper>
          <Card
            actions={[
              <IconWrapper>
                <Icon type="star" />
                {' '}
                {repo.stars.toLocaleString()}
              </IconWrapper>,
              <IconWrapper>
                <Icon type="warning" />
                {' '}
                {repo.issues.toLocaleString()}
              </IconWrapper>,
            ]}
          >
            {this.renderDescription(repo)}
          </Card>
        </CardWrapper>
      );
    }
}

export default RepositoryCard;


const CardWrapper = styled.div`
    flex-grow: 1;
    width: 50%;
    padding: 10px;
    max-width: 50%;

    .ant-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .ant-card-body {
      flex-grow: 1;
      position: relative
    }
`;

const RepoTitle = styled.div`
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 500;
`;

const RepoDescription = styled.div`
    padding-top: 10px;
`;

const ContributorsLink = styled.div`
    text-align: right;
    font-size: 12px;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

const IconWrapper = styled.div`
    cursor: auto;

    &:hover {
        color: inherit;
    }
`;
