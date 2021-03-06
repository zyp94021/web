import React from 'react'
import './style.less'
import { connect } from 'react-redux'
import Text from './Text'
class Page1 extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    console.time('sleep3')
    await this.sleep(5)
    console.timeEnd('sleep3')
  }
  sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000))
  }
  render() {
    return (
      <div className="page1">
        page1
        <br />
        <span className="red">{this.props.message}</span>
        <br />
        <Text />
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
