import React, {Component} from 'react'
import { Link } from "react-router-dom";
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggleMenuFn = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
  const {isOpen} = this.state;
  let openClass = (isOpen ? 'header open': 'header');
  return (
    <header className={openClass}>
      <div className="container">
        <div className='d-flex justify-content-between align-items-center'>
          <Link to='/' className="navbar-brand">
            <strong><span className='rotate'>V</span>.N</strong>
          </Link>
          <div className="toggle-menu">
            <div className='wrapper-menu' onClick={this.toggleMenuFn.bind(this)}>
              <div className="line-menu half start"></div>
              <div className="line-menu"></div>
              <div className="line-menu half end"></div>
            </div>
          </div>
        </div>
      </div>
      <div className='menu-overlay'>
        <nav>
         <Link to='/'>about</Link>
         <Link to='/'>contact</Link>
         <Link to='/'>resume</Link>
        </nav>
      </div>
    </header>
  )
  }
}
export default Header