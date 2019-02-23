import React from 'react';

export default function Tab(props) {
  return (
    <div
      className={'tab' + (props.isActive ? ' tab--active' : '')}
      onClick={props.handleClick}
    >
      {props.title[0].toUpperCase() + props.title.slice(1)}
    </div>
  );
}
