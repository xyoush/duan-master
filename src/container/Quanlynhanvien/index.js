import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';
class Quanlynhanvien extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.Quanlynhanvien}>
                Quanlynhanvien
            </div>
        );
    }
}

Quanlynhanvien.propTypes = {

};

export default withStyles(styles)(Quanlynhanvien);