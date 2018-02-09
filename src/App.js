import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
        <p>
          <Header as='h1' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>
              React + Semanti UI
            </Header.Content>
          </Header>
        </p>
      </div>
    );
  }
}

export default App;
