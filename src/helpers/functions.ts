import { projectList, projectSubtypes } from "../constants/projects";
import { Category } from "../types/Category";

export const getProjectsByCategory = (projectCategory: string) => {
  return projectList.filter(project => {
    if (
      project.category.toLowerCase().includes(projectCategory.toLowerCase())
    ) {
      // TODO: Filter out those with a status of "voting", "rejected", etc.
      return true;
    }
    return false;
  });
};

const getManyProjectsByIndex = (index: string) => {
  return projectList.filter(project => {
    if (project.index === index) {
      return true;
    }
    return false;
  });
};

export const getProjectByIndex = (index: string) => {
  const projectsByIndex = getManyProjectsByIndex(index);
  // Note: Allows for duplicate indices, which should be impossible.
  // Consider enforcing uniqueness and erroring out.

  return projectsByIndex[0];
};

export const getOpenProposals = () => {
  return projectList.filter(project => {
    if (project.status === "voting") {
      return true;
    }
    return false;
  });
};

export const getProjectSubtypes = (projectCategory: Category) => {
  return projectSubtypes[projectCategory];
};

// TODO: Use a less trivial implementation for search
// that allows for typos, etc.
export const filterProjects = (searchText: string, maxResults: number) => {
  // TODO: Filter out those with a status of "voting", "rejected", etc.
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
};
