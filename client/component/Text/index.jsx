import { co } from 'co'
import React from 'react'
import './index.less'

const toPromise = fn => new Promise(resolve => resolve(fn()))
const inner = (dom, text) => toPromise(() => (dom.innerHTML = text))
const sleep = sec => new Promise(resolve => setTimeout(resolve, sec * 1000))

const text = '这是一段慢慢显示的文本'
const colorArr = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple']
const toggleName = ['hide', 'show']
let flag = false
export default class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = { colorClass: '', cursorClass: '', text: '' }
  }
  async showText() {
    const textArr = text.split('')
    const strArr = []
    while (textArr.length > 0) {
      strArr.push(textArr.shift())
      await sleep(Math.random() * 2)
      if (!this._isMounted) return
      this.setState({ text: strArr.join('') })
    }
    await this.showText()
  }

  async changeColor() {
    await sleep(1)
    if (!this._isMounted) return
    this.setState({ colorClass: colorArr[Math.floor(Math.random() * 7)] })
    await this.changeColor()
  }

  async showCursor() {
    await sleep(1)
    if (!this._isMounted) return
    this.setState({ cursorClass: flag ? toggleName[1] : toggleName[0] })
    flag = !flag
    await this.showCursor()
  }
  _isMounted = false
  componentDidMount() {
    this._isMounted = true
    this.showText()
    this.changeColor()
    this.showCursor()
  }
  componentWillUnmount() {
    this._isMounted = false
  }
  render() {
    return (
      <span className={`${this.state.colorClass} ${this.state.cursorClass}`}>
        {this.state.text}
      </span>
    )
  }
}
