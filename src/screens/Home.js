import React, { useEffect, useState } from "react"
import AboutUs from "./AboutUs"
class Home extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
            todo: '',
            addTodoList: []
        }
    };

    
    render() {
        const handleClick = () => {
            if (this.state.todo && this.state.todo.trim() !== '')
            this.setState(state => {
                const indexData = state.addTodoList.filter( (item) => item.name === this.state.todo);
                if (!indexData.length) {
                    let tempData = {
                        name: state.todo,
                        status: false
                    
                    }
                    // @TODO - use this.setState to update this state, and also keep
                    // the other states as it is.
                    return {...state, addTodoList: [...state.addTodoList, { ...tempData }]}
                }
                return {...state}
            });
            this.setState({ todo: '' })
        }

        // TO KEEP IN MIND: always use relevant names of variables
        const handleChange = (item) => {
            this.setState({ todo: item })
        }

        const handleChangeStatus = (item) => { 
            item.status = !item.status
            
                this.setState({...this.state.addTodoList, ...item})
            
             
        }

        const handleRemove = (id) => {
            let copiedArray = [...this.state.addTodoList]
    

            copiedArray.splice(id,1)
            this.setState({addTodoList:copiedArray})
        }
        
        return (
            <div class="container">
                <div class="row">
                    <p>Todo List</p>
                    <input type="text" placeholder="write todo" value={this.state.todo} onChange={(item) => handleChange(item.target.value)} ></input>

                    <button
                        onClick={handleClick}
                    >click</button>
                
                    <div class="col-6">
                        {
                            this.state.addTodoList.map((item,id) => {
        
                                return (
                                    <div 
                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}
                                    >
                                            <p onClick={() => handleChangeStatus(item)} className={item.status ? 'strikeLine' : '' }>{item.name}</p>
                                            <span><button onClick={() => handleRemove(id)} style={{ fontSize: 12 }}>remove</button></span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* <AboutUs name="sakshi"/> */}
                </div>
            </div>
        )
    }
}
export default Home