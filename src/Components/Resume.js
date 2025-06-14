import React, { Component } from "react";
import "./SkillsStyle.css";

class Resume extends Component {
  render() {
    if (this.props.data) {
      // console.log("awarads", this.props.data.awards)
      // var govAward = this.props.data.awards;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
            <div key={work.company}>
            <h3>
              <a
                className="workCompany"
                href={work.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {work.logoUrl ? (
                  <>
                    <img
                      src={work.logoUrl}
                      alt={`${work.company} logo`}
                      style={{ width: '20px', marginRight: '8px', marginBottom: '-2px' }}
                    />
                    {work.company}
                  </>
                ) : (
                  work.company
                )}
              </a>
            </h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
          
        );
      });
      var skills = this.props.data.skills.map(function (skill) {
        return (
          <div className="skills-row" key={skill.name}>
            <a href="#" className="skill-item">
              <span className="skill-name">{skill.name}</span>
            </a>
          </div>
        );
      });
    }

    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Qualifications</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">{education}</div>
                    </div>
                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>

                <div className="nine columns main-col">{work}</div>
            </div>

            <div className="row skill">
                <div className="three columns header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <div className="skills-container">
                        <div className="skills-row">{skills}</div>
                    </div>
                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Awards</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <div key={"GovernorAward"}>
                        <h3>{"Governor Award"}</h3>

                        <p className="margin">
                            {
                                "Recognized by the Honorable Governor of Uttarakhand, Dr. Krishna Kant Paul, for achieving the highest academic distinction in the state, exemplifying outstanding academic performance, dedication, and excellence."
                            }
                        </p>
                        <p>
                            <a
                                href={"./award.pdf"}
                                className="button-text"
                                download
                            >
                                <i className="fa fa-download"></i> Download
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Certifications</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <div key={"TypeScriptCertificate"}>
                        <h3>{"TypeScript"}</h3>

                        <p className="margin">
                            {
                                "Thrilled to earn the Microsoft TypeScript Learning Badge, showcasing my proficiency in TypeScript fundamentals, advanced type handling, and building scalable, maintainable applications."
                            }
                        </p>
                        <p>
                            <a
                                href={"./MicroSoft-TypeScript-Badge-Certificate.pdf"}
                                className="button-text"
                                download
                            >
                                 {/* Microsoft Icon */}
                                 <img src="images/microsoft.png" alt="" style={{ width: '20px', marginRight: '8px', marginBottom: '-4px'}} />
                                <i className="fa fa-download"></i> Download Badge
                            </a>
                        </p>
                    </div>
                </div>

                <div className="nine columns main-col">
                    <div key={"Certificate"}>
                        <h3>{"C-Sharp"}</h3>

                        <p className="margin">
                            {
                                "Thrilled to earn the HackerRank C# certificate, demonstrating my skills in problem-solving, object-oriented programming, and efficient coding."
                            }
                        </p>
                        <p>
                            <a
                                href={"./csharp-swaleha-certificate.pdf"}
                                className="button-text"
                                download
                            >
                                {/* HackerRank Icon */}
                                 <img src="images/hackerrank.png" alt="" style={{ width: '32px', marginRight: '8px', marginBottom: '-4px'}} />
                                <i className="fa fa-download"></i> Download Certificate
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Websites</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                <div key={"Construction"}>
                    <h3>Construction Website</h3>

                    <p className="margin">
                        Designed and developed a professional website from the ground up for <strong>ThreeWay Drywall</strong>, a construction company specializing in drywall solutions. The website enhances the company’s online presence, showcases its services, and supports marketing initiatives. Visit the live site here:{" "}
                        <a 
                            href="https://constructifydev.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Construction Website
                        </a>.
                    </p>
                </div>
            </div>

            </div>
        </section>
    );
  }
}

export default Resume;
