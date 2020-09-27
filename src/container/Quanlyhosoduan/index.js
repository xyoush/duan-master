import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';
class Quanlyhosoduan extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.Quanlyhosoduan}>
                Quanlyhosoduan
            </div>
        );
    }
}

Quanlyhosoduan.propTypes = {

};

export default withStyles(styles)(Quanlyhosoduan);