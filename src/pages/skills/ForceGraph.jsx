import { Component } from 'react'
import styled from 'styled-components'
const d3 = require('d3')
import { skills } from 'constants/skills'

const colors = {
  role: "black",
  group: "#1C5063",
  skill: ["#CF649A", "#E59350", "#1CA0A0", "#56B24E"]
}

const H3 = styled.h3`
  text-align: center;
  margin: 80px auto 30px;
  font-family: 'Open Sans Condensed';
  letter-spacing: 2.5px;
  text-transform: uppercase;`

export default class ForceGraph extends Component {
  componentDidMount(){
    this.initializeGraph()
  }

  flatten(forceRoot){
    let i = 0
    // hierarchical data to flat data for force layout
    let nodes = []
    function recurse(node) {
      if (node.children) node.children.forEach(recurse)
      if (!node.id) node.id = ++i
      else ++i
      nodes.push(node)
    }
    recurse(forceRoot)
    return nodes
  }

  initializeGraph(){
    const forceRoot = d3.hierarchy(skills)
    const height = 600
    const width = 900

    const svg = d3.select("#force-diagram")
        .attr("preserveAspectRatio", "xMidYMax meet")
        .attr("viewBox", "0 0 " + width + " " + height)
        .style("max-height", height)
        .append("g")

    const nodes = this.flatten(forceRoot)
    const links = forceRoot.links()

    const config = {
      svg,
      height,
      width,
      forceRoot,
      nodes,
      links
    }

    this.update(config)
  }

  update({ svg, width, height, nodes, links }){
    const simulation = d3.forceSimulation()
        .force("link", d3.forceLink().distance(30).strength(0.7)
            .id((d, i) => { return i; }))
        .force("charge", d3.forceManyBody().strength(-1640).distanceMin(30).distanceMax(460))
        .force("center", d3.forceCenter((width/2), (height/2)))
        .force("x", d3.forceX())
        .force("y", d3.forceY())
        .on("tick", tick)

    const linkSvg = svg.selectAll(".link")
        .data(links).enter()
        .append("line")
        .attr("class", "link")
        .style("stroke", "rgb(28, 80, 99)")

    const nodeSvg = svg.selectAll(".node")
        .data(nodes)
        .enter().append("g")
        .style("cursor", "pointer")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended))

    nodeSvg.append("circle")
        .attr("id", (d, i) => { return "circle-"+i })
        .attr("r", 6)
        .style("fill", (d) => { return colors[d.data.type] })
        .style("stroke", "none")

    nodeSvg.append("rect")
        .attr("id", (d, i) => { return "rect-"+i })
        .attr("height", 30)
        .style("fill", "white")
        .style("stroke-width", "3px")

    nodeSvg.append("text")
        .attr("width", "0")
        .attr("id", (d, i) => { return "text-"+i })
        .text((d) => {
          if(d.data.type === "role"){return null}
          return d.data.name
        })
        .style("font-size", "16px")
        .style("font-family", 'Josefin Sans')

    simulation.nodes(nodes)
    simulation.force("link").links(links)

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    }

    function dragged(d) {
      d.fx = d3.event.x
      d.fy = d3.event.y
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0)
      d.fx = null
      d.fy = null
    }

    function tick() {
      if(location.hash !== '#/skills') return

      svg.selectAll("text")
          .attr("dy", 5)
          .attr("x", (d) => {
            if(d.data.type === "group"){return 0}
            return (d.x > (width/2)) ? 10 : -10
          })
          .style("text-anchor", (d) => {
            if(d.data.type === "group"){return "middle"}
            return ((d.x > (width/2)) ? "start" : "end")
          })

      svg.selectAll("rect")
          .attr("x", (d, i) => {
            var bbox = document.getElementById("text-"+i).getBBox()
            if(d.data.type === "group"){return (d.x > (width/2)) ? (0 - ((bbox.width/2) + 10)) : -(((bbox.width/2) + 10))}
            return (d.x > (width/2)) ? 0 : -((bbox.width + 20))
          })
          .attr("y", -15)
          .attr("width", (d, i) => {
            if(d.data.type === "role"){return null}
            var bbox = document.getElementById("text-"+i).getBBox()
            return (bbox.width + 20)
          })
          .style("stroke", (d, i) => {
            const colorObj = colors[d.data.type]
            if(d.data.type === "skill"){
              return colorObj[i % colorObj.length]
            }
            return colorObj
          })

      linkSvg
          .attr("x1", (d) => { return d.source.x})
          .attr("y1", (d) => { return d.source.y})
          .attr("x2", (d) => { return d.target.x})
          .attr("y2", (d) => { return d.target.y})

      nodeSvg
          .attr("transform", (d) => {
            d.x = Math.max(36, Math.min(width - 36, d.x))
            d.y = Math.max(16, Math.min(height - 16, d.y))
            return "translate(" + d.x + ", " + d.y + ")"
          })
    }
  }

  render(){
    return <div className="force-diagram" id="force" ref="container">
      <H3>Skills</H3>
      <svg id="force-diagram"></svg>
    </div>
  }
}
