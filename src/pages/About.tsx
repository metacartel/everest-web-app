import React from "react";
import Project from "../components/presentational/Project";

const aboutData = {
  name: "Everest",
  category: "applications",
  description:
    "universally shared ‘yellowpages’ registry for eth community. we use fancy tech like TCRs and bonding curves. we’re hiring. dm @Everest_TCR. we probably won’t respond. if we collaborate, we can line up all our ducks in a row.",
  twitter: "Everest_TCR",
  website: "",
  tagline: "",
  type: "",
  index: "0"
};

export default function About() {
  return (
    <Project
      name={aboutData.name}
      category={aboutData.category}
      tagline={aboutData.tagline}
      website={aboutData.website}
      twitter={aboutData.twitter}
      description={aboutData.description}
      type={aboutData.type}
      index={aboutData.index}
    />
  );
}
