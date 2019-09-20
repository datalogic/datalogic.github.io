/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
        render() {
                const { siteConfig, language = '' } = this.props;
                const { baseUrl, docsUrl } = siteConfig;
                const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('doc1.html')}>Samples Apps</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const DocLinks = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>

        {/* <MarkdownBlock>Datalogic Documentation</MarkdownBlock> */}
        

        {/*Android SDKs section */}
        <h3 className="leftLegend">Android SDKs</h3>
        <div className="flex-container" style={{ marginTop: '25px' }}>

          {/*Android SDK*/}
          <div className="item sixty">

            <a href="android" className="tutorial-link">
              <img src="/img/homepage/home-android.png" className="resource-image" /><br />
              Android Studio SDK
            </a>

            <div className="resource-desc">
              <p>For Java and Kotlin app development.</p>
            </div>

          </div>

          {/*Xamarin SDK */}
          <div className="item">
            <a href="/xamarin" className="tutorial-link">
              <img src="/img/homepage/home-xamarin.png" className="resource-image" /><br />
              Xamarin SDK</a>

            <div className="resource-desc">
              <p style={{ paddingLeft: '5px', paddingRight: '5px' }}>Xamarin (C#) interface to the SDK for Android devices. For development in Visual Studio.</p>
            </div>

          </div>

          {/*Cordova SDK*/}
          <div className="item">
            <a href="/cordova" className="tutorial-link">
              <img src="/img/homepage/home-ionic.png" className="resource-image" /><br />
              Cordova SDK</a>

            <div className="resource-desc">
              <p>Cordova plugin for use in Ionic and Phonegap apps.</p>
            </div>

          </div>
        </div>
        {/* End Android SDKs section */}


        {/*Configuration Tools section */}
        <h3 className="leftLegend">Configuration Tools</h3>
        <div className="flex-container" style={{ marginTop: '30px' }}>

          {/*Scan2Deploy Item */}
          <div className="item">
            <a href="/scan2deploy" className="tutorial-link">
              <img src="/img/homepage/home-scan2deploy.png" className="resource-image" /><br />
              Scan2Deploy</a>

            <div className="resource-desc">
              <p>Software for configuring Android devices using barcodes.</p>
            </div>

          </div>

          {/*DXU Desktop Item*/}
          <div className="item">
            <a href="/dxu" className="tutorial-link">
              <img src="/img/homepage/home-dxu-desktop.svg" className="resource-image" /><br />
              DXU</a>

            <div className="resource-desc">
              <p>Windows desktop software for configuring Android and WEC7.</p>
            </div>

          </div>

          {/*OEMConfig Item*/}
          <div className="item">
            <a href="oemconfig" className="tutorial-link">
              <img src="img/homepage/home-oem-config.png" className="resource-image" /><br />
              OEMConfig</a>


            <div className="resource-desc">
              <p>Software for configuring Datalogic specific settings on Android devices. Used by
                3rd party EMMs.</p>
            </div>

          </div>

        </div>
        {/* End Configuration Tools section */}


        <h3 className="leftLegend">Windows CE SDKs</h3>
        <div className="flex-container-win">

            {/*Windows CE SDK Item*/}
            <div className="item forty">
            <a href="ce" className="tutorial-link">
              <img src="img/homepage/home-windows.png" className="win-image" /><br />
              Windows CE SDK</a>


            <div className="resource-desc">
              <p>Datalogic SDK for Windows CE and Windows Mobile devices.</p>
            </div>

          </div>

          {/*Datalogic CE Sync*/}
            <div className="item">
            <a href="cesync" className="tutorial-link">
              <img src="img/homepage/home-ce-sync.svg" className="resource-image" /><br />
              Datalogic CE Sync</a>

            <div className="resource-desc">
              <p>A simple command line tool that makes use of the datalogic-ce-sync library.</p>
            </div>
          </div>


          {/*Invisible Flexbox*/}
          <div className="item invisible">
            <a href="cesync/overview" className="tutorial-link">
              <img /><br />
              </a>

            <div className="resource-desc">
              <p></p>
            </div>
          </div>

        </div>
      </div>
    );

    const BannerImage = () => (
      <div className="bg-splash">
        <div className="banner-text">Empower your <i className="dev">development</i> vision.</div>
        <small className="credit">© Rob Bulmahn</small>
        
      </div>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        {/* <HomeSplash siteConfig={siteConfig} language={language} /> */}
        <div className="mainContainer">
        <BannerImage />
          <DocLinks />
          {/* <LearnHow /> */}
          
          {/* <Description />
          <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;