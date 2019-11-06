import React, { Component } from "react";
import Todoinput from "./compenents/Todoinput";
import TodoList from "./compenents/TodoList";


//Bootstrap Imports Here
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  clearlist = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filteredItems });
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    console.log(selectedItem);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>

            <Todoinput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearlist={this.clearlist}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
// import React, { Component } from 'react';
// import Todoinput from "./compenents/Todoinput"; 
// import TodoList from "./compenents/TodoList"; 

// import"bootstrap/dist/css/bootstrap.min.css";
// import uuid from "uuid";


// class App extends Component {
//   state = {
//     items:[],
//     id:uuid(),
//     item:"",
//     editItem:false
//   }
//   handleChange = e =>{
//     this.setState({
//       item: e.target.value
//     });
//   };
//   handleSubmit = e =>{
//     e.preventDefault();

// const newItem ={
//   id:this.state.id,
//   title:this.state.item
// };
// const updatedItems =[...this.state.items,newItem];
// this.setState({
//   items:updatedItems,
//   item:"",
//   id: uuid(),
//   editItem: false
// });
//  };
//   clearList  = ()=>{
//     this.setState({
//       items:[]
//     })
//   }
//   handleDelete =(id) =>{
//     const filteredItems =this.state.items.filter(item =>
//       item.id!==id)
//       this.setState({
//         items: filteredItems
//       });
// };
//   handleEdit = id =>{
//     const filteredItems =this.state.items.filter(item => item.id !==id)
//       const selectedItem = this.state.items.find(item => item.id === id);
//       this.setState({
//         items: filteredItems,
//         item: selectedItem.title,
//         editItem :  true,
//         id:id
//       });
//   };
//   render(){
//   return (
  
//       <div className="container">
//         <div className="row">
//         <div className="col-10 mx-auto col-md-8 mt4">
//           <h3>Todo Input</h3>
//           <Todoinput
//           item={this.state.item}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//           editItem={this.editItem}

//           />
//       <TodoList 
//        items={this.state.item} clearList={this.clearList}
//        handleDelete={this.handleDelete}
//        handleEdit={this.handleEdit}
//         />
//         </div>
//         </div>
//       </div>

  
//   );
// }
// }

// export default App;