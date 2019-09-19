import styled from 'styled-components'

import GalleryView from './GalleryView'

const Page = styled.div``

const VideoHolder = styled.div`
  max-width: 1200px;
  margin: auto;
  width: 100%;`

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
      component: <img className="image-entry" src='src/static/img/projects/vis/measure.png'></img>
    },
    {
      thumbnail: "src/static/img/projects/vis/dashboard.png",
      component: <img className="image-entry" src="src/static/img/projects/vis/dashboard.png"></img>
    },
    {
      thumbnail: "src/static/img/projects/vis/barchart.png",
      component: <img className="image-entry" src="src/static/img/projects/vis/barchart.png"></img>
    },
    {
      thumbnail: "src/static/img/projects/vis/table.png",
      component: <img className="image-entry" src="src/static/img/projects/vis/table.png"></img>
    },
    {
      thumbnail: "src/static/img/projects/vis/bartable.png",
      component: <img className="image-entry" src="src/static/img/projects/vis/bartable.png"></img>
    }
  ]

  return <Page>
    <GalleryView list={images} />
  </Page>
}
