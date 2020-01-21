import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class HeaderSite extends Component {
    render() {
        return (
            <>
                <Helmet>
                        <title>{this.props.title}</title>
                        {/* <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
                        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
                        <link href="css/sb-admin-2.min.css" rel="stylesheet"></link> */}
                </Helmet>   
            </>
                        );
                    }
                }
                                                    
export default HeaderSite;