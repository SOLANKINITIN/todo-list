import React, { Component } from "react";
import Todoitem from "./Todoitem";

export default class TodoList extends Component {
  render() {
    const {items,clearlist,handleDelete,handleEdit} =this.props;
    return (
    <ul className ="list-group my-5">
      <h3 className="text-capitalize text-center">
        todo input
    </h3>
    {
      items.map(item=> {
        return <Todoitem key={item.id} title={item.title}
        handleDelete={()=> handleDelete(item.id)}
        handleEdit={()=> handleEdit(item.id)} />

      })
    }
         <button onClick={clearlist}
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-4">
          Clear list
        </button>
    </ul>

    )
  }
}
