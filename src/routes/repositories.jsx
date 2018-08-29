import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Search from '../components/Search';
import RepositoryList from '../components/RepositoryList';

import {
  searchRepositories,
} from '../actions/actionCreators';

class Repositories extends PureComponent {
  static propTypes = {
    repositories: PropTypes.array, // eslint-disable-line
  };

  static defaultProps = {
    repositories: [],
  };

  componentDidMount() {
    this.props.searchRepositories('react'); // eslint-disable-line
  }

  handleSearch = (query) => {
    if (query && query.length) {
      this.props.searchRepositories(query);
    }
  }

  render() {
    const { repositories } = this.props;

    return (
      <PageContainer>
        <Search onSearch={this.handleSearch} />
        <RepositoryList repositories={repositories} />
      </PageContainer>
    );
  }
}


const PageContainer = styled.div`
    padding: 20px
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
