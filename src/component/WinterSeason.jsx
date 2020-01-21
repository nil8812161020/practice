import React, { Component } from 'react';
import HeaderSite from './HeaderSite';

class WinterSeason extends Component {
    state = {
        course: '',
        teacher: '',
        class: '',
        holdingdays: '',
        holdingtime: '',
        time: '',
        price: '',
        arrlist: []
    }
    change = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    add = () => {
        let NewList = {
            course: this.state.course,
            teacher: this.state.teacher,
            class: this.state.class,
            holdingdays: this.state.holdingdays,
            holdingtime: this.state.holdingtime,
            time: this.state.time,
            price: this.state.price
        }
        this.setState({
            arrlist: this.state.arrlist.concat(NewList),
            course: '',
            teacher: '',
            class: '',
            holdingdays: '',
            holdingtime: '',
            time: '',
            price: ''
        });
        document.getElementsByName('course')[0].focus()
    }
    remove = (index) => {
        if (window.confirm('are you confrim for delete option?')) {
            let temp = this.state.arrlist
            temp.splice(index, 1)
            this.setState({
                arrlist: temp
            })
        }
    }
    updateitem = (index)=>{
        
    }
    render() {
        return (

            <div className='container text-left  '>
                <HeaderSite title='Winter Season' />
                <h2>Add New Customer</h2>
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <label> Course</label>
                            <select className="form-control" name='course' value={this.course} onChange={this.change}>
                                <option>Select Course</option>
                                <option>Java</option>
                                <option>JavaScript</option>
                                <option>Angular</option>
                                <option>ReactJs</option>
                                <option>ReactNative</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label> Teacher</label>
                            <select className="form-control" name='teacher' value={this.teacher} onChange={this.change}>
                                <option>Select Teacher</option>
                                <option>Rezaei</option>
                                <option>Ahmadi</option>
                                <option>Karimi</option>
                                <option>Hassani</option>
                                <option>Soleymani</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label> Class</label>
                            <select className="form-control" name='class' value={this.class} onChange={this.change}>
                                <option>Select Class</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Holding Days </label>
                            <input type="text" className="form-control" name='holdingdays' value={this.holdingdays} onChange={this.change} />
                        </div>
                        <div className="form-group">
                            <label>Holding time </label>
                            <input type="text" className="form-control" name='holdingtime' value={this.holdingtime} onChange={this.change} />
                        </div>
                        <div className="form-group">
                            <label>Time </label>
                            <input type="text" className="form-control" name='time' value={this.time} onChange={this.change} />
                        </div>
                        <div className="form-group">
                            <label>Course Price </label>
                            <input type="text" className="form-control" name='price' value={this.price} onChange={this.change} />
                        </div>
                        <button className='btn btn-success' onClick={this.add}>Save</button>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <table class="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Course</th>
                                <th scope="col">Teacher</th>
                                <th scope="col">Class</th>
                                <th scope="col">Holding Days</th>
                                <th scope="col">Holding time </th>
                                <th scope="col">Time</th>
                                <th scope="col">Course Price</th>
                                <th scope="col">operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.arrlist.map((item, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.course}</td>
                                        <td>{item.teacher}</td>
                                        <td>{item.class}</td>
                                        <td>{item.holdingdays}</td>
                                        <td>{item.holdingtime}</td>
                                        <td>{item.time}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => this.remove(index)}>Delete</button>
                                            <button className='btn btn-warning ml-1' onClick={() => this.remove(index)}>Update</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default WinterSeason;