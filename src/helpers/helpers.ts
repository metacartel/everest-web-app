import { projectList, projectSubtypes } from "../constants/projects";
import { Category } from "../types/Category";

import { ethers } from "ethers";

//////
// Getters and filters for projects, for now from constants
// and eventually from The Graph
//////

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
    const { status } = project;
    if (status === "voting" || status === "queued") {
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

//////
// Handling MetaMask and ethers.js:
//////

export function shortenAddress(address: string, digits = 4) {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${address.substring(0, digits + 2)}...${address.substring(
    42 - digits
  )}`;
}

export function isAddress(value: string | null | undefined) {
  // TODO: Make sure this is handling both null and undefined
  if (!value) {
    return false;
  }
  try {
    return ethers.utils.getAddress(value.toLowerCase());
  } catch {
    return false;
  }
}
