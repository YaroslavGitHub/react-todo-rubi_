import 'bootstrap/dist/css/bootstrap.min.css'
import React, {
  Component
} from 'react'
import TodoList from './TodoList'
import TodoItems from './TodoItems'


class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        completed: false,
      },

    }
    this.handleChange = this.handleChange.bind(this)

  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = {
      text: itemText,
      key: Date.now(),
      completed: false
    }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: '',
          completed: false
        },
      })
    }
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.currentItem.map(currentItem => {
        if (currentItem.id === id) {
          currentItem.completed = !currentItem.completed
        }
        return currentItem
      })
      return {
        currentItem: updatedTodos
      }
    })
  }



  render() {

    return ( 
      <div className="App container pad" >

      <
      TodoList addItem={
        this.addItem
      }
      inputElement={
        this.inputElement
      }
      handleInput={
        this.handleInput
      }
      currentItem={
        this.state.currentItem
      }
      handleChange={
        this.state.currentItem.completed
      }

      /> <
      TodoItems entries={
        this.state.items
      }
      deleteItem={
        this.deleteItem
      }
      /> <div className="rcorners1 pad" >

      </div> 
      </div>

    )
  }
}


export default App