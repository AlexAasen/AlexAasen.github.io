import styled from 'styled-components'
import fonts from 'variables/fonts'

const PolaroidHolder = styled.div`
  transition: all .5s;
  background: white;
  margin: 10px 20px 20px;
  padding:0;
  height: 550px;
  padding: 20px 20px 40px;`

const Img = styled.div`
  width: 100%;
  height: 450px;
  background-size: cover;
  background-position: center;
  background-image: ${props => 'url(' + props.url + ')'};`

const Paragraph = styled.p`
  ${fonts.josefin}
  text-decoration: none;
  font-weight: normal;
  line-height: 18px;
  height: 70px;
  display: block;
  padding: 30px 0 0;`

export default function Polaroid(props){
  const { marginTop, url, key, description, className } = props

  return <PolaroidHolder key={key} marginTop={marginTop} className={className}>
    <Img url={url}/>
    <Paragraph> {description}</Paragraph>
  </PolaroidHolder>
}
