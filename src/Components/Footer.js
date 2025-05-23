import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer style={{color:"white"}}>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

                <ul>
                <li>Designed and developed by Swaleha<a title="Swaleha" href="#">
                {/* <span role="img" aria-label="heart"></span>Swaleha <span role="img" aria-label="heart"></span> */}
                  </a></li>
                </ul>

            {/* <ul className="copyright">
              <li>&copy; 2024</li>
            </ul> */}
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
