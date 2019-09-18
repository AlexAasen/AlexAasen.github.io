import styled, { css } from 'styled-components'

const LanguageHolder = styled.div`
  justify-content: flex-end;
  display: flex;`

const LanguageButton = styled.span`
  cursor: ${props => props.selected ? 'initial' : 'pointer'};
  margin-right: 20px;
  ${props => props.selected && css`
    border-bottom: 1px solid black;`}`

export default function LanguageSelect(props){
  const { language, handleLanguage } = props

  return <LanguageHolder>
    <LanguageButton data-html2canvas-ignore
      onClick={() => handleLanguage("sv")}
      selected={language === 'sv'}>Svenska</LanguageButton>
    <LanguageButton data-html2canvas-ignore
      onClick={() => handleLanguage("eng")}
      selected={language === 'eng'}>English</LanguageButton>
  </LanguageHolder>
}
