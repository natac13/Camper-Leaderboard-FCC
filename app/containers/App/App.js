import React, { Component, PropTypes } from 'react';
import CamperList from '../../components/camperList/';

import request from '../../js/request';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions/';

function mapStateToProps(state) {
    const { camperData, theme } = state;
    return {
        camperData,
        theme
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ActionCreators, dispatch),
        dispatch
    };
}

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.actions.createListAllTime(request('alltime'));
    }

    componentDidMount() {
        this.props.actions.createListRecent(request('recent'));
    }

    render() {
        return (
            <div>
                <header>
                    <h1> Top Camper Chart </h1>
                    <h3> By Natac </h3>
                </header>
                <CamperList {...this.props} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);