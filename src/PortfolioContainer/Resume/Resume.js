/* eslint-disable no-unused-vars */
import React, { useState }from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./Resume.css"

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if(screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'>
            <span>{props.heading? props.heading : ''}</span>
            {props.fromDate && props.toDate ? (
              <div className = 'heading-date'>
                {props.fromDate + "_" + props.toDate}
              </div>
            ): (
              <div></div>
            )}
          </div>
        <div className='resume-sub-heading'>
            <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className='resume-heading-description'>
            <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 30 },
    { skill: "React JS", ratingPercentage: 20 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Flutter", ratingPercentage: 85 },
    { skill: "Dart", ratingPercentage: 70 },
    { skill: "Java", ratingPercentage: 30 },
    { skill: "Python", ratingPercentage: 40 },
    { skill: "Firebase", ratingPercentage: 65 },
    { skill: "MYSQL", ratingPercentage: 30 },
    { skill: "Laravel", ratingPercentage: 25 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Todo List App",
      duration: { fromDate: "2021", toDate: "2022" },
      description: "A simple application taht is used for listing and managing task.",
      subHeading: "Technologies Used: Flutter, Dart",
    },
    // {
    //   title: "",
    //   duration: { fromDate: "", toDate: "" },
    //   description: "",
    //   subHeading: "Technologies Used:",
    // },
  ];

  const resumeDetails = [
    <div className='resume-screen-container' key="education">
      <ResumeHeading 
      heading={"University of Science and Technology in Southern Philippines"}
      subHeading={"BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY"}
      fromDate={2018}
      toDate={2022}
      />
      <ResumeHeading 
      heading={"Liceo De Cagayan University"}
      subHeading={"TECHNICAL VOCATIONAL LIVELYHOOD TRACK, INFORMATION COMMUNICATION TECHNOLOGY"}
      fromDate={2016}
      toDate={2018}
      />
       <ResumeHeading 
      heading={"Bulua National High School"}
      subHeading={"TECHNOLOGY AND LIVELYHOOD EDUCATION, INFORMATION COMMUNICATION TECHNOLOGY"}
      fromDate={2012}
      toDate={2016}
      />
    </div>,

    <div className='resume-screen-container' key="work-experience">
      <ResumeHeading 
      heading={"Eihap"}
      subHeading={"FREELANCE, FULL STACK DEVELOPER"}
      fromDate={2022}
      toDate={2022}
      />
      <div className='experience-description'>
        <span className='resume-description-text'>
          Previously workign there as a freelancer with the position of Full Stack Developer using Flutter Framework.
        </span>
      </div>
      <div className='experience-description'>
        <span className='resume-description-text'>
          - Developed an mobile application taht can be usefull in inventory and product management.
        </span>
        <br/>
        <span className='resume-description-text'>
          - Integrated usefull plugins from flutter to make the app more functional with dynamic form content.
        </span>
        <br/>
        <span className='resume-description-text'>
          - I streched my mental capacity to develop UI as per the given designs. 
        </span>
      </div>
    </div>,

    <div className='resume-screen-container programming-skills-container' key='programming-skills'>
      {programmingSkillDetails.map((skill, index)=>(
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{skill.skill}</span>
          <div className='skill-percentage'>
            <div style={{width: skill.percentage + '%'}}
            className='active-percentage'>
            </div>
          </div>
        </div>
      ))}
    </div>,

    <div className='resume-screen-container' key='projects'>
      {projectsDetails.map((projectsDetails, index)=>(
        <ResumeHeading 
        key={index}
        heading={projectsDetails.title}
        subHeading={projectsDetails.subHeading}
        description={projectsDetails.description}
        fromDate={projectsDetails.duration.fromDate}
        toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    < div className='resume-screen-container' key='interests'>
      <ResumeHeading
      heading = 'Music'
      description = 'Listening to the beat and harmony of the music means a lot to me. It gives me relaxation and confidence in my daily life activies'
      />
      <ResumeHeading 
      heading = 'Interesting Videos'
      description = 'Watching interesting videos in Facebook and Youtube enjoys me in a way that it explores my imagination and learn a lot of ideas'
      />
      <ResumeHeading 
      heading = 'Ornamental Fish Keeping'
      description = 'Apart from being atech enthusiast and a code writer, I also like to keep different ornamental fish species. I tentertains me the way how this fish live and apart from that I able to have many friends that entertains me with our common hobbies'
      />
    </div>
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: {transform: "translateY(" + index * offsetHeight * -1 + "px)"}
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index)=>(
      <div
      onClick={()=>handleCarousal(index)}
      className={index === selectedBulletIndex ? "bullet selected-bullet": "bullet"}
      key={index}
      >
        <img className='bullet-logo' 
        src={require(`../../assets/Resume/${bullet.logoSrc}`)}
        alt='oops,,, no internet connection'
        />
        <span className='bullet-label'>{bullet.label}</span>
      </div>
    ))
  }

  const getResumeScreen = () =>{
    return (
      <div
      style={carousalOffSetStyle.style}
      className='resume-details-carousal'
      >
        {resumeDetails.map((ResuemDetail)=> ResuemDetail)}
      </div>
    )
  }

  return (
    <div className='resume-container screen-container' id={props.id || ""}>
      <div className='resume-content'>
        <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>
          <div className='resume-bullet-details'>{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  )
}
