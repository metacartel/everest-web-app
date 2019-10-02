import React from "react";
import everestPerson from "../EverestPerson.svg";
import StyledLink from "../components/presentational/StyledLink";
// import {
//   applicationTypes,
//   infrastructureTypes,
//   serviceTypes,
//   contentTypes
// } from "../constants/projects";

export default function Home() {
  return (
    <div>
      <h2>Everest</h2>
      <img src={everestPerson} className="App-logo" alt="Person on Everest" />
      {/* TODO: Maybe DRY these four sections up with a map */}
      <h3>
        <StyledLink to={`/applications`} label={"Applications"} />
      </h3>
      {/* {applicationTypes.map((name, index) => {
        const filter = name.toLowerCase();
        return (
          <p key={name}>
            <StyledLink to={`/applications?type=${filter}`} label={name} />
          </p>
        );
      })} */}
      <h3>
        <StyledLink to={`/infrastructure`} label={"Infrastructure"} />
      </h3>
      {/* {infrastructureTypes.map((name, index) => {
        const filter = name.toLowerCase();
        return (
          <p key={name}>
            <StyledLink to={`/infrastructure?type=${filter}`} label={name} />
          </p>
        );
      })} */}
      <h3>
        <StyledLink to={`/services`} label={"Services"} />
      </h3>
      {/* {serviceTypes.map((name, index) => {
        const filter = name.toLowerCase();
        return (
          <p key={name}>
            <StyledLink to={`/services?type=${filter}`} label={name} />
          </p>
        );
      })} */}
      <h3>
        <StyledLink to={`/content`} label={"Content"} />
      </h3>
      {/* {contentTypes.map((name, index) => {
        const filter = name.toLowerCase();
        return (
          <p key={name}>
            <StyledLink to={`/content?type=${filter}`} label={name} />
          </p>
        );
      })} */}
    </div>
  );
}
