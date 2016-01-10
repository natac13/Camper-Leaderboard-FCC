import React, { Component, PropTypes } from 'react';

/*** styling ***/
import style from './style';



export default class CamperList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: 'allTime'
        };
        this.generateTableData = this.generateTableData.bind(this);
        this.orderList    = this.orderList.bind(this);
    }

    componentDidUpdate() {

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
                <tr key={index} className={style.userRow}>
                    <td className={style.rank}>{++index}</td>
                    <td className={style.username}>
                        <img
                            src={camper.get('img')}
                            className={style.avatar} />
                            {camper.get('username')}
                    </td>
                    <td className={style.points}>{camper.get('alltime')}</td>
                    <td className={style.points}>{camper.get('recent')}</td>
                </tr>
            );
        });
    }

    orderList(period) {
        const { actions } = this.props;
        this.setState({
            list: period
        });
        // period need to be capitalized
        period == 'recent' ? actions.orderRecent() : actions.orderAllTime();

    }

    render() {
        const { camperData } = this.props;
        const allTimeIcon = camperData.get('allTimeOrder') =='descending' ?
            <i className="fa fa-sort-desc" /> :
            <i className="fa fa-sort-asc" />;
        const recentIcon = camperData.get('recentOrder') == 'descending' ?
            <i className="fa fa-sort-desc" /> :
            <i className="fa fa-sort-asc" />;
        return (
            <div className={style.wrapper}>
                <table className={style.leaderBoard}>
                     <caption className={style.tableHeading}>
                        Free Code Camp's Leaderboard
                    </caption>
                    <thead>
                        <tr>
                            <th
                                className={style.dataTitle}>
                                Rank
                            </th>
                            <th
                                className={style.dataTitle}>
                                Camper
                            </th>
                            <th
                                className={style.dataTitle}
                                onClick={() => this.orderList('allTime')}>
                                Points - Alltime {allTimeIcon}
                            </th>
                            <th
                                className={style.dataTitle}
                                onClick={() => this.orderList('recent')}>
                                Points - Last 30 days {recentIcon}
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

