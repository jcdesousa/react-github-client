import React, { PureComponent } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const AntdSearch = Input.Search;

class Search extends PureComponent { // eslint-disable-line
  render() {
    return (
      <SearchContainer>
        <AntdSearch
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
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
