import React from 'react';
import * as Interface from 'interfaces';

const Spacer = ({ block }: Interface.SpacerProps) => {
  if (block < 0 || block > 8) throw Error('Spacer block must be between 1-8');

  return <div className={`spacer spacer-${block}`}></div>;
};

export default Spacer;
