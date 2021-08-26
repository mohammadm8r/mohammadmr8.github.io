import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles'

// const useStyles = theme => ({
//     font: {
//     fontFamily: 'Shabnam',
//     },
// });

class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Hello Alumni!</p>
            </div>
        );
    }
}

export default Home;