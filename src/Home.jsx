import React,{useRef,useEffect} from "react";
import "./styles/home.css";
import { Navbar } from "./components/Navbar";
import { Button } from "./components/Button";
import DownloadIcon from "./assets/downloadIcon.svg";
import { Bar } from "./components/Bar";
import FirebaseIcon from './assets/firebase.svg';
import ReactIcon from './assets/react.svg';
import RedirectIcon from './assets/redirect.svg';
import HtmlIcon from './assets/htmlIcon.svg';
import CssIcon from './assets/cssIcon.svg';
import JavascriptIcon from './assets/javascriptIcon.svg';
import ReactIcon2 from './assets/reactIcon.svg';
import SassIcon from './assets/sassIcon.svg';
import sqlIcon from './assets/sqlIcon.svg';
import BootstrapIcon from './assets/bootstrapIcon.svg';
import FirebaseIcon2 from './assets/firebaseIcon.svg';
import sendIcon from './assets/sendIcon.svg';
import {Input} from './components/Input'
import { gsap } from "gsap";


export default function Home() {
    const arr=[1,1,1,1,1,1,1,1,1,1,1,1]
    const titleContainer=useRef();
   

    useEffect(() => {
      gsap.from(titleContainer.current, {x:21, opacity: '.1'});
      gsap.to(titleContainer.current, { opacity: '1',x:0,delay:3});
    });


  return (
    <div className="main-container">
      <div className="header-container">
        <header className="header">
          <Navbar />
          <div className="title-container" ref={titleContainer}>
            <p className="title" ref={titleContainer}>
              Hi, I am <span>John</span> <br /> A fullstack web developer
            </p>
            <Button className="resume-btn">
              <img className="download-icon" src={DownloadIcon} alt="icon" />
              Resume
            </Button>
          </div>
        
        </header>
      </div>
      <section className="section1">
        <div className="section1-title-container">
          <p>Projects</p>
          <Bar className="bar"></Bar>
        </div>
        <div className="projectThumbnail-container">
    {arr.map(item=><div className="projectThumbnail">
            <img
              src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="project thumbnail"
            />
            <div className="project-info">
              <p className="thumbnail-title">Netflix Clone</p>
              <div className="project-tech-container">
                <div className="project-tech">
                  <img src={ReactIcon} alt="icon" />
                  <p>React</p>
                </div>
                <div className="project-tech">
                  <img src={FirebaseIcon} alt="icon" />
                  <p>React</p>
                </div>
              </div>
            </div>
            <a title="live-demo" href='!#' className="live-demo">
              <img src={RedirectIcon} alt="icon" />
            </a>
          </div>)}
        </div>
      </section>
        <section className="skills-showcase-container">
            <div className="title-container">
                <p>Skills</p>
                <Bar className='skills-bar'></Bar>
            </div>
            <div className="skills-container">
                <div className="skills">
                    <img src={HtmlIcon} alt="icon" />
                    <p>Html</p>
                </div>
                <div className="skills">
                    <img src={CssIcon} alt="icon" />
                    <p>Css</p>
                </div>
                <div className="skills">
                    <img src={JavascriptIcon} alt="icon" />
                    <p>Javascript</p>
                </div>
                <div className="skills">
                    <img src={ReactIcon2} alt="icon" />
                    <p>React</p>
                </div>
                <div className="skills">
                    <img src={SassIcon} alt="icon" />
                    <p>Sass</p>
                </div>
                <div className="skills">
                    <img src={sqlIcon} alt="icon" />
                    <p>Sql</p>
                </div>
                <div className="skills">
                    <img src={BootstrapIcon} alt="icon" />
                    <p>Bootstrap</p>
                </div>
                <div className="skills">
                    <img src={FirebaseIcon2} alt="icon" />
                    <p>Firebase</p>
                </div>
               
            </div>
        </section>
        <section className="contacts-container">
            <div className="contacts-title-container">
                <p>Contacts</p>
                <Bar className='contacts-bar'></Bar>
            </div>
            <div className="input-containers">
                <label htmlFor="Name" className="label">Name</label>
                <Input className='input-name-email' type='text' id='Name'/>
                <label htmlFor="Email" className="label">Email</label>
                <Input className='input-name-email' type='email' id='Email'/>
                <label htmlFor="Message" className="label">Message</label>
                <textarea className='input-textarea' type='textarea' id='Message'></textarea>
            <Button className='send-btn'>
                <img src={sendIcon} alt="icon" />
                <p>send</p>
            </Button>
            </div>
        </section>
    </div>
  );
}
