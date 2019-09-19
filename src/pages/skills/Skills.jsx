import styled from 'styled-components'

import ForceGraph from './ForceGraph'
import Header from './Header'
import Specialization from './Specialization'

const Page = styled.div`
  margin-bottom: 80px;`

export default function Skills(){
  return <Page id="attributes-page">
    <Header />
    <Specialization />
    <ForceGraph />
  </Page>
}
