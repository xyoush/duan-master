import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';
class Quanlythuchi extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.Quanlythuchi}>
                Quanlythuchi
            </div>
        );
    }
}

Quanlythuchi.propTypes = {

};

export default withStyles(styles)(Quanlythuchi);