import React, { Component, PropTypes } from 'react';

/*** styling ***/
import style from './style';



export default class CamperList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.generateRows = this.generateRows.bind(this);
    }

    componentDidUpdate() {
        console.log(this.props);

    }


    generateRows() {
        return this.props.camperData.map((camper, index) => {
            return (
                <tr>
                    <td>{++index}</td>
                    <td>{camper.get('username')}</td>
                    <td>{camper.get('alltime')}</td>
                    <td>{camper.get('recent')}</td>
                </tr>
            );
        });
    }

    orderNames() {
        console.log('this should be an action to reorder the store state');
    }

    render() {
        const { actions } = this.props;
        return (
            <div className={style.wrapper}>
                <table className={style.leaderBoard}>
                     <caption className={style.tableHeading}>
                        Free Code Camp's Leaderboard
                    </caption>
                    <thead>
                        <tr>
                            <th >
                            Rank
                            </th>
                            <th
                                className={style.dataTitle}
                                onClick={this.orderNames.bind(this)}>
                            Camper
                            </th>
                            <th
                                className={style.dataTitle}
                                onClick={actions.orderAlltime}>
                            Alltime - Browniepoints
                            </th>
                            <th
                                className={style.dataTitle}
                                onClick={this.orderNames.bind(this)}>
                            Last 30 days - Browniepoints
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.generateRows()}
                    </tbody>
                </table>

            </div>
        );
    }
}

