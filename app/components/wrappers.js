/*
  wrapper.js
  @flow

  This component wraps the other components, forming
  the title bar, top menu, content container, and
  footer.
*/

var React = require('react');

var Titlebar = require('./titlebar');
var Footer = require('./footer');

class Wrapper extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Titlebar />
        <div style={styles.content}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

class FullScreenWrapper extends React.Component {
  render() {
    return (
      <div style={styles.fullscreenContainer}>
        <Titlebar />
        <div style={styles.fullscreenContent}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    height: 60
  },
  fullscreenContainer: {
    display: 'flex',
    position: 'absolute',
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    minHeight: 300
  },
  fullscreenContent: {
    flex: 1,
    display: 'flex'
  }
};

module.exports = {
  Wrapper,
  FullScreenWrapper
};