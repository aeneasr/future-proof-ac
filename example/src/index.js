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
                In the introduction we will explore some terminology and look at traditional access control
                mechanisms <strong>always</strong> in the context of
                internet-facing applications.
              </p>
              <p>
                We will tocuh some common security architectures which I have seen in my career and I will quickly go
                through
                some of their downsides and obviously best practices that have emerged over the last five years.
              </p>
              <p>
                In the last slides I will introduce you to open source software which you can use to apply these best
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
              <p>Before we skip ahead I want to lost a few words on myself</p>
              <p>I started developing games when I was about 12 years old, and quickly got into web technologies (2000 -
                we had a 56k modem and then ISDN)</p>
              <p>10 years ago (2008), I started an education (it's called serlo.org) non profit which currently serves
                about 1 million unique users per month</p>
              <p>There I developed two content management systems from scratch and learned a ton about software
                development - learning by doing</p>
              <p>I used that knowledge to work on open source software which was lacking at that time and those products
                are now a company called ORY</p>
              <p>We have an extraordinary open source community, ~15k Stars on GitHub and is used by serious companies,
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
              <p>Confirming your identity however is not equal to allowing you entry, which brings up to the second
                concept</p>
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
              <p>The user exchanges his username and password for a session which is typically stored in a browser
                cookie</p>
              <p>The cookie contains the user's id and maybe some other data as well and is used on whenever the user
                access the server through the browser0</p>
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
              <p>If we apply the previous pattern here, each service has either its own own user management or somehow
                synchronises
                the users with the other services, by accessing the same database for example</p>
              <p>This has either bad user experience, because the user needs multiple user accounts</p>
              <p>or bad developer experience, because the developer needs to synch the data somehow</p>
              <p>Also, the username and password combination is shared across all those services. If the user uses the
                same password across all of his accounts
                or you have some type of synchronization, every rogue developer can impersonate the user or sell the
                data</p>
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
              <p>The probably well-known solution to this is called SSO (single sign on)</p>
              <p>Here, all user data is stored in a central repository called the identity provider</p>
              <p>Users exchange their username and password at that identity provider and get temporary credentials</p>
              <p>Now, the services don't need to synchronize the data because it's stored in a central place,
                and they don't have access to the user's long living credentials (username + password). They only
                get a token which is probably only valid for their service</p>
              <p>At deutsche börse, you solve this with OpenAM if I recall correctly</p>
              <p>So in conclusion, exchange user credentials for new, restricted, and temporary credentials (like a
                token)</p>
            </div>
          )}>>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.sso.replace('/', '')} margin="0px auto 40px" />
          <Appear>
            <Text textColor="primary">
              1. Exchange user credentials for new, temporary credentials with limited scope
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary"
          notes={(
            <div>
              <p>There are generally to types of tokens, pass-by-value and pass-by-reference</p>
              <p>Here we see a pass-by-value token, more specifically a JSON Web Token</p>
              <p>On the left you see it's encoded form - it's basically base64 encoded JSON</p>
              <p>We have a header which says what cryptographic algorithm was used</p>
              <p>We have the payload which is populated by the developer</p>
              <p>And we have a signature which is generated using a secret or a public/private keypair</p>
              <p>Only the person with the right secret can create the proper signature</p>
            </div>
          )}
        >
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
              In general, pass-by-value tokens are a preferred choice by developers and you encounter them quite often.
            </p><p>
            Developers love these because the information is encoded in the token itself and easily extractable
          </p>
            <p>
              It's also possible to verify the validity ("authentication") of the token without doing a network
              roundtrip.
              We can use a public key or a shared secret, depending on what was used to sign the token
            </p>
            <p>Obviously, this also means that we can't revoke tokens on short notice but have to wait until the
              token expires. This can be very bad in situations where you need to revoke tokens immediately.</p>

            <p>Another downside is that the token's payloads can be read by anyone that has a token. I started this
              slide
              by saying that developers love pass-by-value tokens. They love them because it's easy to share information
              across several services. Well, some data might be confidential and (out of naivity) exposing that
              information
              is actually a security risk
            </p>
            <p>The only way to solve that is through encryption of the payloads, which increases complexity again</p>
            <p>Popular examples for pass-by-value tokens are SAML Assertions and JSON Web Tokens</p>
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
          <p>Pass-by-reference tokens are a unique ID</p>
          <p>The server uses a database (or the filesystem) where the session's information is stored.</p>
          <p>The information is totally opaque to the token holder and the server typically doesn't expose any session
            related information</p>
          <p>As we're doing a look up in a database or in the file system, real-time revokation (blacklisting) is
            possible too</p>
          <p>On the downside, we need a network roundtrip for validation (filesystems typically don't scale that
            well)</p>
          <p>Also, no standard exists that defines these tokens as their implementation may be different in every
            system.</p>
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

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={(<div>
          <p>The best advice I can give you is to use both types. This applies especially to distributed systems
            constructor "cloud native" environments where we deal with multiple services, API gateways, and so on.</p>
          <p>
            So what you do is issue pass-by-reference tokens to the outside world. That means that nobody can read
            thos tokens and you can easily revoke them</p>
          <p>Then, you convert these references to pass-by-value tokens at your API gateway</p>
          <p>And get all the benefits of pass-by-value internally without the disadvantages related to revokation and
            transparency</p>
        </div>)}>
          <Heading caps size={2} textColor="primary">
            Combine both
          </Heading>
          <List>
            <Appear>
              <ListItem textColor="tertiary">Use pass-by-reference in the outside world</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">Convert pass-by-reference to pass-by-value at your API gateway</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">Use pass-by-value internally</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>Ok, we covered now what types of tokens exist, and that it's a good idea to have an SSO provider when
                you have multiple services in your IT infrastructure.</p>
              <p>That doesn't fully reflect todays world though, we were working under the assumption that we have only
                on consumer (the browser)</p>
              <p>Today though, we have IoT devices like smart homes or smart cars, mobile apps, pcs, browser apps,
                native apps
                and even third parties that do business on top of our APIs</p>
              <p>
                Just having an SSO provider that allows us to "POST" the username and password to it and get a token
                back
                is maybe not such a good idea, especially when we look to 3rd parties.
              </p>
              <p>
                Imagine a third party - for example my company - needing access to your users usernames and passwords
                in order for me to be able to access the data from those users. That's ridiculous, right?
              </p>
              <p>
                If you encounter such a complex environment, you might want to consider delegated protocols such as
                OAuth2
                and OpenID Connect on top of your existing authentication and authorization infrastructure (LDAP,
                OpenAM, ...)
              </p>
            </div>
          )}>>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.sessionAllDevices.replace('/', '')} margin="0px auto 40px" />
          <Appear>
            <Text textColor="primary">
              2. Consider federated protocols (e.g. OAuth2, OpenID Connect) for 3rd party access
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>While we're at the topic of mobile authentication, I want to quickly go over this very important topic
                as well,
                because that is, in my opinion, one of the worst practices of the last years in terms of sign on
                security</p>
              <p>Consider the following images. Here we have two mobile apps. The left is the "vendor" app you
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
              <p>Now check this image, again the counterfeit app on the right, the legit on the left</p>
              <p>Can you now spot the difference?</p>
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
              <p>So please, use the browser as a trusted intermediary for authentication processes. Don't rely on native
                UIs!</p>
              <p>Some users are still blind to this, but it provides at least some way of identifying where I log in</p>
              <p>So a year ago I downloaded an app from stadtsparkasse. And I wasn't sure if that was actually from the
                company
                or a scam</p>
              <p>It provided no way of me knowing where I log in (the legitimate website) and wether or not my data is
                being phished</p>
              <p>So I never used this app. Most users aren't that suspicious.</p>
            </div>
          )}>>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.sso2.replace('/', '')} margin="0px auto 40px" />
          <Appear>
            <Text textColor="primary">
              3. Use the browser as a trusted intermediary for authentication
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>The last topic I want to touch is the BeyondCorp security framework developed at Google</p>
              <p>In 2009 McAffee discovered a sophisticated APT (Advanced Persistent Threat) attack named operation
                aurora.</p>
              <p>The attack originated in Beijing and is associated to the chinese military</p>
              <p>The attackers targeted Adobe, Rackspace, Yahoo, Symantec, Google, and others</p>
              <p>
                According to McAfee, the primary goal of the attack was to gain access to and potentially modify source
                code repositories at these high tech, security and defense contractor companies.
              </p>
              <p>[The SCMs] were wide
                open," says Alperovitch. "No one ever thought about securing them, yet these were the crown jewels of
                most of these companies in many ways—much more valuable than any financial or personally identifiable
                data
                thatthey may have and spend so much time and effort protecting."[11]
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
              <p>Before 2009, Google looked like this. Most companies still look like that today.</p>
              <p>In that system we have like a trusted environment. Here, clients have priviledged access to the
                internal resources</p>
              <p>This security model has the concept of physical premises. If we plug the lan cable into our pc,
                then we need to be priviledged because we're in the building, right?</p>
              <p>For external traffic, we have a tight gateway which is typically a VPN proxy. There we need
                to pass access control before we can act like we would if we were plugged in the LAN</p>
              <p>Not only are VPNs notoriously painful to set up, and there are just so many devices around today</p>
              <p>But let's come back to Aurora. Apparently, the attackers where able to get in the intranet
                which lead to priviledged access to source code and configuration items which were unprotected as
                sysadmins assumed that any access has to come from within the elevated environment</p>
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
            <p>Once the thread was eliminated, Google worked on an alternative that better suits todays needs with
              regards
              to bring your own device policies and Advanced Persistent Threats</p>
            <p>So what they propose and use internally is the usage of an Identity & Access Proxy which is deployed
              alongside any application that is accessible via the internet</p>
            <p>
              Also, there is no distinction between intranet and public net, every client has to properly authenticate
              using the SSO provider, and pass access control in the IAP.
            </p>
            <p>
              The IAP actually uses the best practice we talked about earlier - it converts whatever credentials it gets
              (e.g. TLS client certificate) to a easily consumale JSON Web Token that contains all relevant session
              information
            </p>
            <p>
              What's also great about this approach is that you can actually solve most of the authorization within the
              proxy by specifying RBAC rules or ACL rules or other type of access control policies.
            </p>
            <p>
              And lastly, a trend we're seeing and which we're also working on is anomaly detection. In this system, all
              traffic passes through a gateway before reaching the server. The gateway has all the information on the
              user's identity, the origin of the request, and the resources and permissions the request needs. This is
              the perfect data for use in machine learning in the context of anomaly detection.
            </p>
          </div>
        )}>
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.iap.replace('/', '')} margin="40px auto 40px" />
          <Appear>
            <Text textColor="primary">
              4. Protect all services with an Identity and Access Proxy
            </Text>
          </Appear>
          <Appear>
            <Text textColor="primary">
              5. Augment authorization with anomaly detection
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={1} caps fit textColor="tertiary">
            Conclusion
          </Heading>
          <List>
            <ListItem textColor="tertiary">
              Centralize authentication and user management.
            </ListItem>
            <Appear>
              <ListItem textColor="tertiary">
                Exchange long living credentials (username + password) for temporary credentials (token or assertion)
                with limited scope.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">
                Consider combining pass-by-value and pass-by-reference tokens.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">
                Consider federated protocols (e.g. OAuth2, OpenID Connect) for 3rd party access.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">
                Use the browser as a trusted intermediary for authentication.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">
                Model your environment with zero trust in mind.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">
                Don't reinvent the wheel, use open standards & open source.
              </ListItem>
            </Appear>
          </List>
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

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary"
          notes={(
            <div>
              <p>
                Ok, so let's look at some open source software next.
              </p>
            </div>
          )}
        >
          <Heading size={1} caps fit textColor="tertiary">
            Open Source
          </Heading>
          <Heading size={2} caps fit textColor="primary">
            Software
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary"
          notes={(
            <div>
              <p>
                The first software, called ORY Hydra, is a cloud native OAuth2 and OpenID Connect provider
              </p>
              <p>
                It connects to any existing identity provider and issues short living credentials
              </p>
            </div>
          )}
        >
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

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary"
          notes={(
            <div>
              <p>
                ORY Oathkeeper is a Identity and Access Proxy modeled after the Google BeyondCorp Whitepaper
              </p>
              <p>
                It converts credentials (e.g. TLS Client Certification) to JSON Web Tokens, more specifically so-called ID Tokens which is a standard
              </p>
              <p>
                It's also able to apply RBAC, ACL and more complex Access Control Policies
              </p>
              <p>
                It also uses machine learning for outlier detection
              </p>
              <p>
                Not everything is done yet, for example TLS client certification and outlier detection are still in development
              </p>
              <p>but you can grap the preview on github</p>
            </div>
          )}
        >
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

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary"
          notes={(
            <div>
              <p>
                We're almost done - if you have questions regarding the technology or might have a project where something
                what I talked about may fit in, don't hesitate to contact us at hi@ory.sh (sh like bash)
              </p>
            </div>
          )}>
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
