// src/plugins/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faJs, faVuejs, faReact, faNodeJs, faCss3Alt, faHtml5, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faJs, faVuejs, faReact, faNodeJs, faCss3Alt, faHtml5,faGithub, faLinkedin);

export { FontAwesomeIcon };
