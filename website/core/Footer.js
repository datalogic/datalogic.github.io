/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">

        <div className="link-div">
          <p className="footer-heading">Links</p>
          <p className="footer-heading-right">Social Media</p><br className="footer-heading" />
          <a href="https://github.com/datalogic" target="_blank" className="footer-link gh">Datalogic Github &nbsp;<i className="fa fa-external-link"/></a>


          <section id="lab_social_icon_footer">
            <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="container">
              <div className="text-center center-block">

                <a href="https://www.facebook.com/DatalogicGroup/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                <a href="https://twitter.com/DatalogicGroup"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                <a href="https://www.linkedin.com/company/datalogic/"><i id="social-li" className="fa fa-linkedin-square fa-3x social"></i></a>
                <a href="https://www.youtube.com/user/DatalogicGroup"><i id="social-yt" className="fa fa-youtube-square fa-3x social"></i></a>
              </div>
            </div>
          </section>


          <div className="limit">
            <section className="copyright">
              <div style={{ textAlign: 'center' }}>
                <a href="http://www.datalogic.com/eng/legal-notice-pa-92.html" className="footer-link">Legal Notice</a>&nbsp;|&nbsp;
          <a href="http://www.datalogic.com/eng/privacy-policy-pa-112.html" className="footer-link">Privacy Policy</a>&nbsp;|&nbsp;
          <a href="http://www.datalogic.com/eng/terms-and-conditions-pa-93.html" className="footer-link">Terms and Conditions</a><br />
              </div>

              <a href="https://datalogic.com" className="footer-link">datalogic.com</a> &copy; 2019 Datalogic S.p.A. and/or its affiliates. All rights reserved. Datalogic and the Datalogic logo are
        registered trademarks of Datalogic S.p.A. in many countries including the U.S.A. and the E.U. All other trademarks are the property of their respective owners.</section>
          </div>

        </div>
      </footer>
    );
  }
}

module.exports = Footer;