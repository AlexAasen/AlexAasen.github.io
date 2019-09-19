import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import projects from 'constants/projects'
import fonts from 'variables/fonts'

const Img = styled.img`
  width: 100%;
  transition: opacity .2s;`

const Page = styled.div`
  padding: 50px 75px;
  @media (min-width: 750px){ padding: 50px 150px; }`

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(1, 1fr);
  transition: grid-template-columns .3s;
  @media (min-width: 750px){ grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1300px){ grid-template-columns: repeat(4, 1fr); }
  @media (min-width: 1950px){ grid-template-columns: repeat(6, 1fr); }`

const GridItem = styled(NavLink)`
  border: 1px solid #c7c6c6;`

const Info = styled.div`
  border-top: 1px solid #c7c6c6;
  padding: 20px;`

const H3 = styled.h3`
  font-family: ${fonts.roboto};
  font-weight: 500;
  font-size: 16px;
  margin: 0 0 10px;`

export default function Projects(){
  const gridItems = projects.map((item, idx) => {
    return <GridItem key={idx} to={item.route}>
      <Img src={item.src}/>
      <Info>
        <H3>{item.title}</H3>
        <p>{item.description}</p>
      </Info>
    </GridItem>
  })

  return <Page>
    <Grid>
      {gridItems}
    </Grid>
  </Page>
}
