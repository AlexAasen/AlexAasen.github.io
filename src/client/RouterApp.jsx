import Menu from "./Menu"
import Contact from 'pages/contact/Contact'
import About from 'pages/about/About'
import Skills from 'pages/skills/Skills'
import Artwork from 'pages/artwork/Artwork'

import Projects from 'pages/projects/Projects'
import G2048 from './projects/2048/G2048'
import GameOfLife from './projects/gameoflife/GameOfLife'
import Mastermind from './projects/mastermind/Mastermind'
import Memory from './projects/memory/Memory'
import WindVelocityGraph from './projects/windvelocity/WindVelocityGraph'
import VIS from './projects/vis/VIS'
import Cv from './projects/cv/Cv'
import FloodIt from './projects/floodit/FloodIt'
import Simon from './projects/simon/Simon'
import Bejeweled from './projects/bejeweled/Bejeweled'

import { Switch, Route } from 'react-router-dom'

export default function RouterApp () {
  return(
    <div>
      <Menu />
      <Switch>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/projects/2048' component={G2048}/>
        <Route exact path='/projects/gameoflife' component={GameOfLife}/>
        <Route exact path='/projects/mastermind' component={Mastermind}/>
        <Route exact path='/projects/memory' component={Memory}/>
        <Route exact path='/projects/windvelocity' component={WindVelocityGraph}/>
        <Route exact path='/projects/vis' component={VIS}/>
        <Route exact path='/projects/cv' component={Cv}/>
        <Route exact path='/projects/floodit' component={FloodIt}/>
        <Route exact path='/projects/simon' component={Simon}/>
        <Route exact path='/projects/bejeweled' component={Bejeweled}/>

        <Route exact path='/' component={Skills}/>
        <Route exact path='/skills' component={Skills}/>
        <Route exact path='/artwork' component={Artwork}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </div>)
}
