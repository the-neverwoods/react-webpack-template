/* eslint-env node, mocha */
'use strict'; 

import React from 'react';
import { expect } from '../index.js';
import { mount } from 'enzyme';

import WithdrawTable from 'components/WithdrawTable.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TableBody, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { formatNum } from 'helpers/SiteHelper.js';

describe(`WithdrawTable Component (2 balances)`, () => {
  let component,
    balances = [
      {
        Name: `FooCoin`,
        AvailableBalance: 100.0000120031,
        NetFee: 0.00000001,
        TXFee: 0.10333,
        MinWithdraw: 1,
        Coin: `FOO`,
        IsBTS: false
      },
      {
        Name: `BarCoin`,
        AvailableBalance: 100.0000120031,
        NetFee: 0.1993,
        TXFee: 0.0000123,
        MinWithdraw: 2,
        Coin: `BAR`,
        IsBTS: false
      }
    ];

  beforeEach(() => {
    let props = {
      balances
    };

    component = mount(
      <MuiThemeProvider>
        <WithdrawTable { ...props } />
      </MuiThemeProvider>
    );
  });

  it(`should have 3 TableRows`, () => {
    expect(component).to.have.exactly(3).descendants(TableRow);
  });

  it(`should have 7 TableHeaderColumns`, () => {
    expect(component).to.have.exactly(7).descendants(TableHeaderColumn);
  });

  it(`should have 14 TableRowColumns`, () => {
    expect(component).to.have.exactly(14).descendants(TableRowColumn);
  });

  it(`should display the appropriate data for each row`, () => {
    for (let index = 0; index <= 1; index++) {
      expect(component.find(TableBody).childAt(index).find(TableRowColumn).everyWhere((column, i) => {
        let balance = balances[index];

        switch (i) {
        case 0:
          return expect(column.text()).to.equal(balance.Name);
        case 1:
          return expect(column.text()).to.equal(formatNum(balance.AvailableBalance, 8));
        case 2: 
          return expect(column.text()).to.equal(formatNum(balance.NetFee + balance.TXFee, 8));
        case 3:
          return expect(column.text()).to.equal(formatNum(balance.MinWithdraw, 8));
        default:
          return true;
        }
      })).to.equal(true);
    }
  });
});


describe(`WithdrawTable Component (no balances, isAsset)`, () => {
  let component;

  beforeEach(() => {
    component = mount(
      <MuiThemeProvider>
        <WithdrawTable isAsset={ true } />
      </MuiThemeProvider>
    );
  });

  it(`should have 2 TableRows`, () => {
    expect(component).to.have.exactly(2).descendants(TableRow);
  });

  it(`should have 8 TableHeaderColumns`, () => {
    expect(component).to.have.exactly(8).descendants(TableHeaderColumn);
  });

  it(`should have 1 TableRowColumns`, () => {
    expect(component).to.have.exactly(1).descendants(TableRowColumn);
  });

  it(`should contain a single paragraph`, () => {
    expect(component.find(TableBody).childAt(0).find(TableRowColumn)).to.have.exactly(1).descendants(`p`);
  });
});
