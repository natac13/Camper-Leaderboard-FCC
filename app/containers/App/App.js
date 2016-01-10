import React, { Component, PropTypes } from 'react';
import CamperList from '../../components/camperList/';

import request from '../../js/request';
import style from './style';
/*========================================
=            Redux connection            =
========================================*/

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


/*=====  End of Redux connection  ======*/


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
            <div className={style.wrapper}>
                <header>
                    <h1 className={style.author}>
                        Create By: Natac -> <a
                        href="https://github.com/natac13/Camper-Leaderboard-FCC"
                        className={style.code}
                        target="_blank"
                        title="View the code making this work!">
                        Source Code </a>
                    </h1>

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