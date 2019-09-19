import { css } from 'styled-components'

const list = {
  logo: '\e900',

  image: '\e90d',
  camera: '\e90f',

  dice: '\e915',
  spades: '\e917',
  clubs: '\e918',
  diamonds: '\e919',

  connection: '\e91b',
  copy: '\e92c',
  paste: '\e92d',
  stack: '\e92e',
  qrCode: '\e938',
  location: '\e947',

  display: '\e956',
  laptop: '\e957',
  mobile: '\e958',
  tablet: '\e959',

  spinner: '\e97a',
  spinner2: '\e97b',
  spinner3: '\e97c',
  spinner4: '\e982',
  spinner5: '\e983',

  lock: '\e98f',
  unlocked: '\e990',

  cog: '\e994',
  cogs: '\e995',

  timeline: '\e99b',
  barchart: '\e99c',
  stackedBarchart: '\e99d',

  fire: '\e9a9',
  switch: '\e9b6',
  attachment: '\e9cd',
  eye: '\e9c3',

  starHalf: '\e9d8',
  starFull: '\e9d9',
  starEmpty: '\e9d7',
  heart: '\e9da',

  plus: '\ea0a',
  minus: '\ea0b',
  cross: '\ea0f',
  checkmark: '\ea10',
  checkmark2: '\ea11',

  play: '\e912',
  play2: '\ea1c',
  pause: '\ea1d',
  stop: '\ea1e',
  backward: '\ea1f',
  forward: '\ea20',
  first: '\ea21',
  last: '\ea22',
  previous: '\ea23',
  next: '\ea24',
  volumeHigh: '\ea26',
  volumeMedium: '\ea27',
  volumneLow: '\ea28',
  volumeMute: '\ea29',
  volumeMute2: '\ea2a',

  infinite: '\ea2f',
  arrowUpLeft: '\ea39',
  arrowUp: '\ea3a',
  arrowUpRight: '\ea3b',
  arrowRight: '\ea3c',
  arrowDownRight: '\ea3d',
  arrowDown: '\ea3e',
  arrowDownLeft: '\ea3f',
  arrowLeft: '\ea40',

  sortAlphaAsc: '\ea48',
  sortAlphaDesc: '\ea49',
  sortAmountAsc: '\ea4c',
  sortAmountDesc: '\ea4d',

  radioChecked: '\ea54',
  radioUnchecked: '\ea56',

  share: '\ea82',
  flickr: '\eaa3',
  flickr2: '\eaa4',

  mail: '\ea86',
  instagram: '\ea92',
  deviantart: '\eaaa',
  github: '\eab0',
  linkedin: '\eac9',
  linkedin2: '\eaca',
  html: '\eae4',
  html2: '\eae5',
  quotesLeft: '\e977',
  quotesRight: '\e978'
}

function template(icon) {
  return css`
    &:before {
      content: "\\${icon}";
    }
    font-family: icons;`
}

export default Object.keys(list).reduce((acc, curr) => { acc[curr] = template(list[curr]); return acc }, {})
