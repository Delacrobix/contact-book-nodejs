import React from 'react';

import linkedIn from '../assets/img/socialmedia/linkedin.png';
import myWebsite from '../assets/img/socialmedia/my website.png';
import github from '../assets/img/socialmedia/github.png';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='sub-footer section-padding'>
        <div className='sub-footer-links'>
          <div className='sub-footer-links-div'>
            <h4 className='footer-h4'>Site built by: </h4>
            <p> Jeffrey S. Rerín</p>
          </div>
          <div className='sub-footer-links-div'>
            <h4 className='footer-h4'>Social media: </h4>
            <div className='social-media'>
              <div className='footer-p'>
                <a
                  href='https://www.linkedin.com/in/jeffrey-rerin/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <p>LinkedIn</p>
                  <img className='footer-img' src={linkedIn} alt='' />
                </a>
              </div>
              <div className='footer-p'>
                <a
                  href='https://github.com/Delacrobix'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <p>GitHub</p>
                  <img className='footer-img' src={github} alt='' />
                </a>
              </div>
              <div className='footer-p portfolio-footer-p'>
                <a
                  href='https://www.jeffrm.com.co'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <p>Portfolio</p>
                  <img
                    className='footer-img portfolio-img'
                    src={myWebsite}
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
