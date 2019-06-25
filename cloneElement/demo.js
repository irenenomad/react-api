class Parent extends React.Component{
  constructor(){
    super();
    this.state = {
      count: 1
    };
  }
  getChildren(){
    const _this = this;
    let { children } = _this.props;
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        count: _this.state.count
      });
  });
  }
  handleClick(){
    this.setState({
      count: ++this.state.count
    });
  }
  render(){
    return (
      <div>
      <button onClick={ this.handleClick.bind(this) }>点击增加次数</button>
    { this.getChildren() }
  </div>
  )
  }
}
class Child extends React.Component{
  render(){
    return (
      <div>
      这是子组件：{ this.props.count }
  </div>
  )
  }
}
class Test extends React.Component{
  render(){
    return (
      <Parent>
      <Child />
      </Parent>
  )
  }
};
ReactDOM.render(
<Test/>,
  document.getElementById('root')
);
