import styled from 'styled-components'

import GalleryView from './GalleryView'

const Page = styled.div``

const VideoHolder = styled.div`
  max-width: 1200px;
  margin: auto;
  width: 100%;
  max-height: 800px;`

export default function VIS(){
  const images = [
    {
      thumbnail: 'src/static/img/projects/vis/video.png',
      component: <VideoHolder>
        <div style={{ padding:"56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/303070479?title=0&byline=0&portrait=0"
            style={{ position: "absolute", top:"0", left:"0", width:"100%", height:"100%" }}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen>
          </iframe>
        </div>
      </VideoHolder>
    },
    {
      thumbnail: 'src/static/img/projects/vis/measure.png',
      component: <img className="image-entry" src='src/static/img/projects/vis/measure.PNG'></img>
    },
    {
      thumbnail: "src/static/img/projects/vis/dashboard.PNG",
      component: <img className="image-entry" src="src/static/img/projects/vis/dashboard.PNG"></img>
    },
    {
      thumbnail: "src/static/img/projects/vis/barchart.PNG",
      component: <img className="image-entry" src="src/static/img/projects/vis/barchart.PNG"></img>
    },
    {
      thumbnail: "src/static/img/projects/vis/table.PNG",
      component: <img className="image-entry" src="src/static/img/projects/vis/table.PNG"></img>
    },
    {
      thumbnail: "src/static/img/projects/vis/bartable.PNG",
      component: <img className="image-entry" src="src/static/img/projects/vis/bartable.PNG"></img>
    }
  ]

  return <Page>
    <GalleryView list={images} />
  </Page>
}
