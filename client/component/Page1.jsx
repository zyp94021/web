import React from 'react'
import './style.less'
import { connect } from 'react-redux'
class Page1 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="red">
        page1 <span>{this.props.message}</span>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    message: state.data.message,
  }
}

export default connect(mapStateToProps)(Page1)
