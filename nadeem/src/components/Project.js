import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='col-6' data-attr={this.props.projectitem.mapLink}>
            <div className='card animated fadeInUp'>
                <figcaption>
                  <h2>{this.props.projectitem.title}</h2>
                  <span className='category'>{this.props.projectitem.category}</span>
                </figcaption>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
