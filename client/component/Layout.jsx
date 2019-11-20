import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    console.time('sleep')
    await this.sleep(10)
    console.timeEnd('sleep')
  }
  sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000))
  }
  render() {
    return (
      <div>
        <p>Hello React SSR {this.props.title} </p>
        <Link to="/page1">Page1 </Link>
        <Link to="/page2">Page2 </Link>
        {this.props.children}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    title: state.title,
  }
}

export default connect(mapStateToProps)(Layout)
