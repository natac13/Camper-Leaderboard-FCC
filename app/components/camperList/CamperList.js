import React, { Component, PropTypes } from 'react';

/*** styling ***/
import style from './style';



export default class CamperList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: 'allTime'
        };
        console.log(this.props);
        this.generateTableData = this.generateTableData.bind(this);
        this.orderList    = this.orderList.bind(this);
    }

    componentDidUpdate() {
        console.log(this.props);

    }

    /**
     * Will generate the data for the table, determined by the period param
     * which is either 'allTime', or 'recent'
     * @param  {Strine} period
     * @return {JSX}
     */
    generateTableData(period) {
        return this.props.camperData.getIn(['camperList', period]).map((camper, index) => {
            return (
                <tr key={index}>
                    <td>{++index}</td>
                    <td>{camper.get('username')}</td>
                    <td>{camper.get('alltime')}</td>
                    <td>{camper.get('recent')}</td>
                </tr>
            );
        });
    }

    orderList(period) {
        const { actions } = this.props;
        console.log(actions);
        this.setState({
            list: period
        });
        // period need to be capitalized
        period == 'recent' ? actions.orderRecent() : actions.orderAllTime();

    }

    render() {
        return (
            <div className={style.wrapper}>
                <table className={style.leaderBoard}>
                     <caption className={style.tableHeading}>
                        Free Code Camp's Leaderboard
                    </caption>
                    <thead>
                        <tr>
                            <th>
                                Rank
                            </th>
                            <th
                                className={style.dataTitle}>
                                Camper
                            </th>
                            <th
                                className={style.dataTitle}
                                onClick={() => this.orderList('allTime')}>
                                Alltime - Browniepoints
                            </th>
                            <th
                                className={style.dataTitle}
                                onClick={() => this.orderList('recent')}>
                                Last 30 days - Browniepoints
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.list == 'recent' ? this.generateTableData('recent') : this.generateTableData('allTime')}
                    </tbody>
                </table>

            </div>
        );
    }
}

