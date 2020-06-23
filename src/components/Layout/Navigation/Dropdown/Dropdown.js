import React from "react";
import "./Dropdown.css";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";

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
      <div
        className='dropdown'
        style={{ width: "200px" }}
        onMouseEnter={this.showDropdownMenu}
      >
        <div className='button'>
          <NavigationItem link='/' active>
            Algorithms
          </NavigationItem>
        </div>

        {this.state.displayMenu ? (
          <ul onMouseLeave={this.hideDropdownMenu} className='drop-component'>
            <li>
              <a href='#Dijkstra'>Dijkstra</a>
            </li>
            <li>
              <a href='#Sorting'>Sorting</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
