import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';
class Baohiemchinhsach extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.Baohiemchinhsach}>
                Baohiemchinhsach
            </div>
        );
    }
}

Baohiemchinhsach.propTypes = {

};

export default withStyles(styles)(Baohiemchinhsach);