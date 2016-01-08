import React, { Component, PropTypes } from 'react';


import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';



/*** styling ***/
import style from './style';



export default class CamperList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.generateRows = this.generateRows.bind(this);
        this.state = {
            fixedHeader: true,
            stripedRows: true,
            showRowHover: false,
            selectable: false,
            height: '70vh'
        };
    }

    componentDidUpdate() {
        console.log(this.props);

    }

    generateRows() {
        return this.props.camperData.map((camper, index) => {
            return (
                <TableRow>
                    <TableRowColumn>{++index}</TableRowColumn>
                    <TableRowColumn>{camper.get('username')}</TableRowColumn>
                    <TableRowColumn>{camper.get('alltime')}</TableRowColumn>
                    <TableRowColumn>{camper.get('recent')}</TableRowColumn>
                </TableRow>
            );
        });
    }

    render() {
        return (
            <div >
                <Table
                  height={this.state.height}
                  fixedHeader={this.state.fixedHeader}
                  selectable={this.state.selectable}
                  onRowSelection={this._onRowSelection}>

                  <TableHeader enableSelectAll={this.state.enableSelectAll}>
                    <TableRow>
                      <TableHeaderColumn colSpan="4" tooltip="Free Code Camp's Camper Leaderboard" style={{textAlign: 'center'}}>
                        Free Code Camp Leaderboard - alltime/recent
                      </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                      <TableHeaderColumn tooltip="Rank">Rank</TableHeaderColumn>
                      <TableHeaderColumn tooltip="Camper's Name">Camper Name</TableHeaderColumn>
                      <TableHeaderColumn tooltip="Alltime" >Alltime</TableHeaderColumn>
                      <TableHeaderColumn tooltip="Recent">
                      <button onClick={()=> console.log('button')} > recent </button>
                      </TableHeaderColumn>
                    </TableRow>
                  </TableHeader>

                  <TableBody
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}>
                    {this.generateRows()}
                   </TableBody>
                </Table>
            </div>
        );
    }
}

