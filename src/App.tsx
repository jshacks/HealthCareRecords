import * as React from 'react';
import './App.css';


import {
  Table,
  Navbar,
  NavItem,
  Row,
  Col,
  Chip,
  Tag
} from 'react-materialize';

interface Prop {}

interface State {
}

const samples = [
  {
    Sodium: 135.7,
    Potassium: 3.5,
    Glucose: 54.3,
    Cholesterol: 35.5,
    Calcium: 2.4,
  },
  {
    Sodium: 145.2,
    Potassium: 5.2,
    Glucose: 96.7,
    Cholesterol: 6.3,
    Calcium: 2.9
  },
  {
    Sodium: 170.9,
    Potassium: 2.4,
    Glucose: 58.8,
    Cholesterol: 5.1,
    Calcium: 1.2
  },
  {
    Sodium: 140.4,
    Potassium: 5.3,
    Glucose: 105.7,
    Cholesterol: 6.2,
    Calcium: 2.3
  }
];

class App extends React.Component < Prop,
State > {

  constuctor() {

  }

  getTag() {
    let items = ["low", "normal", "high", "good"];
    return items[Math.floor(Math.random()*items.length)];
  }

  getTableHeader(data) {
    if (data.length == 0) {
      return
    }
    let headers : Array < JSX.Element > = [];
    for (let header of Object.keys(data[0])) {
      headers.push(
        <th>{header}</th>
      );
    }

    return headers;
  }

  getTableRows(data) {
    let tableRows : Array < JSX.Element > = [];
    for (let row of data) {
      let entries : Array < JSX.Element > = [];
      for (let index in row) {
        entries.push(
          <td>
            <Row>
              <Col s={12}>
                <Chip>
                  <img src='https://image.flaticon.com/icons/svg/150/150654.svg' />
                  {row[index]}
                </Chip>
                <Tag>{this.getTag()}</Tag>
              </Col>
            </Row>
            
          </td>
        );
      }

      tableRows.push(
        <tr>{entries}</tr>
      );
    }

    return tableRows;
  }

  render() {
    return (
      <div>
        <Navbar brand='Healthcare Records in Blockchain' right>
          <NavItem href='get-started.html'>Powered by Ethereum Blockchain</NavItem>
        </Navbar>

        <Table>
          <thead>
            <tr>
              {this.getTableHeader(samples)}
            </tr>
          </thead>

          <tbody>
            {this.getTableRows(samples)}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
