import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';
class Quanlyduan extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.Quanlyduan}>
                Quanlyduan
            </div>
        );
    }
}

Quanlyduan.propTypes = {

};

export default withStyles(styles)(Quanlyduan);