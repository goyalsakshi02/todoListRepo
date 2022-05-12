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

                if (indexData.length == 0) {
                    let tempData = {
                        name: state.todo,
                        status: false
                    
                    }
                    state.addTodoList.push(tempData);

                
                }
            });
            this.setState({ todo: '' })
        }
        const handleChange = (i) => {
            this.setState({ todo: i })
        }

        const handleChangeStatus = (item) => { 
            item.status = !item.status
            
                this.setState({...this.state.addTodoList, ...item})
            
             
        }

        const handleRemove = (id) => {
            let copiedArray = [...this.state.addTodoList]
            console.log("copiedArray", copiedArray)
            console.log("item", id)

            copiedArray.splice(id,1)
            this.setState({addTodoList:copiedArray})
        }
        
        return (
            <div class="container">
                <div class="row">
                    <p>Todo List</p>
                    <input type="text" placeholder="write todo" value={this.state.todo} onChange={(i) => handleChange(i.target.value)} ></input>

                    <button
                        onClick={handleClick}
                    >click</button>
                
                    <div class="col-6">
                        {
                            this.state.addTodoList.map((i,id) => {
                                console.log("i", i)
                                return (
                                    <div 
                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}
                                    >
                                        {console.log("i.status",i.status)}
                                            <p onClick={() => handleChangeStatus(i)} className={i.status ? 'strikeLine' : '' }>{i.name}</p>
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