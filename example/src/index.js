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
  sessionAllDevices: require('../assets/all-devices/index(9).png'),
  sso: require('../assets/sso/index.png'),
  sso2: require('../assets/sso-2/index(8).png'),
  sessionAllBackends: require('../assets/many-backends/index-2.png'),
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
  },
  jwt: require('../assets/jwt.png')
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
              <p>
                Hi, my name is Aeneas Rekkas and I want to introduce you to best practices that you can use to secure
                your APIs in a future-proof way.
              </p>
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
              <p>
                First I want to give you a quick overview of what you can expect from this session
              </p>
              <p>
                We will explore some terminology and look at traditional access control mechanisms in the context of
                internet-facing applications.
              </p>
              <p>
                I will walk alongside architectures that I've seen in my career and which are quite common.
              </p>
              <p>
                Alongside, I'll show you what problems exist in these systems and will show concepts that have evolved
                as best practices to resolve those issues. You will most likely konw some of them.
              </p>
              <p>
                And lastly I'll point you to some open source software that you can use in order to achieve some of
                these
                practices.
              </p>
            </div>
          )}>>
          <Heading size={1} textColor="tertiary">
            Introduction
          </Heading>
          <Appear>
            <Heading size={1} textColor="tertiary">
              Best Practices
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
              <p>I started developing games when I was about 12 years old, and quickly got into web technologies</p>
              <p>10 years ago, I started an education non profit which currently serves about 1 million unique users per
                month</p>
              <p>The second company I started - called Ory - focuses on my passion which is building defensive open
                source software</p>
              <p>Our technology has an extraordinary community, ~15k Stars on GitHub and is used by serious companies,
                including Deutsche Börse Labs, Lenovo, Honeywell, Westfield, Influence Health, Raspberry PI, Arduino,
                ... and so on</p>
              <p>Part of my work is consulting, and this presentation is a brief - because we don't have much time -
                overview of what I've learned and seen in my career so far</p>
              <p>Oh also, I finished my computer science masters two weeks ago!</p>
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
              <p>Let's warm up a bit by refreshing some important terminologies. This probably isn't new to you
                but it's still good to have a clear picture in mind.</p>
              <p>Authentication describes the process of attesting, for example, an identity</p>
              <p>Here we have an officer at the border checking our passport. Typically, they check the image and
                compare
                it with my face. He authenticates your identity</p>
              <p>Confirming your identity however is not equal to allowing you entry. After the identification, the
                officer applies a set of rules or policies that allow or disallow you to enter the country.</p>
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
              <p>This brings us to the second term: Authorization</p>
              <p>In this example, this tough looking bouncer is denying you entry to the club. He applies some rule
                or policy ("No blue jeans") to you and decides if you're allowed to enter or not. He performs access
                control,
                the proper term would be "Policy Enforcement Point", because he enforces the policy (barring you from
                entry)</p>
              <p>So authorization is the function of specifying access rights to resources.</p>
              <p>What's important with these two terms is that they're completely separate. The bouncer does not need
                to identify you. Similarly, in a web service, a anonymous user might still have some access priviledges.
              </p>
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
              <p>Next we will check out some common access control design patterns and their issues</p>
              <p>Here we have a simple web server (website, blog) which users access through a browser</p>
              <p>The user exchanges his username and password for a cookie which is stored in the browser</p>
              <p>The cookie contains the user's id and maybe some other data as well</p>
              <p>This is the easiest access control you can find. There are countless frameworks and SDKs available for
                implementing this and also adding authorization via RBAC or ACL</p>
              <p>You'll find this concept everywhere, especially in tools like wordpress</p>
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
              <p>In larger businesses we typically have multiple services, developed by different people.</p>
              <p>If we apply the previous pattern here, each service has it's own user management or somehow shares
                the users with the other services, by accessing the same database for example</p>
              <p>The issue here is that we get a ton of overhead for either the user, as he needs to register multiple
                times,
                or the developers, because they need to synch the data.</p>
              <p>Another issue is that every service has access to the username and passwords of the businesses
                users</p>
              <p>A rogue developer is able to steal them by deploying an altered build or through some other means</p>
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
              <p>The obvious solution to this is called SSO (single sign on)</p>
              <p>Here, all user data is stored in a central repository called the identity provider</p>
              <p>Users exchange their username and password at that identity provider and get temporary credentials
                (SAML Assertion, Access Token)</p>
              <p>Now, the services don't need to synchronize the data because it's stored in a central place,
                and they don't have access to the user's long living credentials (username + password), reducing the
                likelyhood of internal
                phishing</p>
              <p>So the first tip is nothing new to Deutsche Börse but still important: Exchange username and passwords
                for temporary credentials</p>
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
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px'
          }} src={images.jwt.replace('/', '')} margin="40px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={(
          <div>
            <p>
              Pass-by-value tokens, so for example SAML Assertions or JSON Web Tokens are widely used because the
              information
              is encoded in the token and validation is done through cryptographic means so no additional network
              roundtrips
              are needed
            </p>
            <p>Obviously, this also means that we can't revoke tokens on short notice but have to wait until such a
              token expires. This can be very bad in situations where you need to revoke tokens immediately.</p>
            <p>Another downside is that the token's payloads can be read by anone that has a token. While this might
              not seem as an issue at first, I have learned that developers tend to put any sesion information in these
              tokens. Some data is confidential or a security risk and the unknowningly expose that information to the
              world</p>
            <p>Only way to solve that is through encryption of the payloads</p>
            <p>So examples include SAML Assertions and JSON Web Tokens</p>
          </div>
        )}
        >
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
          </List>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={(<div>
          <p>Pass by reference tokens keep session data in a file or database only accessible to the server, and use an
            identifier to find that data</p>
          <p>This could be, for example, a uuid</p>
          <p>This approach is superior to pass-by-value tokens because the information is confidential unless we decide
            to expose it</p>
          <p>And since we're doing a database lookup, real-time revokation is possible as well</p>
          <p>This obviously means that we need a network roundtrip for validation</p>
          <p>Also, no standard exists that defines these tokens as their implementation may be different in every
            system.</p>
          <p>What we learned is that the superior approach is to combine these two. The outside world uses identifiers,
            and these identifiers are mutated to JSON Web Tokens at the API gateway.</p>
        </div>)}>
          <Heading size={2} textColor="tertiary">
            Pass-by-reference
          </Heading>
          <Appear>
            <Heading size={3} fit textColor="primary" margin="20px 0">
              a1656cbf-01d0-4700-a400-e254e8aadd98
            </Heading>
          </Appear>
          <List>
            <Appear>
              <ListItem textColor="tertiary">Information is opaque to clients</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">Revokation is possible</ListItem>
            </Appear>
          </List>
          <List>
            <Appear>
              <ListItem textColor="tertiary">Needs network roundtrip for validation</ListItem>
            </Appear>
          </List>
          <List>
            <Appear>
              <ListItem textColor="tertiary">No standard</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>Ok, so we covered that using a SSO provider is smart and that what types of tokens we have, but what
              we discussed so far does actually no longer reflect how our IT infrastructures look as of today</p>
              <p>Today, we have different access points, for example smart homes, self-driving cars, programmatic clients, native apps,
              browser apps, and even third parties that use our APIs to conduct business.</p>
              <p>

              </p>


              <p>Today there are a ton of potential consumers of your application</p>
              <p>We have IoT devices, self-driving cars, mobile phones</p>
              <p>We also have programmatic clients (e.g. cron jobs) that need access to APIs</p>
              <p>Companies like aws, facebook, google taught us that you need to build platforms for others to use
                to
                maximize profit of your IT infrastructure</p>
              <p>Therefore we also want to open up to third parties.</p>
              <p>You all probably know the new regulations for finance where this is exactly what's happening as
                well -
                opening up to third parties</p>
              <p>But in this world, it's a bit tricky to exchange a session cookie for username and passwords</p>
              <p>a) we don't want to share the username and passwords of our users with third party companies</p>
              <p>b) devices are maybe not secre enough to store these credentials for continous access</p>
              <p>c) cookies are a bit tricky to handle for e.g. mobile clients - it's not impossible, just weird to
                deal
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
              <p>When a highly sophisticated APT attack named Operation Aurora occurred in 2009, Google began an
                internal initiative to reimagine their security architecture with regards to how employees and devices
                access internal applications.</p>
              <p>Operation Aurora was a series of cyber attacks conducted by advanced persistent threats such as the
                Elderwood Group based in Beijing, China, with ties to the People's Liberation Army.[2] First publicly
                disclosed by Google on January 12, 2010, in a blog post,[1] the attacks began in mid-2009 and continued
                through December 2009.[3]
              </p>
              <p> The attack has been aimed at dozens of other organizations, of which Adobe Systems,[4] Juniper
                Networks[5] and Rackspace[6] have publicly confirmed that they were targeted. According to media
                reports, Yahoo, Symantec, Northrop Grumman, Morgan Stanley[7] and Dow Chemical[8] were also among the
                targets.
              </p><p>
              As a result of the attack, Google stated in its blog that it plans to operate a completely uncensored
              version of its search engine in China "within the law, if at all", and acknowledged that if this is not
              possible it may leave China and close its Chinese offices.[1] Official Chinese sources claimed this was
              part of a strategy developed by the U.S. government.[9]
            </p><p>
              The attack was named "Operation Aurora" by Dmitri Alperovitch, Vice President of Threat Research at cyber
              security company McAfee. Research by McAfee Labs discovered that "Aurora" was part of the file path on the
              attacker's machine that was included in two of the malware binaries McAfee said were associated with the
              attack. "We believe the name was the internal name the attacker(s) gave to this operation," McAfee Chief
              Technology Officer George Kurtz said in a blog post.[10]
            </p><p>
              According to McAfee, the primary goal of the attack was to gain access to and potentially modify source
              code repositories at these high tech, security and defense contractor companies. "[The SCMs] were wide
              open," says Alperovitch. "No one ever thought about securing them, yet these were the crown jewels of most
              of these companies in many ways—much more valuable than any financial or personally identifiable data that
              they may have and spend so much time and effort protecting."[11]
            </p>
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
            Conclusion
          </Heading>
          <ListItem>
            <List textColor="tertiary">
              Centralize authentication and authorization in one component.
            </List>
            <Appear>
              <List textColor="tertiary">
                Exchange long living credentials (username + password) for temporary credentials (token or assertion).
              </List>
            </Appear>
            <Appear>
              <List textColor="tertiary">
                Use the browser as a trusted intermediary for authentication.
              </List>
            </Appear>
            <Appear>
              <List textColor="tertiary">
                Model your environment with zero trust in mind.
              </List>
            </Appear>
            <Appear>
              <List textColor="tertiary">
                Use open standards.
              </List>
            </Appear>
            <Appear>
              <List textColor="tertiary">
                Use open source where possible.
              </List>
            </Appear>
          </ListItem>
        </Slide>

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">*/}
        {/*<Heading size={1} caps fit textColor="tertiary">*/}
        {/*Open Standards*/}
        {/*</Heading>*/}
        {/*<ListItem>*/}
        {/*<List textColor="tertiary"><strong>SAML:</strong> A Federated Identity System built on top of XML +*/}
        {/*SOAP</List>*/}
        {/*<Appear>*/}
        {/*<List textColor="tertiary"><strong>OAuth2:</strong> A Federated Authorization System for accessing*/}
        {/*resources on behalf of a user</List>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<List textColor="tertiary"><strong>OpenID Connect:</strong> Built on top of OAuth2, widely adopted SAML*/}
        {/*alternative in the consumer space</List>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<List textColor="tertiary"><strong>BeyondCorp:</strong> Zero Trust security framework that works without VPNs</List>*/}
        {/*</Appear>*/}
        {/*</ListItem>*/}
        {/*</Slide>*/}

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={1} caps fit textColor="tertiary">
            Open Source
          </Heading>
          <Heading size={2} caps fit textColor="primary">
            Software
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={2} caps textColor="tertiary">
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
          <Heading size={2} caps textColor="tertiary">
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
          <Heading caps size={1} textColor="tertiary">
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
