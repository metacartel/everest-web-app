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
  "development framework",
  "sidechains",
  "user authentication",
  "state channels",
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
const applications = [
  {
    index: "1",
    name: "MetaCartel DAO",
    category: "applications",
    type: "DAO",
    tagline: "we like dapps",
    website: "https://www.metacartel.org/",
    twitter: "meta_cartel",
    description: "we like dapps"
  },
  {
    index: "2",
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
    index: "3",
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
    index: "4",
    name: "Mintbase",
    category: "applications",
    type: "collectibles",
    tagline: "Digital assets minted and backed by you",
    website: "https://mintbase.io/",
    twitter: "mintbase",
    description: "Digital assets minted and backed by you"
  },
  {
    index: "5",
    name: "Pepper 4D",
    category: "applications",
    type: "games",
    tagline: "gang gang gang",
    website: "",
    twitter: "",
    description: ""
  },
  {
    index: "6",
    name: "FrAnK",
    category: "applications",
    type: "social",
    tagline: "what you looking at bish",
    website: "",
    twitter: "",
    description: ""
  },
  {
    index: "7",
    name: "YoloRekt",
    category: "applications",
    type: "games",
    tagline: "we're definitely a finance game, not a casino",
    website: "",
    twitter: "",
    description: ""
  }
];

const infrastructure = [
  {
    index: "8",
    name: "The Graph",
    category: "infrastructure",
    type: "indexing",
    tagline: "A query protocol for blockchains",
    website: "https://thegraph.com/",
    twitter: "graphprotocol",
    description: "A query protocol for blockchains"
  }
];

const content = [
  {
    index: "9",
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

const services = [
  {
    index: "10",
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

export const proposals = [
  {
    index: "11",
    name: "MetaCartel DAO",
    category: "applications",
    type: "DAO",
    tagline: "we like dapps",
    website: "https://www.metacartel.org/",
    twitter: "meta_cartel",
    description: "we like dapps"
  },
  {
    index: "12",
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

// TODO: Decide if this spread approach is the preferred
// way to do this concat
export const projectList = [
  ...applications,
  ...services,
  ...content,
  ...infrastructure
];

export const projectSubtypes = {
  services: serviceTypes,
  infrastructure: infrastructureTypes,
  content: contentTypes,
  applications: applicationTypes
};
