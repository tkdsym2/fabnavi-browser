import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Debug from 'debug';

import { requestSearchProjects } from '../../actions/manager';
import { assetsPath } from '../../utils/assetsUtils';

import {
  SearchBarSection,
  SearchBarLayout,
  SearchForm,
  SearchInput,
  SearchIcon
} from '../../stylesheets/application/ProjectIndex/StyledSearchBar';

const debug = Debug('fabnavi:components:searchbar');

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: ''
    };

    this.onClick = event => {
      event.preventDefault();
      this.props.searchProjects(this.state.searchWord);
    };

    this.handleWordChange = event => {
      this.setState({ searchWord: event.target.value });
    };

    this.handleKeyDown = event => {
      const ENTER = 13;
      if(event.keyCode === ENTER) {
        event.preventDefault();
        this.props.searchProjects(this.state.searchWord);
      }
    };
  }

  render() {
    return (
      <div>
        <SearchBarSection>
          <SearchBarLayout>
            <SearchForm>
              <SearchInput
                value={this.state.searchWord}
                onChange={this.handleWordChange}
                onKeyDown={this.handleKeyDown}
              />
              <a onClick={this.onClick}>
                <SearchIcon src={`${assetsPath}/images/search_icon.png`} />
              </a>
            </SearchForm>
          </SearchBarLayout>
        </SearchBarSection>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchProjects: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    searchProjects: keyword => {
      if(keyword === '') {
        return;
      }
      dispatch(requestSearchProjects(keyword));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
