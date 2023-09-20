import React from "react";
import Links from "./Links";

function About({ github, linkedin, bio}) {
  if (bio && bio.trim() !== '') {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {<Links github={github} linkedin={linkedin} bio={bio} />}
    </div>
  );
  } else {
    return null;
  }
}

export default About;
