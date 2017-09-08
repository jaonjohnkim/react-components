// var Milk = () => (
//   <li>Milk</li>
// );

// var Bread = () => (
//   <li>Bread</li>
// );

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//     <li>{props.items[2]}</li>
//   </ul>
// )

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    this.setState({
      hover: true
    });
  }

  onListItemLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
    
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onListItemHover.bind(this)} onMouseOut={this.onListItemLeave.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <div>
    <ul>
      {props.items.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  </div>
)

ReactDOM.render(<GroceryList items={['Milk', 'Bread']}/>, document.getElementById('app'));