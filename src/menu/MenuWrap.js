import React from 'react';


export default class MenuWrap extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({hidden : true});
    setTimeout(() => {
    this.show();
    }, 20);
  }

  show() {
    this.setState({hidden : false});
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

