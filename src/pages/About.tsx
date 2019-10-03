import React from "react";
import Project from "../components/presentational/Project";

const aboutData = {
  name: "Everest",
  description:
    "universally shared ‘yellowpages’ registry for eth community. we use fancy tech like TCRs and bonding curves. we’re hiring. dm @EverestProject. we probably won’t respond. if we collaborate, we can line up all our ducks in a row.",
  twitter: "EverestProject",
  website: "",
  tagline: "",
  type: ""
};

export default function About() {
  return (
    <Project
      name={aboutData.name}
      tagline={aboutData.tagline}
      website={aboutData.website}
      twitter={aboutData.twitter}
      description={aboutData.description}
      type={aboutData.type}
    />
  );
}
