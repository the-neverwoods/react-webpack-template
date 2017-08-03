'use strict';

import React from 'react';
import { connect } from 'react-redux';

const IndexPage = () => {
  return (<div></div>);
};

if (process.env.NODE_ENV !== `production`) {
  IndexPage.propTypes = {

  };
}

const mapStateToProps = (/* state */) => ({

});

export default connect(mapStateToProps)(IndexPage);
