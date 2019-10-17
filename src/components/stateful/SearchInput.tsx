import React, { FunctionComponent, useState } from "react";

import { projectList } from "../../constants/projects";

import StyledLink from "../presentational/StyledLink";

import { ProjectInterface } from "../../types/ProjectInterface";

function filterProjects(searchText: string, maxResults: number) {
  return projectList
    .filter(project => {
      if (project.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (project.type.includes(searchText)) {
        return true;
      }
      if (project.category.includes(searchText)) {
        return true;
      }
      if (project.description.includes(searchText)) {
        return true;
      }
      if (project.tagline.includes(searchText)) {
        return true;
      }
      if (project.twitter.includes(searchText)) {
        return true;
      }
      if (project.website.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}

// TODO: Consider extracting the search input component into
// a presentational component where the function to handle changes
// is passed in from a parent stateful component that uses useState
const SearchInput: FunctionComponent<{}> = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<ProjectInterface[]>([]);

  const handleNewSearchText = (searchText: string) => {
    const filterProjectsResult = filterProjects(searchText, 20);
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
        {searchResults.map(({ name, category }, index) => {
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
