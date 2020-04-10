import React from 'react';
import Heading1 from './style';

function Title({reverse, children}) {
    return (
        <Heading1 reverse={reverse}>{children}</Heading1>
    );
  }

export default Title;