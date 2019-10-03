export const projectCategories = [
  "applications",
  "content",
  "services",
  "infrastructure"
];

// Subtypes of each category

export const applicationTypes = [
  "DeFi",
  "DAOs",
  "games",
  "social",
  "DEX",
  "collectibles"
];

// TODO: Get clever and handle camelCase or hypens in
// multi-word categories
// To achieve that, make this into an array of objects with
// name and slug keys
export const infrastructureTypes = [
  "developmentframework",
  "sidechains",
  "userauthentication",
  "statechannels",
  "onboarding",
  "testing"
];

export const serviceTypes = [
  "audits",
  "development",
  "legal",
  "design",
  "accounting",
  "PR"
];

export const contentTypes = ["podcasts", "wikis", "events", "forums", "news"];

// The projects themselves:
export const applications = [
  {
    name: "MetaCartel DAO",
    category: "applications",
    type: "DAO",
    tagline: "we like dapps",
    website: "https://www.metacartel.org/",
    twitter: "meta_cartel",
    description: "we like dapps"
  },
  {
    name: "PokeMol",
    category: "applications",
    type: "DAO",
    tagline: "pocket moloch",
    website: "",
    twitter: "PocketMoloch",
    description:
      "Open Source Mobile-first @MolochDAO frontend with @abridged_io contract wallets ftw. By @odyssyautomaton"
  },
  {
    name: "Compound",
    category: "applications",
    type: "DeFi",
    tagline: "Interest and borrowing, for the open financial system.",
    website: "https://compound.finance/",
    twitter: "compoundfinance",
    description:
      "Compound is an open-source, autonomous protocol built for developers, to unlock a universe of new financial applications. Interest and borrowing, for the open financial system."
  },
  {
    name: "Mintbase",
    category: "applications",
    type: "collectibles",
    tagline: "Digital assets minted and backed by you",
    website: "https://mintbase.io/",
    twitter: "mintbase",
    description: "Digital assets minted and backed by you"
  },
  {
    name: "Pepper 4D",
    category: "applications",
    type: "games",
    tagline: "gang gang gang",
    website: "",
    twitter: "",
    description: ""
  },
  {
    name: "FrAnK",
    category: "applications",
    type: "social",
    tagline: "what you looking at bish",
    website: "",
    twitter: "",
    description: ""
  },
  {
    name: "YoloRekt",
    category: "applications",
    type: "games",
    tagline: "we're definitely a finance game, not a casino",
    website: "",
    twitter: "",
    description: ""
  }
];

export const proposals = [
  {
    name: "MetaCartel DAO",
    category: "applications",
    type: "DAO",
    tagline: "we like dapps",
    website: "https://www.metacartel.org/",
    twitter: "meta_cartel",
    description: "we like dapps"
  },
  {
    name: "PokeMol",
    category: "applications",
    type: "DAO",
    tagline: "pocket moloch",
    website: "",
    twitter: "PocketMoloch",
    description:
      "Open Source Mobile-first @MolochDAO frontend with @abridged_io contract wallets ftw. By @odyssyautomaton"
  }
];

export const infrastructure = [
  {
    name: "The Graph",
    category: "infrastructure",
    type: "indexing",
    tagline: "A query protocol for blockchains",
    website: "https://thegraph.com/",
    twitter: "graphprotocol",
    description: "A query protocol for blockchains"
  }
];

export const content = [
  {
    name: "EthHub",
    category: "content",
    type: "information",
    tagline: "EthHub provides research and resources to learn about Ethereum",
    website: "https://ethhub.io/",
    twitter: "ethhub_io",
    description:
      "EthHub provides research and resources to learn about Ethereum"
  }
];

export const services = [
  {
    name: "OpenZeppelin",
    category: "services",
    type: "audits",
    tagline: "Security audits for distributed systems",
    website: "https://openzeppelin.com/security-audits/",
    twitter: "openzeppelin",
    description:
      "OpenZeppelin verifies that your distributed systems work as intended by performing an audit. Our engineers fully review your system’s architecture and codebase, and then write a thorough report that includes actionable feedback for every issue found. "
  }
];

export const projects = {
  services,
  infrastructure,
  content,
  applications
};

export const projectTypes = {
  services: serviceTypes,
  infrastructure: infrastructureTypes,
  content: contentTypes,
  applications: applicationTypes
};