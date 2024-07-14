import React from "react";
import SoftwareSkill from "../components/softwareSkills/SoftwareSkill";

export default function SkillField(){
    return(
        <div id="skills" className="skills-container1">
            <p className="skills-heading">Skills</p>
            <SoftwareSkill />
        </div>
    );
}