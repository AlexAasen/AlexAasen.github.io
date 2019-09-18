import styled from 'styled-components'
import fonts from 'variables/fonts'

const StyledHashtags = styled.div`
  padding-top: 20px;
  margin: 20px 40px 0;`

const Hashtag = styled.span`
  font-size: 22px;
  margin-right: 10px;
  color: white;`

const HashtagLabel = styled.span`
  ${fonts.zilla}
  font-size: 22px;
  text-transform: uppercase;
  color: white;`

export default function Hashtags(props) {
  const hashtags = props.hashtags.map(x => {
    return <Hashtag key={x}>#<HashtagLabel>{x}</HashtagLabel></Hashtag>
  })

  return <StyledHashtags>
    {hashtags}
  </StyledHashtags>
}
