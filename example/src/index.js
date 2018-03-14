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
  myself: require('../assets/myself.png')
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
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} caps textColor="white">
            Future-proof API access control
          </Heading>
          <Heading size={5} textColor="black" style={{ marginTop: '2rem' }}>
            Aeneas Rekkas
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Terminology
          </Heading>
          <Appear>
            <Heading size={1} textColor="tertiary">
              Brief Overview
            </Heading>
          </Appear>
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

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
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

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Terminology
          </Heading>
          <Appear>
            <Heading size={1} textColor="tertiary">
              Brief Overview
            </Heading>
          </Appear>
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

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={1} caps fit textColor="tertiary">
            Authentication
          </Heading>
          <Image style={{
            borderRadius: '256px',
            height: '256px', width: '256px', marginTop: '50px'
          }} src={images.passport.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={1} caps fit textColor="tertiary">
            Authorization
          </Heading>
          <Image style={{
            borderRadius: '256px',
            height: '256px', width: '256px', marginTop: '50px'
          }} src={images.bouncer.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
          }} src={images.session.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.sessionAllDevices.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Image style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            width: '70%'
          }} src={images.sso.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">
          <Heading size={1} textColor="primary">
            SSO
          </Heading>
          <List>
          <Appear>
            <ListItem textColor="tertiary">
              Leverage the browser as trusted gateway for exchange credentials
            </ListItem>
          </Appear>
          <Appear>
            <ListItem textColor="tertiary">
              Minimize components that can read user credentials
            </ListItem>
          </Appear>
          <Appear>
            <ListItem textColor="tertiary">
              Centralize authentication to reduce overhead + risk
            </ListItem>
          </Appear>
          </List>
        </Slide>


        <Slide
          onActive={slideIndex => {
            console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
          }}
          id="wait-what"
          goTo={4}
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black"
          notes="You can even put notes on your slide. How awesome is that?"
        >
          <Image src={images.kat.replace('/', '')} margin="0px auto 40px" />
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Wait what?
          </Heading>
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="primary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/deck.example')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide goTo={3}>
          <ComponentPlayground
            theme="dark"
          />
        </Slide>
        <Slide transition={['slide']} bgImage={images.city.replace('/', '')} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Background Imagery
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" margin="0.25em">
            Mix it up!
          </Heading>
          <Heading size={6} textColor="tertiary">
            You can even jump to different slides with a standard button or custom component!
          </Heading>
          <GoToAction
            margin="1em"
            slide={8}
          >
            Jump to Slide 8
          </GoToAction>
          <GoToAction
            render={goToSlide => (
              <select
                defaultValue=""
                style={{
                  background: '#000',
                  color: '#fff',
                  fontFamily: theme.print.fonts.primary,
                  fontSize: '1.1em'
                }}
                onChange={({ target }) => goToSlide(target.value)}
              >
                <option value="" disabled>Custom Slide Picker</option>
                <option value="wait-what">Wait What!? Slide</option>
                <option value={3}>Slide 3</option>
              </select>
            )}
          />
        </Slide>
        <Slide transition={['slide']} bgDarken={0.75} getAppearStep={this.updateSteps}>
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Can
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="secondary">
              Count
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Steps
            </Heading>
          </Appear>
          <Heading size={1} caps fit textColor="secondary">
            Steps: {this.state.steps}
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['spin', 'zoom']} bgColor="tertiary" controlColor="primary" progressColor="primary">
          <Heading caps fit size={1} textColor="primary">
            Inline Markdown
          </Heading>
          <Markdown>
            {`
  ![Markdown Logo](${images.markdown.replace('/', '')})

  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
  * Add some \`inline code\` to your sldes!
            `}
          </Markdown>
        </Slide>
        {
          MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
---
Add some inline code to your markdown!

\`\`\`js
const myCode = (is, great) => 'for' + 'sharing';
\`\`\`
          `
        }
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>
        <SlideSet>
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive />
          </Slide>
        </SlideSet>
        <Slide transition={['slide']} bgColor="primary"
          notes="Hard to find cities without any pizza"
        >
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            Pizza Toppings
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem>2011</TableHeaderItem>
                  <TableHeaderItem>2013</TableHeaderItem>
                  <TableHeaderItem>2015</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>None</TableItem>
                  <TableItem>61.8%</TableItem>
                  <TableItem>39.6%</TableItem>
                  <TableItem>35.0%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pineapple</TableItem>
                  <TableItem>28.3%</TableItem>
                  <TableItem>54.5%</TableItem>
                  <TableItem>61.5%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pepperoni</TableItem>
                  <TableItem />
                  <TableItem>50.2%</TableItem>
                  <TableItem>77.2%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Olives</TableItem>
                  <TableItem />
                  <TableItem>24.9%</TableItem>
                  <TableItem>55.9%</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidable.com"><Image width="100%" src={images.logo} /></Link>
        </Slide>
      </Deck>
    );
  }
}
