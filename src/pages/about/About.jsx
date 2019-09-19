//const Footer = require('common/Footer')
import styled from 'styled-components'

import useWidth from 'hooks/useWidth'
import colors from 'variables/colors'
import Hashtags from './Hashtags'
import PolaroidList from './PolaroidList'

const Page = styled.div`
  background: ${colors.primary};`

const Intro = styled.p`
  margin: 10px 40px 0;
  width: 80%;
  max-width: 750px;
  color: white`

const BlogContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: calc(100% - 40px);`

export default function About() {
  let width = useWidth()

  return(
    <Page id="about-page">
      <Hashtags hashtags={["Hobbies", "Loves", "Life"]}/>
      <Intro>
        I live together with my boyfriend and our cat Zoey in Stockholm, Sweden. My spare time is spent painting and trying to be the very best at Heroes of the Storm while Zoey tries to eat my mouse cord.
        The main reason I got interested in the art of programming is that I love to bring ideas to life. I also enjoy solving the various problems that occur during the development process.
      </Intro>
      <BlogContent id="blog-content">
        <PolaroidList width={width} />
      </BlogContent>
    </Page>
  )
}
