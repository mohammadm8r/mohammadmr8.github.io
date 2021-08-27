import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Global Components/header";

class Home extends React.Component {
    render() {
        return (
            <div>
                <CssBaseline />
                <Header />
                <div>
                    <p>Hello Alumni!</p>
                </div>
            </div>
            
        );
    }
}

export default Home;