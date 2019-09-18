import styled from 'styled-components'
import feed from './feed'
import loadImgs from './loadImgs'

import FeedComponent from './FeedComponent'

const Page = styled.div`
  background: #2c3235;`

export default function Artwork(){
  const imgs = loadImgs(feed)

  const feedComponent = imgs.length > 0 && <FeedComponent imgs={imgs}/>

  return <Page className="newsfeed-container">
    {feedComponent}
  </Page>
}
