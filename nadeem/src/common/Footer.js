import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <React.Fragment>
        <footer className='footer'>
            <div className='container-min'>
                <div className='social-link-group d-flex justify-content-center align-items-center'>
                    <Link to ='/' target='_blank' className='social-link'>LinkedIn</Link>
                    <Link to ='/' target='_blank' className='social-link'>Email</Link>
                    <Link to ='/' target='_blank' className='social-link'>Behance</Link>
                    <span className='accelator-top'></span>
                </div>
            </div>
        </footer>
    </React.Fragment>
  )
}
