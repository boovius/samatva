import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class Authenticater extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        console.log('not authenticated');
        this.context.router.push('login')
      }
    }

    render() {
      return <ComposedComponent />;
    }

  }

  Authenticater.contextTypes = {
    router: PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    }
  }

  function mapDispatchToProps() {
    return {}
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authenticater);
}
