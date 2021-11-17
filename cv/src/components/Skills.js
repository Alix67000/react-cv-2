import React from "react";
import "./Skills.css";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="slills">
      <h2 className="h2">Competence</h2>
      <Skill title="HTML" rating="5" />
      <Skill title="CSS" rating="4" />
      <Skill title="JS" rating="4" />
      <Skill title="REACT" rating="4" />
      <Skill title="NODE" rating="3" />
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <h2 className="h2">Competence</h2>
        <Skill title="Anglais" rating="5" />
        <Skill title="Allemande" rating="4" />
        <Skill title="Persan" rating="4" />
        <Skill title="Turc" rating="4" />
        <Skill title="Français" rating="3" />
      </div>
    </div>
  );
};

export default Skills;
