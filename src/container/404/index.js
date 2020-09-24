import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';
class error extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.error}>
                Không Tìm Thấy Trang Web
            </div>
        );
    }
}

error.propTypes = {

};

export default withStyles(styles)(error);