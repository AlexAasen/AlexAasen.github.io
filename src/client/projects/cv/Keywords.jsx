import styled from 'styled-components'
import fonts from 'variables/fonts'

const StyledKeywords = styled.div`
  display: flex;
  flex-wrap: wrap;`

const Keyword = styled.span`
  padding: 5px 10px;
  margin: 0 10px 10px 0;
  font-family: ${fonts.roboto};
  &:nth-child(5n){
    background: #f787a6;
  }
  &:nth-child(5n + 1){
    background: #9adc2d;
  }
  &:nth-child(5n + 2){
    background: #68cbf7;
  }
  &:nth-child(5n + 3){
    background: #f89b44;
  }
  &:nth-child(5n + 4){
    background: #ca90e2;
  }`

export default function Keywords(props){
  const keywords = props.keywords.map(keyword => {
    return <Keyword key={keyword}>{keyword}</Keyword>
  })

  return <StyledKeywords>
    {keywords}
  </StyledKeywords>
}
