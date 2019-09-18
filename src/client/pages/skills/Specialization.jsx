import styled from 'styled-components'
import { specialization } from 'constants/skills'
import Icon from 'components/Icon'

import colors from 'variables/colors'
import mixins from 'variables/mixins'

const Section = styled.ul`
  display: flex;
  padding: 0;
  border-top: 1px solid ${colors.lightBorder};
  border-bottom: 1px solid ${colors.lightBorder};
  @media (max-width: 985px){
    flex-direction: column;
  }`

const Skill = styled.li`
  flex: 1;
  ${mixins.autoPadding}
  border-right: 1px solid ${colors.lightBorder};
  &:last-child{ border-right:none; }
  @media (max-width: 985px){
    border-top: 1px solid ${colors.lightBorder};
  }`

const Icons = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  padding: 0;`

const StyledIcon = styled(Icon)`
  margin: 0 20px;
  font-size: 50px;`

const Line = styled.div`
  width: 150px;
  margin: 0 auto 25px;
  border-bottom: 1px solid ${colors.lightBorder};`

const Paragraph = styled.p`
  text-align: center;`

const H3 = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Open Sans Condensed';
  letter-spacing: 2.5px;
  text-transform: uppercase;`

export default function Specialization(){
  const iconsMarkup = icons => icons.map((icon, idx) => {
    return <StyledIcon icon={icon} key={idx}/>
  })

  const specializationMarkup = specialization.map((skill, idx) => {
    return <Skill key={idx}>
      <Icons className="icons">{iconsMarkup(skill.icons)}</Icons>
      <H3>{skill.name}</H3>
      <Line />
      <Paragraph>{skill.description}</Paragraph>
    </Skill>
  })

  return [
    <H3 key="header">Specialization</H3>,
    <Section key="content" className="specialized-skills">
    {specializationMarkup}
  </Section>]
}
