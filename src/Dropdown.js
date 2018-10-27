import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./index.css";

class Dropdown extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <a
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          id="dropdownButton"
        >
          <i className="fas fa-bars"></i>
        </a>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}><a href="/About" id="dropdownLinks">About</a></MenuItem>
            <MenuItem onClick={this.handleClose}><a href="/Speaker" id="dropdownLinks">Our Speaker</a></MenuItem>
              <MenuItem onClick={this.handleClose}><a href="/Workshops" id="dropdownLinks">Workshops</a></MenuItem>
                <MenuItem onClick={this.handleClose}><a href="/Register" id="dropdownLinks">Register</a></MenuItem>
                  <MenuItem onClick={this.handleClose}><a href="/Shirt" id="dropdownLinks">T-Shirt Design</a></MenuItem>
                    <MenuItem onClick={this.handleClose}><a href="/Contact" id="dropdownLinks">Contact</a></MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Dropdown;
