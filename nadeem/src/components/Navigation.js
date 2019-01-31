import React from 'react'
import './Navigation.css';

const Navigation = ({navigations}) => {
  return (
    <React.Fragment>
      <nav className='nav-fliter'>
            <ul>
                {navigations.map((item, index) => <li key={ index } maplink={item.mapLink}>{item.name}<span>{item.count}</span></li>)}
            </ul>
        </nav>
    </React.Fragment>
  )
}

export default Navigation;

// functionFilter = () => {
//     this.setState({
//         isActive: true
//     })
// }
// const { navItems, projectItem } = this.state;
// let activeClass = (this.state.isActive ? 'active': '');