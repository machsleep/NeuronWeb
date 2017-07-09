import { push as Menu } from 'react-burger-menu'
import React from 'react';
import MenuWrap from './MenuWrap'
import './styles/Menu.css'

export default class ScaledMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render () {
    return (
      <MenuWrap>
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
          <a key="0" href="/about" className="menu-item"><i className="fa fa-fw fa-info-circle"/><span>About</span></a>
          <a key="1" href="/white-paper" className="menu-item"><i className="fa fa-fw fa-newspaper-o" /><span>White Paper</span></a>
          <a key="2" href="/getting-started" className="menu-item"><i className="fa fa-fw fa-bar-chart-o" /><span>Getting Started</span></a>
        </Menu>
      </MenuWrap>
    );
  }
}
