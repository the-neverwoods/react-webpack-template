'use strict';

import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

const IndexPage = () => {
  return (<div></div>);
};

if (process.env.NODE_ENV !== `production`) {
  IndexPage.propTypes = {

  };
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(IndexPage);
