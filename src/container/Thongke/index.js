import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';
class Thongke extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.Thongke}>
                Thongke
            </div>
        );
    }
}

Thongke.propTypes = {

};

export default withStyles(styles)(Thongke);