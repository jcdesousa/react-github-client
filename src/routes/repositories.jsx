import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Spin,
} from 'antd';

import Search from '../components/Search';
import RepositoryList from '../components/RepositoryList';

import {
  searchRepositories,
} from '../actions/actionCreators';

class Repositories extends PureComponent {
  static propTypes = {
    repositories: PropTypes.array.isRequired, // eslint-disable-line
    loading: PropTypes.bool.isRequired,
    inicialized: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.searchRepositories(); // eslint-disable-line
  }

  handleSearch = (query) => {
    this.props.searchRepositories(query);
  }

  renderLoader = () => {
    const { loading } = this.props;

    return loading ? (
      <LoaderWrapper>
        <Spin />
      </LoaderWrapper>
    ) : null;
  }


  render() {
    const { repositories, inicialized } = this.props;

    return (
      <PageContainer>
        <Search onSearch={this.handleSearch} />
        {this.renderLoader()}
        <RepositoryList repositories={repositories} inicialized={inicialized}/>
      </PageContainer>
    );
  }
}


const PageContainer = styled.div`
    padding: 20px
    position: relative
`;

const LoaderWrapper = styled.div`
  position: absolute;
  height: 100%; 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -20px;

  .ant-spin-spinning {
    z-index: 10;
  }
`;

const mapStateToProps = state => state.repositories;

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    searchRepositories,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
