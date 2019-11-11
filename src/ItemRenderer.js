import React, { PureComponent } from 'react';

export default class ItemRenderer extends PureComponent {
  render() {
    return (
      <div
        className="Row"
        style={{
          ...this.props.style,
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #ddd',
          padding: '0 0.5em',
        }}
      >
        Row {this.props.index}
      </div>
    );
  }
}
