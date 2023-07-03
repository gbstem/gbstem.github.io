import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import li from '../images/icons/li.svg';
import fb from '../images/icons/fb.svg';
import tw from '../images/icons/tw.svg';
import ig from '../images/icons/ig.svg';

const Footer = () => {
  return (
    <footer>
      <section className="bg-dark text-center py-5">
        <div className="container">
          <a href="mailto:contact@gbstem.org" className="text-primary">
            <u>contact@gbstem.org</u>
          </a>
          <div className="row justify-content-center">
            <ul className="clear socials mt-4 d-flex justify-content-center">
              <li className="mx-2"><a href="https://facebook.com/The-Greater-Boston-STEM-Program-104063908337961" target="_blank" rel="noreferrer"><img src={fb} alt="Facebook" /></a></li>
              <li className="mx-2"><a href="https://twitter.com/gbstemprogram" target="_blank" rel="noreferrer"><img src={tw} alt="Twitter" /></a></li>
              <li className="mx-2"><a href="https://www.instagram.com/gbstem/" target="_blank" rel="noreferrer"><img src={ig} alt="Instagram" /></a></li>
              <li className="mx-2"><a href="https://www.linkedin.com/company/gbstem-program" target="_blank" rel="noreferrer"><img src={li} alt="LinkedIn" /></a></li>
            </ul>
          </div>
        </div>

        <p className="text-white">The Greater Boston STEM Program is an independent non-profit 501(c)3 organization, EIN 88-1760321</p>
        <small className="d-block mt-5 text-white">© 2023 The Greater Boston STEM Program, all rights reserved</small>
      </section>
    </footer>
  );
};

export default Footer;
