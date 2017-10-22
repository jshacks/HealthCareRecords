import * as React from 'react';
import './App.css';
import {Table, Navbar, NavItem} from 'react-materialize';


interface Prop {

}

interface State {

}


class App extends React.Component<Prop, State> {
  
  render() {
    return (
      <div>
        <Navbar brand='Healthcare Records in Blockchain' right>
          <NavItem href='get-started.html'>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>

       <Table>
        <thead>
          <tr>
            <th data-field="id">Sodium</th>
            <th data-field="name">Potasium</th>
            <th data-field="price">Investigation</th>
            <th>Glucose</th>
            <th>Creatinine</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}

export default App;
