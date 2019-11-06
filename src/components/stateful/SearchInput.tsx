import React, { FunctionComponent, useState } from "react";

import StyledLink from "../presentational/StyledLink";

import { ProjectInterface } from "../../types/ProjectInterface";

import { filterProjects } from "../../helpers/helpers";

// TODO: Consider extracting the search input component into
// a presentational component where the function to handle changes
// is passed in from a parent stateful component that uses useState
const SearchInput: FunctionComponent<{}> = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<ProjectInterface[]>([]);

  const handleNewSearchText = (searchText: string) => {
    const filterProjectsResult = filterProjects(searchText, 8);
    console.log(filterProjectsResult);

    setSearchText(searchText);
    // TODO: Get the typing working for all possible
    // outputs of this function
    setSearchResults(filterProjectsResult);
    // TODO: Debounce search to wait for a few seconds before
    // searching again
  };

  return (
    <div>
      <div>
        <input
          value={searchText}
          onChange={e => handleNewSearchText(e.target.value)}
        />
        {/* Maybe DRY up the way this list is shown */}
        {searchResults.map(({ name, category, index }) => {
          // TODO: Lookup the project type in the right category
          // to get the right index, or even better, move the
          // project indexing system to something doesn't have a separate
          // subindex under each project type
          return (
            <p key={index}>
              <StyledLink to={`/${category}/${index}`}>{name}</StyledLink>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SearchInput;
