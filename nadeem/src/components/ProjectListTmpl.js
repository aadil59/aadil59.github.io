import React from 'react';
import Project from './Project';
import './ProjectList.css';
import Navigation from './Navigation';

const  ProjectListTmpl =  (props) => {
    const {projectItem} = props;
    const navItems= [
        {
            name: 'All',
            mapLink: 'all',
            count: '7',
            isActive: true
        },
        {
            name: 'Digital Products',
            mapLink: 'digi-products',
            count: '3',
            isActive: false
        },
        {
            name: 'Mobile Applications',
            mapLink: 'mobile-apps',
            count: '2',
            isActive: false
        },
        {
            name: 'Websites',
            mapLink: 'websites',
            count: '2',
            isActive: false
        }
        
    ]
    
    return (
      <section className='project-list'>
        <div className="container-min">
        <Navigation navigations = {navItems} />
            <div className='projectList-wrapper'>
                    <div className='row'>
                        {projectItem.map((projectitem, index) => <Project key = {index} projectitem={projectitem}/>)}
                    </div>
                </div>
            </div>
      </section>
    )
}

export default ProjectListTmpl;
