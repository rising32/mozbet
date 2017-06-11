import React, {Component} from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Button from 'grommet/components/Button';

import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import CloseIcon from 'grommet/components/icons/base/Close';
import Box from 'grommet/components/Box';

import LoginForm from './LoginForm';

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        isShowingModal: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClose(ev) {
    ev.preventDefault();
    console.log('---------');
    this.setState({isShowingModal: false});
  }
  handleClick(ev) {
    ev.preventDefault();
    console.log('---------', this.state);
    this.setState({isShowingModal: true});
  }

  render() {
    return (
      <Sidebar fixed={true} size='small' className="slidebar-content">
        <Button label='SIGN IN' className="signin-button" href='#' onClick={this.handleClick}/>
          {
            this.state.isShowingModal &&
            <ModalContainer onClose={this.handleClose} className='modal-container' >
              <ModalDialog className='modal-dialog' onClose={this.handleClose}>
                <Box align='end' className='modal-close-button'>
                  <CloseIcon onClick={this.handleClose} href='#' className="modal-icon" />
                </Box>
                <LoginForm />
              </ModalDialog>
            </ModalContainer>
          }
        <Button label='REGISTER' className="register-button" href='#' />
      </Sidebar>
    );
  }
}

export default SidebarContent;
