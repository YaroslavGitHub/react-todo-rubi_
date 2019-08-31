import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="container pad">
      
      <p className="text-center b"><strong>SIMPLE TODO LISTS</strong></p>
      <p className="text-center c">
        FROM RUBI GARAGE
      </p>
      <div className="lead text-white text-left bg-primary pad1" ><span className="far fa-calendar-alt marg" style={{fontSize:30, color:'red'}}
            ></span> Complete
          the task for Rubi Garage
          
      
          <div className="lead pad1 colorGray marg">
          <form className="marg" onSubmit={this.props.addItem}>
            <input className="col-sm-10 control-label marg pad" id="InputTask"
              placeholder="start typing here to create task ..."
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit" className="btn btn-default text-white bg-info marg"> Add Task </button>
          </form>
          </div>
          </div>
        </div>

    
    )
  }
}

export default TodoList