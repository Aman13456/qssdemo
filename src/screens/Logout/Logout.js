import React from 'react';
import AuthContext from '../Root/AuthContext';
import {ActivityIndicator} from '../../components';

class Logout extends React.Component {
  static contextType = AuthContext;
  componentDidMount = () => {
    this.context.logout();
  };

  render() {
    return <ActivityIndicator />;
  }
}

export default Logout;
