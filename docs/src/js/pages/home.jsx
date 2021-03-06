"use strict"

import React from 'react'
const {Icon} = global.uiRequire()

export default class Home extends React.Component {
  static displayName = 'Home'

  render () {
    return (
      <div>
        <div className="hero">
          <div className="hero-title">
            <h1>React UI</h1>
            <h2>React组件库，样式基于yahoo的<a target="_blank" href="http://purecss.io/">purecss</a> / <a target="_blank" href="http://pure-site.ap01.aws.af.cm/">中文版</a>。</h2>
            <div style={{marginTop: 40}}>
              <a style={{marginRight: 20}} href="#/build" className="rct-button button-large button-extend rct-button-success">生成组件</a>
              <a target="_blank" className="rct-button button-large button-extend" href="https://github.com/Lobos/react-ui"><Icon icon="github" /> Github</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
