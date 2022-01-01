import React from 'react'
import styled from 'styled-components'

import { Subtitle } from '../../components/Typography'

import { media } from '../../styles/styleUtils'

const Wrapper = styled.div`
  margin-top: 80px;
  ${media.md`
    margin-top: 40px;
  `};
`

const Section = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 60px;
  margin-top: 80px;
  ${media.lg`
    grid-gap: 10px;
  `}
  ${media.md`
    grid-template-columns: 1fr;
    margin-top: 40px;

  `}
`

const Content = styled.div``

const Item = styled.div`
  :not(:last-child) {
    margin-bottom: 40px;
  }
`

const ItemTitle = styled.h2`
  color: white;
  font-size: 31px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0 0 10px 0;
  ${media.xl`
    font-size: 26px;
  `}
  ${media.md`
    font-size: 21px;
  `}
  ${media.sm`
    font-size: 16px;
  `}
`

const ItemDescription = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0 0 10px 0;
  ${media.md`
    font-size: 16px;
  `}
  ${media.sm`
    font-size: 14px;
  `}
`

const ItemText = styled.p`
  color: white;
  line-height: 32px;
  font-size: 21px;
  font-weight: 400;
  margin: 10px 0;
  ${media.xl`
    font-size: 18px;
    line-height: 28px;

  `}
  ${media.md`
    font-size: 16px;
    line-height: 26px;
  `}
  ${media.sm`
    font-size: 14px;
    line-height: 24px;
  `}
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const StyledAnchor = styled.a`
  color: white;
`

const Bold = styled.span`
  font-weight: 700;
`

export default () => (
  <Wrapper>
    <Section>
      <Subtitle>Profile</Subtitle>
      <Content>
        <Item>
          <ItemText>
            Experienced software engineer and consultant with a deep understanding in modern web technologies and user centric software design.
          </ItemText>
          <ItemText>
            Creating digital solutions has been my passion since I wrote my first lines
            of code in elementary school. Now, after a decade and numerous projects
            later I’ve had the honor to work with a wide range of clients and partners
            ranging from large multinational corporations to small companies,
            innovative start-ups and academic institutions.
          </ItemText>
        </Item>
      </Content>
    </Section>
    <Section>
      <Subtitle>Experience</Subtitle>
      <Content>
        <Item>
          <ItemTitle>Metaspace - Software Craftsman & Founder</ItemTitle>
          <ItemDescription>2021 - Present</ItemDescription>
          <ItemText>
            Building metaverse. Platform for people to showcase and explore digital art & collectibles in web-based 3D environments. 
            Metaspace is NFT compatible web3 platform where users can own and access & create different types of virtual spaces.
          </ItemText>
        </Item>
        <Item>
          <ItemTitle>Gnonce - Software Craftsman & Co-Founder</ItemTitle>
          <ItemDescription>2018 - Present</ItemDescription>
          <ItemText>
            Gnonce is a career accelerator for skilled software craftsmen. Our mission
            is to convert ambitious software developers from employment to independent
            software freelancing. Some of my most important clients include well known publicly listed
            companies in the banking and the construction industry.
          </ItemText>
          <ItemText>
            Let me know if you want to know more about the projects I've been involved with. 💎 
          </ItemText>
        </Item>
        <Item>
          <ItemTitle>Kauppa Käy LKV - Lead Frontend Developer</ItemTitle>
          <ItemDescription>
            2019 - 2020 | Gnonce's joint venture
          </ItemDescription>
          <ItemText>
            Kauppa Käy LKV is a joint venture company running a digital platform
            which facilitates trading of real estate assets for retail investors. My
            main responsibility in this project was to lead design and development of
            the client facing SSR (server-side rendered) web application and configure
            CI/CD pipelines to support continuous and agile software releases.
          </ItemText>
          <ItemText>
            In just under five months our team of four developers was able to
            design and deliver a fully working real-time progressive web
            application that is used by thousands of users on a daily basis.
          </ItemText>
          <ItemText>
            Relevant tech:{' '}
            <Bold>
              React, Next.js, Node.js, Express.js, Typescript, CircleCI, Cypress, GCP, Heroku, Sketch
            </Bold>
          </ItemText>
        </Item>
        <Item>
          <ItemTitle>University of Jyväskylä - Research assistant</ItemTitle>
          <ItemDescription>2018 - 2019</ItemDescription>
          <ItemText>
            After two years of my studies I started working in academic research
            group. I worked as a lead developer for multiple projects related to
            decentralized app development, and also created and maintained a
            private Ethereum network which was used for development purposes by
            our research group. One of my major responsibilities was to teach
            smart contract development for over 60 BSc & MSc students on a
            decentralized application development course.
          </ItemText>
          <ItemText>
            <Bold>
              My biggest non-technical accomplishment in this job was to get a
              funding worth of 100 000€ for our research project.
            </Bold>
          </ItemText>
          <ItemText>
            Relevant tech:{' '}
            <Bold>
              React, Redux, Node.js, Express, MongoDB, Ethereum, IPFS
            </Bold>
          </ItemText>
        </Item>
        <Item>
          <ItemTitle>Web developer - Freelancer</ItemTitle>
          <ItemDescription>2014 - 2018</ItemDescription>
          <ItemText>
            Worked as a freelance web developer creating websites for my
            customers. During this time I designed, developed and deployed
            various different websites mostly using HTML, CSS and Javascript.
            Starting this as a high school graduate, I gained a lot of early
            career experience working with clients while improving my web
            development skills.
          </ItemText>
          <ItemText>
            Relevant tech:{' '}
            <Bold>
              HTML5, CSS, SASS, Javascript, jQuery, Gulp.js, Bootstrap,
              Wordpress
            </Bold>
          </ItemText>
        </Item>
      </Content>
    </Section>
    <Section>
      <Subtitle>Education</Subtitle>
      <Content>
        <Item>
          <ItemTitle>
            University of Jyväskylä - BSc, Information Technology
          </ItemTitle>
          <ItemDescription>Sep 2015 - Dec 2018</ItemDescription>
        </Item>
        <Item>
          <ItemTitle>High School - Technology line</ItemTitle>
          <ItemDescription>2012- 2015</ItemDescription>
          <ItemText>
            In addition to my high school studies I have completed over ten
            programming courses with excellent success and diplomas.
          </ItemText>
        </Item>
      </Content>
    </Section>
    <Section>
      <Subtitle>Language</Subtitle>
      <Row>
        <Item>
          <ItemTitle>Finnish</ItemTitle>
          <ItemDescription>Native</ItemDescription>
        </Item>
        <Item>
          <ItemTitle>English</ItemTitle>
          <ItemDescription>Proficient</ItemDescription>
        </Item>
        <Item>
          <ItemTitle>Swedish</ItemTitle>
          <ItemDescription>Basics</ItemDescription>
        </Item>
      </Row>
    </Section>
  </Wrapper>
)
