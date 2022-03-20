import './AboutView.scss';
import React from 'react';


const skills = [
  {name: 'Python', level: 5},
  {name: 'Lambda', level: 5},
  {name: 'Cloudformation', level: 5},
  {name: 'S3', level: 5},
  {name: 'SNS', level: 3},
  {name: 'Java', level: 2},
  {name: 'Docker', level: 2},
  {name: 'CI / CD', level: 4},
  {name: 'Javascript', level: 3},
  {name: 'Typescript', level: 4},
  {name: 'React', level: 4},
  {name: 'NPM / NPX / NVM', level: 3},
  {name: 'PyTest', level: 5},
  {name: 'Jest', level: 4},
  {name: 'Enzyme', level: 3},
  {name: 'PostgreSQL', level: 3},
  {name: 'Step Functions', level: 4},
  {name: 'Communication', level: 5},
  {name: 'Mentorship', level: 4},
  {name: 'Collaboration', level: 5},
  {name: 'Business Acumen', level: 5}
];




const getSkillLevel = (level, name) => {
  let skillLevels = [];
  for(let i=0; i<level; i++) {
      skillLevels.push(<div key={`${i}-name`} className="About__skillLevelItem"></div>);
  }
  return skillLevels;
}


const AboutView = () => {
    return (
        <div className="About__container">
            <div className="About__professional">
                <h1 className="About__title">About</h1>
                <p className="About__blurb"> 
                    I am a full-time software engineer currently working remotely out of Richmond, Virginia. My work focuses around 
                    building maintainable micro-services using AWS serverless technologies such as Lambda, SNS, S3, Step Functions, and more. 
                    <br/>
                    <br/>
                    My top professional passions include clean suites of integration tests, intelligently maintained application loggers, and 
                    intuitive UI/UX.
                    <br/>
                    <br/>
                    I live with two adorable cats (who mostly despise each other) and my many overflowing hobbies. Before work, I've recently been
                    enjoying painting in my work planner to give it some color. (Although, I am human, and sometimes I prefer to sleep in a little). 
                    After work, I love to eat soup, re-watch Rick and Morty, and drink the occasional Budweiser. Most of my personal projects are 
                    an intersection between my handmade hobbies and my love of automation.
                    <br/>
                    <br/>
                </p>
            </div>
            <div className="About__skills">
                <p className="About__skillsTitle">Software Skills</p>
                <div className="About__skillsGrid">
                    {
                        skills.map(skill => {return (
                            <React.Fragment key={skill.name}>
                                <p className="About__skillName">{skill.name}</p>
                                <div className="About__skillLevel">
                                    {getSkillLevel(skill.level, skill.name)}
                                </div>
                            </React.Fragment>
                        )})
                    }
                </div>
            </div>
        </div>
    );
}

export default AboutView;