import React from 'react';
import PropTypes from 'prop-types';

const AnotherLayout = ({ children }) => {
  return (
    <div>
      <div></div>
    </div>
  );
};

AnotherLayout.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default AnotherLayout;
