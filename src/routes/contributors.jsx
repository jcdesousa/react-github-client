import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  List, Avatar, Button, Spin,
} from 'antd';

import {
  fetchContributors,
} from '../actions/actionCreators';
import TopContributorsTitle from '../components/TopContributorsTitle';

class Contributors extends PureComponent { // eslint-disable-line
  static propTypes = {
    contributors: PropTypes.array, // eslint-disable-line
    loading: PropTypes.bool.isRequired,
    loadingMore: PropTypes.bool.isRequired,
    nextPage: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    showLoadingMore: PropTypes.bool.isRequired,
    match: ReactRouterPropTypes.match.isRequired,

  };

  componentDidMount() {
    this.getContributors();
  }

  getContributors = () => {
    const { nextPage, match, perPage } = this.props;
    const { params } = match;

    this.props.fetchContributors(params.owner, params.repo, nextPage, perPage); // eslint-disable-line
  }

  renderLoadMore = () => {
    const { showLoadingMore, loadingMore } = this.props;

    return showLoadingMore ? (
      <LoaderWrapper>
        {loadingMore && <Spin />}
        {!loadingMore && <Button onClick={this.getContributors}>Fetch more</Button>}
      </LoaderWrapper>
    ) : null;
  }

  render() {
    const {
      loading, contributors, match,
    } = this.props;
    const { repo } = match.params;

    return (
      <PageContainer>

        <TopContributorsTitle repo={repo} />

        <List
          className="demo-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          loadMore={this.renderLoadMore()}
          dataSource={contributors}
          renderItem={contributor => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={contributor.avatar} />}
                title={(
                  <a href={contributor.url} target="_blank" rel="noopener noreferrer">
                    {contributor.login} ({contributor.contributions.toLocaleString()} Contributions)
                  </a>
                )}
              />
            </List.Item>
          )}
        />

      </PageContainer>
    );
  }
}

const LoaderWrapper = styled.div`
  text-align: center;
  margin-top: 12px; 
  height: 64px;
  line-height: 64px;
`;

const PageContainer = styled.div`
  margin: auto;
  width: fit-content;
  min-width: 500px;
  padding: 20px;

  .ant-avatar{
    width: 64px;
    height: 64px;
  }

  .ant-list-item-meta {
    align-items: center;
  }

  .ant-list-item-meta-title {
    font-size: 18px;
  }
`;

const mapStateToProps = state => state.contributors;

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchContributors,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contributors);
