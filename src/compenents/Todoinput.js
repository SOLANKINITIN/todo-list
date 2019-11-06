import React, { Component } from 'react';
export default class TodoInput extends Component {
    render() {
        const {item ,handleChange,handleSubmit,editItem} = this.props;
        return (
        <div className="card card-body my-3">
            <form  onSubmit={handleSubmit}>
                <div className="input-group">
                <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
               <i  className="fa fa-book"/>
                </div>
                </div>
                <input className="form-control text-capitalize"placeholder="add todo item"type="text"
                value={item}
                onChange={handleChange}
                />
                </div>
                <button type="submit" 
                className={
                    editItem ? 
                    "btn btn-block btn-success mt-3": "btn btn-block btn-primary mt-3"
                }
                >{editItem? 'edit item' : "add item"}</button>
            </form>
        </div>
        );

        
    }
}
// import React, { Component } from 'react';

// export default class Todoinput extends Component {
//     render() {
//        const {item,handleChange,handleSubmit,editItem} = this.props;
//         return (
//             <div className="card card-body my-4">
//               <form onSubmit={handleSubmit}>
//                  <div className="input-group">
//                      <div className="input-group-prepend">
//                        <div className="input-group-text bg-primary text-white">
//                          <i className="fas fa-book"></i>
//                        </div>
//                      </div>
//                      <input type="text" className="form-control" placeholder="Enter Todo" value={item} onChange={handleChange}></input>
//                  </div>
//                  <button type="submit" className={editItem  ? "btn btn-success  btn-block mt-3 text-capitalize" : "btn btn-primary btn-block mt-3 text-capitalize"}>{editItem ? 'Edit' :"ADD item"}</button>
//               </form>

//             </div>
//         )
//     }
// }