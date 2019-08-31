
import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    return (
      <div>
        <table>
       <tr>
      <td style={{width:295}}> <input type="checkbox"/></td>
      <td style={{width:1000}}>
        <input className="form-control" value={item.text}/>
       
      </td>
        <td style={{width:295}}>
        <button type="button" key={item.key} onClick={() => this.props.deleteItem(item.key)}>Delete</button>
        </td>
    </tr>
    </table>
      </div>
      
    )
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return (

<div className="bg-white pad marg text-white text-secondary ">

<td style={{width:1200}}> {listItems}</td>
  
   
    </div>
  )
  
  }
}

export default TodoItems