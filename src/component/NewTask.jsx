import React, { Component } from 'react';
import HeaderSite from './HeaderSite';


class NewTask extends Component {
    state = {
        arrList: [],
        task: '',
        developer: ''
    }
    changeTitle = (event) => {
        console.log(event.target.value);
        this.setState({ task: event.target.value })
    }
    changDeveloper = (event) => {
        console.log(event.target.value);
        this.setState({ developer: event.target.value })
    }
    save = () => {
        let newList = {
            task: this.state.task,
            developer: this.state.developer
        }
        this.setState({
            arrList: this.state.arrList.concat(newList),
            task: '',
            developer: ''
        })
        document.getElementsByName("task")[0].focus();
    }
    remove = (index) => {
        if (window.confirm('are you sure remove item ?')) {
            let temp = this.state.arrList;
            temp.splice(index, 1);
            this.setState({
                arrList: temp
            })
        }
    }
    done = (index) => {
        document.getElementsByClassName("col-md-3 p-2 mb-3 border")[index].setAttribute('style', 'background-color:#81cc92')
        console.log(index)
    }

    render() {
        return (
            <div className='container'>
                <HeaderSite title='Add New Task' />
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group mt-3'>
                            <label>Task : </label>
                            <input type='text' className='form-control' name='task' onChange={this.changeTitle} />
                        </div>
                        <div className='form-group'>
                            <label>Developer : </label>
                            <select onChange={this.changDeveloper}>
                                <option>select developer</option>
                                <option>Ahmadi</option>
                                <option>Rezaei</option>
                                <option>Karimi</option>
                                <option>Hassani</option>
                            </select>
                        </div>
                        <button className='btn btn-success mb-3' onClick={this.save}>Add</button>
                    </div>
                    <hr/>
                    <div className='col-12'>
                        {this.state.arrList.map((task, index) => (
                            <div className='row'>
                                <div className="col-md-3 p-2 mb-3 border">
                                    <h4>{task.task}</h4>
                                    <h5>Developer:{task.developer}</h5>
                                    <div>
                                        <button className="btn btn-sm btn-danger" onClick={this.remove}>Remove</button>
                                        <button className="btn btn-sm btn-success ml-1" onClick={() => this.done(index)}>Done !</button>
                                    </div>
                                </div>
                            </div>
                       ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default NewTask;