import React from "react";
import everestPerson from "../EverestPerson.svg";
import StyledLink from "../components/presentational/StyledLink";
import {
  applications,
  infrastructure,
  services,
  content
} from "../constants/projects";

console.log(applications);
export default function Home() {
  return (
    <div>
      <h2>Everest</h2>
      <img src={everestPerson} className="App-logo" alt="Person on Everest" />
      {/* TODO: Maybe DRY these four sections up with a map */}
      <h3>
        <StyledLink to={`/applications`} label={"Applications"} />
      </h3>
      {/* {applications.map((name, index) => {
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
      {/* {infrastructure.map((name, index) => {
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
      {/* {services.map((name, index) => {
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
      {/* {content.map((name, index) => {
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
