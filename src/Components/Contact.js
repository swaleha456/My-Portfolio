import React, { useState } from "react";
import "./SkillsStyle.css";

const Contact = ({ data }) => {
 
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in required fields");
      return;
    }
  
    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("subject", subject);
    form.append("message", message);
  
    fetch("https://formsubmit.co/swaleha2612000@gmail.com", {
      method: "POST",
      body: form,
    })
      .then(() => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        alert("✓ Message sent successfully!");
      })
      .catch(() => alert("❌ Error sending message"));
  };

  return (
    <section id="contact" style={{background: "grey", color:"white"}}>
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{data?.message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  value={name}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  value={email}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  value={subject}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button type="submit" onClick={handleClick} className="submit">
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning">Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Contact me :</h4>
            <p className="address">
              {/* {data?.address.city} */}
              <a className="contact__tel" href="mailto:swaleha2612000@gmail.com">
                <span>{data?.email}</span>
              </a>
              <br />
            </p>
          </div>

          <div className="widget widget_tweets"></div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
