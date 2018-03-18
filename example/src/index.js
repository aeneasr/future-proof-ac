import React from 'react';

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text, GoToAction
} from '../../src';

import preloader from '../../src/utils/preloader';

import createTheme from '../../src/themes/default';

import Interactive from '../assets/interactive';

require('normalize.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  passport: require('../assets/passport-control1.jpg'),
  bouncer: require('../assets/bouncer1.jpg'),
  session: require('../assets/session/index.png'),
  sessionAllDevices: require('../assets/all-devices/index.png'),
  sso: require('../assets/sso/index.png'),
  sso2: require('../assets/sso-2/index.png'),
  sessionAllBackends: require('../assets/many-backends/index.png'),
  myself: require('../assets/myself.png'),
  vpn: require('../assets/vpn/index.png'),
  iap: require('../assets/iap/index.png'),
  mobile: {
    nobrowser: require('../assets/mobile/login-app.png'),
    legit: require('../assets/mobile/login-app-legitimate.png'),
    fake: require('../assets/mobile/login-app-counterfeit.png'),
  },
  github: {
    hydra: require('../assets/github/hydra.png'),
    oathkeeper: require('../assets/github/oathkeeper.png'),
  }, product: {
    hydra: require('../assets/product/hydra.png'),
    oathkeeper: require('../assets/product/oathkeeper.png'),
  }
};

preloader(images);

const theme = createTheme({
  primary: '#ff4081'
});

export default class Presentation extends React.Component {
  state = {
    steps: 0
  }

  render() {
    return (
      <Deck transition={['zoom', 'slide']} theme={theme} transitionDuration={500}>
        <Slide transition={['zoom']} bgColor="primary" notes={
          (
            <div>
              <p>Introduce the topic, Aeneas</p>
            </div>
          )}>
          <Heading size={1} caps textColor="white">
            Future-proof API access control
          </Heading>
          <Heading size={5} textColor="black" style={{ marginTop: '2rem' }}>
            Aeneas Rekkas
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>Swift overview of the presentation's structure</p>
              <p>Give a brief overview of systems you probably encountered already, their difficulties, and some
                established best practices from the past decades</p>
              <p>Introduce you to best practices established over the past 5 years with regards to API access
                control</p>
              <p>Take a look at software which you can use to implement what you've learned today</p>
            </div>
          )}>>
          <Heading size={1} textColor="tertiary">
            Overview
          </Heading>
          <Appear>
            <Heading size={1} textColor="tertiary">
              Concepts
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} textColor="tertiary">
              Software
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>I started developing games when I was 12</p>
              <p>Finished my MSc CS degree this month</p>
              <p>Started two companies, the first (10 years ago) is in the education space</p>
              <p>The second, ORY, focuses on improving developer/user experience of security software</p>
              <p>Our OSS has ~20k stars on github and is used by many companies, including deutsche börse labs,
                westfield, iot (raspberry, arduino), ...</p>
            </div>
          )}>>
          <Heading size={1} textColor="tertiary">
            Who is that guy?
          </Heading>
          <Image style={{
            borderRadius: '200px',
            height: '200px', width: '200px', marginTop: '50px'
          }} src={images.myself.replace('/', '')} margin="0px auto 40px" />
          <Appear>
            <Heading size={4} textColor="tertiary">
              My company "Ory" develops open source security software.
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>Let's jump to terminologies</p>
              <p>While probably 95% of you have heard these at least once, it's still good to get a refresher because
                these get often mixed up.</p>
              <p>Authentication describes the process of validating the, for example, identity of a person</p>
              <p>This is what happens when you're being vetted by the customs officer</p>
            </div>
          )}>>
          <Heading size={1} caps fit textColor="tertiary">
            Authentication
          </Heading>
          <Image style={{
            borderRadius: '256px',
            height: '256px', width: '256px', marginTop: '50px'
          }} src={images.passport.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>When you're not allowed to enter the club, someone did not grant you authorization to enter</p>
              <p>Usually, you have some policies managing who can access what - that's called authorization</p>
              <p>Authorization and authentication are conceptually totally independent. You can have one without the
                other</p>
              <p>The bouncer does not identify you (unless he thinks you're under 18), but may reject you based on a
                policy that you can't wear a lether jacket in the club</p>
              <p>Authentication is not linked to what you can do (e.g. you might be 18 but have a leather jacket and
                still can't enter)</p>
            </div>
          )}>>
          <Heading size={1} caps fit textColor="tertiary">
            Authorization
          </Heading>
          <Image style={{
            borderRadius: '256px',
            height: '256px', width: '256px', marginTop: '50px'
          }} src={images.bouncer.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>To get warmed up let's look at how traditional applications solve access control (restricting access to
                resources)</p>
              <p>The most simple variant is exchanging a username and password for a session cookie - the cookie
                contains information like your user id</p>
              <p>That information is used to identify you and e.g. perform authorization</p>
              <p>Upside is that this is very simple to implement, tons of frameworks exist.</p>
              <p>Works really well for traditional websites or generally applications that are only accessible through
                the browser</p>
              <p>Downside is on the next slide.</p>
            </div>
          )}>>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
          }} src={images.session.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>Today there are a ton of potential consumers of your application</p>
              <p>We have IoT devices, self-driving cars, mobile phones</p>
              <p>We also have programmatic clients (e.g. cron jobs) that need access to APIs</p>
              <p>Companies like aws, facebook, google taught us that you need to build platforms for others to use to
                maximize profit of your IT infrastructure</p>
              <p>Therefore we also want to open up to third parties.</p>
              <p>You all probably know the new regulations for finance where this is exactly what's happening as well -
                opening up to third parties</p>
              <p>But in this world, it's a bit tricky to exchange a session cookie for username and passwords</p>
              <p>a) we don't want to share the username and passwords of our users with third party companies</p>
              <p>b) devices are maybe not secre enough to store these credentials for continous access</p>
              <p>c) cookies are a bit tricky to handle for e.g. mobile clients - it's not impossible, just weird to deal
                with cookies outside of browsers</p>
            </div>
          )}>>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.sessionAllDevices.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>But, in large scale applications we also have a ton of providers</p>
              <p>Different teams managing different applications, sometimes in silos located in spatially separated
                locations</p>
              <p>Security threats can be outside (e.g. phishing) and inside (e.g. mad sysadmin)</p>
              <p>Sharing the highly priviledged credentials (username+password) across all these devices may have
                terrible implications</p>
              <p>All application servers know the credentials - every developer/admin in your system poses a threat to
                the credentials of your users</p>
              <p>All client applications know the credentials of your users. Even the third party apps, who you
                definitely should not trust.</p>
            </div>
          )}>>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.sessionAllBackends.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>Therefore, we have two design patterns which most companies converge to</p>
              <p>A single sign on system where users exchange credentials for temporary / short living
                assertions/tokens/session</p>
              <p>The resource servers use those tokens to validate the claims of a request (e.g. who is the user)</p>
              <p>Can be done cryptographically (pass-by-value) or by talking to the SSO server (pass-by-reference)</p>
              <p>This centralizes authentication and reduces exposure of username+password for backend systems as the
                client is accessing the SSO directly to exchange credentials for a token</p>
            </div>
          )}>>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.sso.replace('/', '')} margin="0px auto 40px" />
          <Text textColor="primary">
            1. Exchange user credentials for new and temporary credentials
          </Text>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Pass-by-value
          </Heading>
          <List>
            <Appear>
              <ListItem textColor="tertiary">Information is self-contained</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">Validation without network round-trip</ListItem>
            </Appear>
          </List>
          <List>
            <Appear>
              <ListItem textColor="tertiary">Without network round-trip, no revokation</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">Payloads are transparent unless encrypted</ListItem>
            </Appear>
          </List>
          <List>
            <Appear>
              <ListItem textColor="tertiary">SAML</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">JSON Web Tokens</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">Encrypted browser cookies</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Pass-by-reference
          </Heading>
          <List>
            <ListItem textColor="tertiary">Information is opaque to clients</ListItem>
            <Appear>
              <ListItem textColor="tertiary">Revokation is possible</ListItem>
            </Appear>
          </List>
          <Appear>
            <List>
              <Appear>
                <ListItem textColor="tertiary">Needs network roundtrip for validation</ListItem>
              </Appear>
            </List>
          </Appear>
          <List>
            <Appear>
              <ListItem textColor="tertiary">No standard</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>That's why it has become best practise to use the browser as a trusted intermediary for e.g. exchanging
                credentials</p>
              <p>The reason being that we have an address bar + SSL info available</p>
              <p>Some users are still blind to this, but it provides at least some way of identifying where I log in</p>
            </div>
          )}>>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.sso2.replace('/', '')} margin="0px auto 40px" />
          <Text textColor="primary">
            2. Use the browser as a trusted intermediary for authentication
          </Text>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>The problem is that the clients have access to your client credentials</p>
              <p>consider the following image. Here we have two mobile apps. The left is the "vendor" app you
                implemented</p>
              <p>the right one is a counterfeit app (for phishing) that I was able to sneak in the app store under a
                very similar name</p>
              <p>the user is unable to spot the difference between the two - the images are identical</p>
              <p>but the app on the right records the username+password and sends them to my server, i have now full
                control over the user's account</p>
            </div>
          )}>>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '40%',
            float: 'left'
          }} src={images.mobile.nobrowser.replace('/', '')} margin="0px auto 40px" />
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '40%',
            float: 'right'
          }} src={images.mobile.nobrowser.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>That's why it has become best practise to use the browser as a trusted intermediary for e.g. exchanging
                credentials</p>
              <p>The reason being that we have an address bar + SSL info available</p>
              <p>Some users are still blind to this, but it provides at least some way of identifying where I log in</p>
            </div>
          )}>>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '40%',
            float: 'left'
          }} src={images.mobile.legit.replace('/', '')} margin="0px auto 40px" />
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '40%',
            float: 'right'
          }} src={images.mobile.fake.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>They improved their system and published their findings as academic work</p>
              <p>System is called beyond corp</p>
              <p>Has a sense of "zero trust" where neither intranet nor public net are trusted</p>
            </div>
          )}>>
          <Heading size={1} fit textColor="primary">
            Google BeyondCorp
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>In many enterprises, we have a trusted zone and a bridge/gateway for public traffic</p>
              <p>The problem here is, besides installing e.g. VPN clients</p>
              <p>At my university we used vpn to enter the lmu network, big painpoint for many to set up</p>
              <p>Trusted zone is linked to e.g. perimiter</p>
              <p>Google for example had this concept too</p>
              <p>Then they got hacked, multiple users compromised and communications exposed</p>
              <p>Was a potential state actor attack with inside help</p>
              <p>Caused by lax security once inside private network</p>
            </div>
          )}>>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.vpn.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={(
          <div>
            <p>Talk about potential upsides, eg solving access control there</p>
            <p>Validation with public key (eg saml, jwt)</p>
          </div>
        )}>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.iap.replace('/', '')} margin="40px auto 40px" />
          <Text textColor="primary">
            3. Protect all services with an Identity and Access Proxy
          </Text>
          <Appear>
            <Text textColor="primary">
              4. Augment authorization with anomaly detection
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={1} caps fit textColor="tertiary">
            Protocols
          </Heading>
          <ListItem>
            <List textColor="tertiary"><strong>SAML:</strong> A Federated Identity System built on top of XML +
              SOAP</List>
            <Appear>
              <List textColor="tertiary"><strong>OAuth2:</strong> A Federated Authorization System for accessing
                resources on behalf of a user</List>
            </Appear>
            <Appear>
              <List textColor="tertiary"><strong>OpenID Connect:</strong> Built on top of OAuth2, widely adopted SAML
                alternative in the consumer space</List>
            </Appear>
          </ListItem>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={1} caps fit textColor="tertiary">
            Open Source
          </Heading>
          <Heading size={2} caps fit textColor="primary">
            Software
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={2} caps  textColor="tertiary">
            ORY Hydra
          </Heading>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.product.hydra.replace('/', '')} margin="40px auto 40px" />
          <Text textColor="primary">
            Cloud Native OAuth 2.0 and OpenID Connect Provider
          </Text>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
          }} src={images.github.hydra.replace('/', '')} margin="40px auto 40px" />
          <Heading size={2} textColor="tertiary">
            github.com/ory/hydra
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={2} caps  textColor="tertiary">
            ORY Oathkeeper
          </Heading>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.product.oathkeeper.replace('/', '')} margin="40px auto 40px" />
          <Text textColor="primary">
            Cloud Native Identity & Access Proxy
          </Text>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
          }} src={images.github.oathkeeper.replace('/', '')} margin="40px auto 40px" />
          <Heading size={2} textColor="tertiary">
            github.com/ory/oathkeeper
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            hi@ory.sh
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading  caps size={1} textColor="tertiary">
            Q & A
          </Heading>
        </Slide>


        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">*/}
        {/*<Heading size={1} textColor="primary">*/}
        {/*SSO*/}
        {/*</Heading>*/}
        {/*<List>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">*/}
        {/*Leverage the browser as trusted gateway for exchanging credentials*/}
        {/*</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">*/}
        {/*Minimize components that can read user credentials*/}
        {/*</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">*/}
        {/*Centralize authentication to reduce overhead + risk*/}
        {/*</ListItem>*/}
        {/*</Appear>*/}
        {/*</List>*/}
        {/*</Slide>*/}


        {/*<Slide*/}
        {/*onActive={slideIndex => {*/}
        {/*console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console*/}
        {/*}}*/}
        {/*id="wait-what"*/}
        {/*goTo={4}*/}
        {/*transition={[*/}
        {/*'fade',*/}
        {/*(transitioning, forward) => {*/}
        {/*const angle = forward ? -180 : 180;*/}
        {/*return {*/}
        {/*transform: `*/}
        {/*translate3d(0%, ${transitioning ? 100 : 0}%, 0)*/}
        {/*rotate(${transitioning ? angle : 0}deg)*/}
        {/*`,*/}
        {/*backgroundColor: transitioning ? '#26afff' : '#000'*/}
        {/*};*/}
        {/*}*/}
        {/*]}*/}
        {/*bgColor="black"*/}
        {/*notes="You can even put notes on your slide. How awesome is that?"*/}
        {/*>*/}
        {/*<Image src={images.kat.replace('/', '')} margin="0px auto 40px" />*/}
        {/*<Heading size={2} caps fit textColor="primary" textFont="primary">*/}
        {/*Wait what?*/}
        {/*</Heading>*/}
        {/*</Slide>*/}
        {/*<Slide*/}
        {/*transitionIn={['zoom', 'fade']}*/}
        {/*transitionOut={['slide', 'fade']}*/}
        {/*bgColor="primary"*/}
        {/*notes="<ul><li>talk about that</li><li>and that</li></ul>"*/}
        {/*>*/}
        {/*<CodePane*/}
        {/*lang="jsx"*/}
        {/*source={require('raw-loader!../assets/deck.example')}*/}
        {/*margin="20px auto"*/}
        {/*overflow="overflow"*/}
        {/*/>*/}
        {/*</Slide>*/}
        {/*<Slide goTo={3}>*/}
        {/*<ComponentPlayground*/}
        {/*theme="dark"*/}
        {/*/>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['slide']} bgImage={images.city.replace('/', '')} bgDarken={0.75}>*/}
        {/*<Appear fid="1">*/}
        {/*<Heading size={1} caps fit textColor="primary">*/}
        {/*Full Width*/}
        {/*</Heading>*/}
        {/*</Appear>*/}
        {/*<Appear fid="2">*/}
        {/*<Heading size={1} caps fit textColor="tertiary">*/}
        {/*Adjustable Darkness*/}
        {/*</Heading>*/}
        {/*</Appear>*/}
        {/*<Appear fid="3">*/}
        {/*<Heading size={1} caps fit textColor="primary">*/}
        {/*Background Imagery*/}
        {/*</Heading>*/}
        {/*</Appear>*/}
        {/*</Slide>*/}
        {/*<Slide>*/}
        {/*<Heading size={2} textColor="secondary" margin="0.25em">*/}
        {/*Mix it up!*/}
        {/*</Heading>*/}
        {/*<Heading size={6} textColor="tertiary">*/}
        {/*You can even jump to different slides with a standard button or custom component!*/}
        {/*</Heading>*/}
        {/*<GoToAction*/}
        {/*margin="1em"*/}
        {/*slide={8}*/}
        {/*>*/}
        {/*Jump to Slide 8*/}
        {/*</GoToAction>*/}
        {/*<GoToAction*/}
        {/*render={goToSlide => (*/}
        {/*<select*/}
        {/*defaultValue=""*/}
        {/*style={{*/}
        {/*background: '#000',*/}
        {/*color: '#fff',*/}
        {/*fontFamily: theme.print.fonts.primary,*/}
        {/*fontSize: '1.1em'*/}
        {/*}}*/}
        {/*onChange={({ target }) => goToSlide(target.value)}*/}
        {/*>*/}
        {/*<option value="" disabled>Custom Slide Picker</option>*/}
        {/*<option value="wait-what">Wait What!? Slide</option>*/}
        {/*<option value={3}>Slide 3</option>*/}
        {/*</select>*/}
        {/*)}*/}
        {/*/>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['slide']} bgDarken={0.75} getAppearStep={this.updateSteps}>*/}
        {/*<Appear>*/}
        {/*<Heading size={1} caps textColor="tertiary">*/}
        {/*Can*/}
        {/*</Heading>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<Heading size={1} caps textColor="secondary">*/}
        {/*Count*/}
        {/*</Heading>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<Heading size={1} caps textColor="tertiary">*/}
        {/*Steps*/}
        {/*</Heading>*/}
        {/*</Appear>*/}
        {/*<Heading size={1} caps fit textColor="secondary">*/}
        {/*Steps: {this.state.steps}*/}
        {/*</Heading>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['zoom', 'fade']} bgColor="primary">*/}
        {/*<Heading caps fit>Flexible Layouts</Heading>*/}
        {/*<Layout>*/}
        {/*<Fill>*/}
        {/*<Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>*/}
        {/*Left*/}
        {/*</Heading>*/}
        {/*</Fill>*/}
        {/*<Fill>*/}
        {/*<Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>*/}
        {/*Right*/}
        {/*</Heading>*/}
        {/*</Fill>*/}
        {/*</Layout>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['slide']} bgColor="black">*/}
        {/*<BlockQuote>*/}
        {/*<Quote>Wonderfully formatted quotes</Quote>*/}
        {/*<Cite>Ken Wheeler</Cite>*/}
        {/*</BlockQuote>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['spin', 'zoom']} bgColor="tertiary" controlColor="primary" progressColor="primary">*/}
        {/*<Heading caps fit size={1} textColor="primary">*/}
        {/*Inline Markdown*/}
        {/*</Heading>*/}
        {/*<Markdown>*/}
        {/*{`*/}
        {/*![Markdown Logo](${images.markdown.replace('/', '')})*/}

        {/*You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax*/}
        {/** Lists too!*/}
        {/** With ~~strikethrough~~ and _italic_*/}
        {/** And let's not forget **bold***/}
        {/** Add some \`inline code\` to your sldes!*/}
        {/*`}*/}
        {/*</Markdown>*/}
        {/*</Slide>*/}
        {/*{*/}
        {/*MarkdownSlides`*/}
        {/*#### Create Multiple Slides in Markdown*/}
        {/*All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.*/}
        {/*---*/}
        {/*Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:*/}
        {/** A Tagged Template Literal*/}
        {/** Imported Markdown from another file*/}
        {/*---*/}
        {/*Add some inline code to your markdown!*/}

        {/*\`\`\`js*/}
        {/*const myCode = (is, great) => 'for' + 'sharing';*/}
        {/*\`\`\`*/}
        {/*`*/}
        {/*}*/}
        {/*<Slide transition={['slide', 'spin']} bgColor="primary">*/}
        {/*<Heading caps fit size={1} textColor="tertiary">*/}
        {/*Smooth*/}
        {/*</Heading>*/}
        {/*<Heading caps fit size={1} textColor="secondary">*/}
        {/*Combinable Transitions*/}
        {/*</Heading>*/}
        {/*</Slide>*/}
        {/*<SlideSet>*/}
        {/*<Slide transition={['fade']} bgColor="secondary" textColor="primary">*/}
        {/*<List>*/}
        {/*<Appear><ListItem>Inline style based theme system</ListItem></Appear>*/}
        {/*<Appear><ListItem>Autofit text</ListItem></Appear>*/}
        {/*<Appear><ListItem>Flexbox layout system</ListItem></Appear>*/}
        {/*<Appear><ListItem>PDF export</ListItem></Appear>*/}
        {/*<Appear><ListItem>And...</ListItem></Appear>*/}
        {/*</List>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['slide']} bgColor="primary">*/}
        {/*<Heading size={1} caps fit textColor="tertiary">*/}
        {/*Your presentations are interactive*/}
        {/*</Heading>*/}
        {/*<Interactive />*/}
        {/*</Slide>*/}
        {/*</SlideSet>*/}
        {/*<Slide transition={['slide']} bgColor="primary"*/}
        {/*notes="Hard to find cities without any pizza"*/}
        {/*>*/}
        {/*<Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>*/}
        {/*Pizza Toppings*/}
        {/*</Heading>*/}
        {/*<Layout>*/}
        {/*<Table>*/}
        {/*<TableHeader>*/}
        {/*<TableRow>*/}
        {/*<TableHeaderItem />*/}
        {/*<TableHeaderItem>2011</TableHeaderItem>*/}
        {/*<TableHeaderItem>2013</TableHeaderItem>*/}
        {/*<TableHeaderItem>2015</TableHeaderItem>*/}
        {/*</TableRow>*/}
        {/*</TableHeader>*/}
        {/*<TableBody>*/}
        {/*<TableRow>*/}
        {/*<TableItem>None</TableItem>*/}
        {/*<TableItem>61.8%</TableItem>*/}
        {/*<TableItem>39.6%</TableItem>*/}
        {/*<TableItem>35.0%</TableItem>*/}
        {/*</TableRow>*/}
        {/*<TableRow>*/}
        {/*<TableItem>Pineapple</TableItem>*/}
        {/*<TableItem>28.3%</TableItem>*/}
        {/*<TableItem>54.5%</TableItem>*/}
        {/*<TableItem>61.5%</TableItem>*/}
        {/*</TableRow>*/}
        {/*<TableRow>*/}
        {/*<TableItem>Pepperoni</TableItem>*/}
        {/*<TableItem />*/}
        {/*<TableItem>50.2%</TableItem>*/}
        {/*<TableItem>77.2%</TableItem>*/}
        {/*</TableRow>*/}
        {/*<TableRow>*/}
        {/*<TableItem>Olives</TableItem>*/}
        {/*<TableItem />*/}
        {/*<TableItem>24.9%</TableItem>*/}
        {/*<TableItem>55.9%</TableItem>*/}
        {/*</TableRow>*/}
        {/*</TableBody>*/}
        {/*</Table>*/}
        {/*</Layout>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['spin', 'slide']} bgColor="tertiary">*/}
        {/*<Heading size={1} caps fit lineHeight={1.5} textColor="primary">*/}
        {/*Made with love in Seattle by*/}
        {/*</Heading>*/}
        {/*<Link href="http://www.formidable.com"><Image width="100%" src={images.logo} /></Link>*/}
        {/*</Slide>*/}
      </Deck>
    );
  }
}
