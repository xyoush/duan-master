import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';
class Quanlykhachhang extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.Quanlykhachhang}>
               Quanlykhachhang
            </div>
        );
    }
}

Quanlykhachhang.propTypes = {

};

export default withStyles(styles)(Quanlykhachhang);