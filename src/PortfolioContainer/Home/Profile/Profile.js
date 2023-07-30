import React from 'react';
import Typical from 'react-typical';
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService';

function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                             <a href='https://www.linkedin.com/in/ganta-karthik-kumar'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href='https://www.instagram.com/_karthikk_14/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://github.com/ganta-karthik'>
                            <i className='fa fa-github'></i>
                        </a>
                        </div>
                    </div>


                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>G.Karthik Kumar</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                    <span className='primary-text'>
                            {" "}
                            <h1>
                            {" "}
                            <Typical
                            steps = {[
                                "Frontend Dev😎",1000,
                                "Backend Dev🌐",1000,
                                "Fullstack💻",1000,
                                "Data Analytics📊",1000,
                            ]}
                            loop={Infinity}
                            />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building application or website with back end operations.
                            </span>
                        </span> 
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'
                         onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            Hire me{" "}
                        </button>
                        <a href ='GANTA KARTHIK KUMAR.pdf' download='GANTA KARTHIK KUMAR.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;