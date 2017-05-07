import React from 'react';
import { connect } from 'react-redux';
import { addActivity } from '../../actions';

export class ActivityAdder extends React.Component {
  constructor() {
    super()
    this.state = {text: ''};
    this._updateText = this._updateText.bind(this);
    this._submit = this._submit.bind(this);
  }

  _updateText(e) {
    this.setState({text: e.target.value});
  }

  _submit(e) {
    e.preventDefault();
    if (this.state.text === '') return;
    this.props.send(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return(
      <div className='composition'>
        <form onSubmit={this._submit}>
          <input
            type='text'
            onChange={this._updateText}
            value={this.state.text}
          />
          <input type='submit' value='send'/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    send: (text) => { dispatch(addActivity(text)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityAdder);
