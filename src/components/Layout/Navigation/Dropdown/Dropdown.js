import React from "react";
import "./Dropdown.css";
import classes from "../NavigationItems/NavigationItem/NavigationItem.module.css";
import { NavLink } from "react-router-dom";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("hover", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("hover", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <li
        className={classes.NavigationItem}
        onMouseEnter={this.showDropdownMenu}
        onMouseLeave={this.hideDropdownMenu}
      >
        <NavLink to='/algo' exact activeClassName={classes.active}>
          Algorithms
        </NavLink>
        {this.state.displayMenu ? (
          <ul className='drop-component'>
            <li className='box'>
              <NavLink to='/algo/pathfinding' exact>
                <h5 className='title-box'>Dijkstra</h5>
              </NavLink>
            </li>
            <li className='box'>
              <NavLink to='/algo/sorting' exact>
                <h5 className='title-box'>Sorting</h5>
              </NavLink>
            </li>
          </ul>
        ) : null}
      </li>
    );
  }
}

export default Dropdown;
