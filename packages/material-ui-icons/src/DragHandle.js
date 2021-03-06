import React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <React.Fragment><defs><path id="a" d="M0 0h24v24H0V0z" /></defs><clipPath id="b"><use overflow="visible" xlinkHref="#a" /></clipPath><path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" clipPath="url(#b)" /></React.Fragment>
, 'DragHandle');
