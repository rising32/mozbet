import React, {Component} from 'react';
import Box from 'grommet/components/Box';
import Sidebar from 'react-sidebar';
import SidebarContent from '../containers/SidebarContent';
import MenuIcon from 'grommet/components/icons/base/Menu';
import Button from 'grommet/components/Button';
import '../scss/index.scss';

class Main extends Component {


  constructor(props) {
    super(props);
    
    this.state = {
        docked: false,
        open: false,
        transitions: true,
        touch: true,
        shadow: false,
        pullRight: true,
        touchHandleWidth: 20,
        dragToggleDistance: 30
    };
    this.onSetOpen = this.onSetOpen.bind(this);
    this.tabLinkClicked = this.tabLinkClicked.bind(this);
  }

  onSetOpen(open) {
    console.log('test---------', open);
    this.setState({open: open});
  }

  tabLinkClicked() {
    this.setState({docked: !this.state.docked })
  }
  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
   
    var _sidebarContent = <SidebarContent />;

    const sidebarProps1 = {
      sidebar: _sidebarContent,
      docked: this.state.docked,
      sidebarClassName: 'custom-sidebar-class',
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: true,
      onSetOpen: this.onSetOpen
    };

    return (
      <Sidebar {...sidebarProps1} size='large'>
          <Box direction='row' className="header">
            <Button icon={<MenuIcon className="menu-icon" />} onClick={this.tabLinkClicked} />
            <Button icon={<MenuIcon className="menu-icon" />} onClick={this.tabLinkClicked} />
          </Box>
          <Box className="content"></Box>
     </Sidebar>
    );
  }
}


export default Main;
