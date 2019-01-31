import React, { Component } from 'react';
import ProjectListTmpl from '../components/ProjectListTmpl';

class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectItem: [
                {
                    title: 'Cleartrip',
                    category: 'Website',
                    mapLink: 'website'
                },
                {
                    title: 'Facebook',
                    category: 'Website',
                    mapLink: 'website'
                },
                {
                    title: 'Google',
                    category: 'Mobile App',
                    mapLink: 'mobile-apps'
                },
                {
                    title: 'Amazon',
                    category: 'Digital Product',
                    mapLink: 'digi-products'
                }
            ]
        }
    }

    onClickTab() {

    }
    render() {
        const {projectItem} = this.state;
        return(
            <ProjectListTmpl projectItem = {projectItem} />
        )
    }
}

export default Listing;
