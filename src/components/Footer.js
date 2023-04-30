import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <ul className="icons">
              <li>
                <a href="https://github.com/dom-jackson">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/dominicjackson92/">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
              <li>
                <a href="mailto:dommaj32@gmail.com">
                  <FontAwesomeIcon icon={faGoogle} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
