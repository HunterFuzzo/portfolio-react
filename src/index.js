/** @format */

import * as Assets from "./config/assets.js";
import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portfolio = () => {
  const githubChartURL = "https://ghchart.rshah.org/43265c/hunterfuzzo";
  const [init, setInit] = useState(false);

  useEffect(() => {
    Assets.initParticlesEngine(async (engine) => {
      await Assets.loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = Assets.particlesLoaded();
  const options = Assets.useParticlesOptions();

  if (init) {
    return (
      <header>
        <div id="tsparticles"></div>
        <style href={Assets.style}></style>
        <script src="tsparticles.engine.min.js"></script>

        <div className="header">
          <div
            className="navbar"
            style={{ display: "flex" }}>
            <h1 style={{ display: "flex", flexDirection: "row" }}>
              Azuka{" "}
              <img
                src={Assets.pp}
                alt="pp"
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "10px 0px 0px 10px",
                  borderRadius: "50%",
                }}
              />
            </h1>
            <a
              href={Assets.resume}
              download>
              <button className="navbutton">
                <img
                  src={Assets.download}
                  alt="download"
                  style={{
                    width: "20px",
                    height: "20px",
                    margin: "0px 0px 0px 0px",
                  }}
                />
                Resume
              </button>
            </a>
          </div>
          <h2>DEVELOPER / PENSTESTER</h2>
          <p>
            Hello, my name is Dylan Rafiliposon, born on July 4, 2005, I am
            currently 19 years old. I am pursuing a five-year integrated
            engineering program at CESI Nice, specializing in cybersecurity, and
            I am eager to focus on network security testing (Pentester). I have
            a strong background in software development, having worked on
            various projects, including FiveM server development and personal
            tools in Python, C++, and JavaScript. Additionally, I have gained
            experience in cybersecurity through platforms like TryHackMe,
            mastering tools such as Metasploit and Nmap. I am also an
            enthusiastic scout leader and musician, passionate about learning
            and taking on new challenges. My goal is to further my expertise in
            cybersecurity while contributing positively to the field.
          </p>

          <h2 style={{ textAlign: "center" }}>My socials</h2>

          {/* Button container for social links and project buttons */}
          <div className="button-container">
            <a href="https://github.com/hunterfuzzo">
              <button className="logoButton">
                <img
                  src={Assets.github}
                  alt="GitHub"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="https://example.com">
              <button className="logoButton">
                <img
                  src={Assets.discord}
                  alt="Discord"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="projects.html">
              <button className="logoButton">
                <img
                  src={Assets.fivem}
                  alt="FiveM"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="https://tryhackme.com/p/Azuka">
              <button className="logoButton">
                <img
                  src={Assets.thm}
                  alt="TryHackMe"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
          </div>

          <h2 style={{ textAlign: "center" }}>What I learned</h2>
          <div className="button-container">
            <a href="https://tryhackme.com/p/Azuka">
              <button className="logoButton">
                <img
                  src={Assets.lua}
                  alt="lua"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="https://tryhackme.com/p/Azuka">
              <button className="logoButton">
                <img
                  src={Assets.server}
                  alt="server"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="https://tryhackme.com/p/Azuka">
              <button className="logoButton">
                <img
                  src={Assets.database}
                  alt="database"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="https://tryhackme.com/p/Azuka">
              <button className="logoButton">
                <img
                  src={Assets.metasploit}
                  alt="metasploit"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="https://tryhackme.com/p/Azuka">
              <button className="logoButton">
                <img
                  src={Assets.nmap}
                  alt="nmap"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
          </div>
          <h2 style={{ display: "flex", justifyContent: "center" }}>
            Projects
          </h2>
          <div className="projects">
            <div
              className="projectFrame"
              style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                <div>
                  <div
                    className="projectText"
                    style={{ maxWidth: "500px", fontSize: "18px" }}>
                    Tools for database management for air quality.
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      textTransform: "none",
                      fontSize: "12px",
                      maxWidth: "500px",
                    }}>
                    Welcome to the air quality data management tool developed by
                    DATA-X for the Ministry of Ecology. This repository contains
                    the source code of the application, designed to centralize
                    meteorological data, manage personnel and sensors, and
                    publish air quality reports.
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <a
                    href="https://github.com/HunterFuzzo/site-giec-react"
                    target="_blank"
                    rel="noreferrer">
                    <button
                      className="navbutton2"
                      style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={Assets.github}
                        alt="github"
                        style={{
                          width: "20px",
                          height: "20px",
                          margin: "0px 10px 0px 0px",
                        }}
                      />
                      Repository
                    </button>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                    <a
                      href="https://mr22206.github.io/Air-Quality-Data-Management-Tool/"
                      target="_blank"
                      rel="noreferrer">
                      <button
                        className="navbutton2"
                        style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={Assets.externalLink}
                          alt="deployed site"
                          style={{
                            width: "20px",
                            height: "20px",
                            margin: "0px 10px 0px 0px",
                          }}
                        />
                        Deployed Site
                      </button>
                    </a>
                    <img
                      src={Assets.react}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                    <img
                      src={Assets.html}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                    <img
                      src={Assets.css}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                    <img
                      src={Assets.nodejs}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                  </div>
                </div>
              </div>
              <div style={{ flexGrow: 1 }}></div>
              <div>
                <img
                  src={Assets.giec}
                  alt=""
                  style={{ height: "200px", width: "310px" }}></img>
              </div>
            </div>
          </div>

          <div className="projects">
            <div
              className="projectFrame"
              style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                <div>
                  <div
                    className="projectText"
                    style={{ maxWidth: "500px", fontSize: "18px" }}>
                    Quiz TDMK project
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      textTransform: "none",
                      fontSize: "12px",
                      maxWidth: "500px",
                    }}>
                    Welcome to the TDMK Quiz, a collaborative project created by
                    Dylan, Mohammad, Théo, and Kevin. This repository contains
                    the source code for an online quiz, developed as part of an
                    educational project. The quiz is designed to test users'
                    knowledge on various topics through a simple and interactive
                    web interface.
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <a
                    href="https://github.com/HunterFuzzo/quiz-tdmk"
                    target="_blank"
                    rel="noreferrer">
                    <button
                      className="navbutton2"
                      style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={Assets.github}
                        alt="github"
                        style={{
                          width: "20px",
                          height: "20px",
                          margin: "0px 10px 0px 0px",
                        }}
                      />
                      Repository
                    </button>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                    <a
                      href="https://mr22206.github.io/Quiz-TDMK-Site-Web-du-Projet/"
                      target="_blank"
                      rel="noreferrer">
                      <button
                        className="navbutton2"
                        style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={Assets.externalLink}
                          alt="deployed site"
                          style={{
                            width: "20px",
                            height: "20px",
                            margin: "0px 10px 0px 0px",
                          }}
                        />
                        Deployed Site
                      </button>
                    </a>
                    <img
                      src={Assets.html}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                    <img
                      src={Assets.css}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                    <img
                      src={Assets.javascript}
                      alt=""
                      style={{ width: "25px", height: "25px" }}></img>
                  </div>
                </div>
              </div>
              <div style={{ flexGrow: 1 }}></div>
              <div>
                <img
                  src={Assets.quizScreen}
                  alt=""
                  style={{ height: "200px", width: "310px" }}></img>
              </div>
            </div>
          </div>

          <div className="projects">
            <div
              className="projectFrame"
              style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                <div>
                  <div
                    className="projectText"
                    style={{ maxWidth: "500px", fontSize: "18px" }}>
                    FiveM Admin Sript
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      textTransform: "none",
                      fontSize: "12px",
                      maxWidth: "500px",
                    }}>
                    Welcome to the FiveM script made in Lua, which includes
                    numerous features, such as warning management stored in the
                    database, as well as ban and kick management, also handled
                    by the database, vehicle management, etc., using the RageUI
                    library for the interface.
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <a
                    href="https://github.com/HunterFuzzo/admin-menu"
                    target="_blank"
                    rel="noreferrer">
                    <button
                      className="navbutton2"
                      style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={Assets.github}
                        alt="github"
                        style={{
                          width: "20px",
                          height: "20px",
                          margin: "0px 10px 0px 0px",
                        }}
                      />
                      Repository
                    </button>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                    <a
                      href="https://www.youtube.com/watch?v=WVoKGRe3T-Q"
                      target="_blank"
                      rel="noreferrer">
                      <button
                        className="navbutton2"
                        style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={Assets.externalLink}
                          alt="Video"
                          style={{
                            width: "20px",
                            height: "20px",
                            margin: "0px 10px 0px 0px",
                          }}
                        />
                        Youtube Video
                      </button>
                    </a>
                    <img
                      src={Assets.lua}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                    <img
                      src={Assets.database}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                  </div>
                </div>
              </div>
              <div style={{ flexGrow: 1 }}></div>
              <div>
                <img
                  src={Assets.adminScreen}
                  alt=""
                  style={{ height: "200px", width: "290px" }}></img>
              </div>
            </div>
          </div>

          <div className="projects">
            <div
              className="projectFrame"
              style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                <div>
                  <div
                    className="projectText"
                    style={{ maxWidth: "500px", fontSize: "18px" }}>
                    Discord Bot for CESI School
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      textTransform: "none",
                      fontSize: "12px",
                      maxWidth: "500px",
                    }}>
                    Welcome to the Discord Bot project, as a early discord
                    developer i had several project on discord, including a
                    discord bot for CESI (my school), made in Javascript using
                    the runtime environment NodeJS. This bot is used for
                    moderation, file sharing, timetable sharing and more.
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <a
                    href="https://github.com/HunterFuzzo/admin-menu"
                    target="_blank"
                    rel="noreferrer">
                    <button
                      className="navbutton2"
                      style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={Assets.github}
                        alt="github"
                        style={{
                          width: "20px",
                          height: "20px",
                          margin: "0px 10px 0px 0px",
                        }}
                      />
                      Repository
                    </button>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                    <a
                      href="https://www.youtube.com/watch?v=WVoKGRe3T-Q"
                      target="_blank"
                      rel="noreferrer">
                      <button
                        className="navbutton2"
                        style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={Assets.externalLink}
                          alt="Video"
                          style={{
                            width: "20px",
                            height: "20px",
                            margin: "0px 10px 0px 0px",
                          }}
                        />
                        Invite Server Test
                      </button>
                    </a>
                    <img
                      src={Assets.javascript}
                      alt=""
                      style={{ width: "25px", height: "25px" }}></img>
                    <img
                      src={Assets.nodejs}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                  </div>
                </div>
              </div>
              <div style={{ flexGrow: 1 }}></div>
              <div>
                <img
                  src={Assets.discordBot}
                  alt=""
                  style={{ height: "200px", width: "230px" }}></img>
              </div>
            </div>
          </div>

          <div className="projects">
            <div
              className="projectFrame"
              style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                <div>
                  <div
                    className="projectText"
                    style={{ maxWidth: "500px", fontSize: "18px" }}>
                    World Wide Watchers project for CESI School
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      textTransform: "none",
                      fontSize: "12px",
                      maxWidth: "500px",
                    }}>
                    Welcome to the 3W project. As an early developer, I have
                    worked on several projects, including an Arduino-based
                    project for CESI (my school) using C++. This project
                    involves programming microcontrollers to manage various
                    tasks, such as sensor data collection, automated responses,
                    and system monitoring. It showcases my skills in embedded
                    programming and hardware interaction, allowing for a deeper
                    understanding of electronics and real-time processing.
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <a
                    href="https://github.com/HunterFuzzo/3w-project"
                    target="_blank"
                    rel="noreferrer">
                    <button
                      className="navbutton2"
                      style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={Assets.github}
                        alt="github"
                        style={{
                          width: "20px",
                          height: "20px",
                          margin: "0px 10px 0px 0px",
                        }}
                      />
                      Repository
                    </button>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                    <a
                      href="https://azukas-organization.gitbook.io/3w"
                      target="_blank"
                      rel="noreferrer">
                      <button
                        className="navbutton2"
                        style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={Assets.externalLink}
                          alt="Video"
                          style={{
                            width: "20px",
                            height: "20px",
                            margin: "0px 10px 0px 0px",
                          }}
                        />
                        Documentation
                      </button>
                    </a>
                    <img
                      src={Assets.cpp}
                      alt=""
                      style={{ width: "25px", height: "25px" }}></img>
                  </div>
                </div>
              </div>
              <div style={{ flexGrow: 1 }}></div>
              <div>
                <img
                  src={Assets.troisw}
                  alt=""
                  style={{ height: "200px", width: "230px" }}></img>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "5%",
            }}>
            <img
              src={githubChartURL}
              alt="GitHub Activity Chart"
              style={{
                width: "75%",
                height: "auto",
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
          </div>
          <h3>Copyright © 2024 Azuka</h3>
        </div>
        <Assets.Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </header>
    );
  }
};

// Render the JSX component to the DOM
ReactDOM.render(<Portfolio />, document.getElementById("root"));
