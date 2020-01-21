import React, { Component } from 'react';
import SideBar from './SideBar';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'



class Content extends Component {
    render() {
        return (
            <>
                <nav className='navbar navbar-gray sticky-top bg-dark flex-md-nowrap p-0'>
                    <h2>Practices</h2>
                </nav>
                <div className='container'>
                        <div className='row'>
                            <div>
                                <SideBar />
                            </div>
                        </div>
                    </div>
                
            </>
                );
            }
        }
        
export default Content;