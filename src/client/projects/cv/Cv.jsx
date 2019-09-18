import styled from 'styled-components'
let { useState } = require('react')

import fonts from 'variables/fonts'
import { captureScreen } from 'api/exportPng'
import cv from 'constants/cv'

import Header from './Header'
import ContactInfo from './ContactInfo'
import Keywords from './Keywords'
import CareerEntry from './CareerEntry'
import EducationEntry from './EducationEntry'
import LanguageSelect from './LanguageSelect'

import Button from 'components/Button'

const Page = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  p, h1, h3, li {
    font-family: ${fonts.roboto};
    font-weight: normal;
  }
  p{ max-width: 850px; }`

const H2 = styled.h2`
  font-family: ${fonts.roboto};
  font-size: 26px;
  line-height: 32px;
  letter-spacing: .2px;
  font-weight: 400;`

const KeywordsSection = styled.div`
  padding: 15px 30px;`

const Experience = styled.div`
  padding: 20px 30px 0;`

const Download = styled(Button)`
  margin: auto;
  display: flex;`

export default function Cv() {
  let [language, setLanguage] = useState('sv')

  const handleLanguage = lang => {
    setLanguage(lang)
  }

  const carrerEntries = cv[language].career.map(entry => {
    return <CareerEntry key={entry.duration}
      {...entry}/>
  })

  const educationEntries = cv[language].education.map(entry => {
    return <EducationEntry key={entry.duration}
      {...entry}/>
  })

  return <Page id="cv-page" key="cv">
    <Download
      data-html2canvas-ignore
      onClick={captureScreen.bind(this, "#cv-page", "Alexandra_Aasen_Cv")}>{cv[language].download}</Download>
    <LanguageSelect handleLanguage={handleLanguage} language={language}/>
    <Header header={cv[language].header} tagline={cv[language].tagline}/>
    <ContactInfo />
    <KeywordsSection>
      <H2>{cv[language].skillsHeadline}</H2>
      <Keywords keywords={cv[language].skills}/>
    </KeywordsSection>
    <Experience>
      <H2>{cv[language].careerHeadline}</H2>
      {carrerEntries}
    </Experience>
    <Experience>
      <H2>{cv[language].eduHeadline}</H2>
      {educationEntries}
    </Experience>
  </Page>
}
