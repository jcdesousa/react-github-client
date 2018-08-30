import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import styled from 'styled-components';
import debounce from 'debounce';

const AntdSearch = Input.Search;

const DEBOUNCE_SEARCH_MS = 1000; // github rate limit is 10 requests per minute

class Search extends PureComponent {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  handleSearchChange = debounce(this.props.onSearch, DEBOUNCE_SEARCH_MS)

  handleChange = (e) => {
    const { value } = e.target;

    this.handleSearchChange(value);
  }

  render() {
    const { onSearch } = this.props;

    return (
      <SearchContainer>
        <AntdSearch
          aria-label="Search repositories"
          placeholder="Search repositories"
          enterButton="Search"
          size="large"
          onChange={this.handleChange}
          onSearch={onSearch}
          required
        />
      </SearchContainer>
    );
  }
}

export default Search;


const SearchContainer = styled.div`
    width: 60%;
    margin: auto;
`;
