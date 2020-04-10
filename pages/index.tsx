import React from 'react';
import Layout from '../components/AnimeLayout';
import AnimeCollection from '../components/AnimeCollection';

import 'rbxhotfix/index.css';
import './index.css';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <AnimeCollection />
      </Layout>
    );
  }
}

export default Home;
