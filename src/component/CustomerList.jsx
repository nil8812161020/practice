import React, { Component } from 'react';
import HeaderSite from './HeaderSite';

class CustomerList extends Component {
    state = {
        arrList: [],
        customerCode: '',
        firstName: '',
        lastName: '',
        mobile: ''
    }

    change = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        });
        console.log([event.target.name], event.target.value)
    }

    saveList = () => {
        let newlist = {
            customerCode: this.state.customerCode,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mobile: this.state.mobile
        }
        this.setState({
            arrList: this.state.arrList.concat(newlist),
            customerCode: '',
            firstName: '',
            lastName: '',
            mobile: ''
        })
        document.getElementsByName("customerCode")[0].focus();
    }

    deletecustomer = (index) => {
        if (window.confirm('are you sure remove item ?')) {
            let temp = this.state.arrList;
            temp.splice(index, 1);
            this.setState({ arrList: temp })
        }
    }
    render() {
        return (
            <>
                <div className='container'>
                    <HeaderSite title='Customer List' />
                    <h2>Manage Customers</h2>
                    <div className='row'>
                        <div className="col-md-6">
                            <div class="form-group mt-2">
                                <label>Customer Code : </label>
                                <input type='text' name='customerCode' className='form-control' value={this.state.customerCode} onChange={this.change} />
                            </div>
                            <div class="form-group">
                                <label >First Name : </label>
                                <input type='text' name='firstName' className='form-control' value={this.state.firstName} onChange={this.change} />
                            </div>
                            <div class="form-group">
                                <label >Last Name : </label>
                                <input type='text' name='lastName' className='form-control' value={this.state.lastName} onChange={this.change} />
                            </div>
                            <div class="form-group">
                                <label >Mobile : </label>
                                <input type='text' name='mobile' className='form-control' value={this.state.mobile} onChange={this.change} />
                            </div>
                            <button class="btn btn-success mb-2" name='save' onClick={this.saveList}>Save</button>

                        </div>
                        <table className='table table-striped table-bordered mt-3 text-center'>
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th >Customer Code</th>
                                    <th >First Name</th>
                                    <th >Last Name</th>
                                    <th >Mobile</th>
                                    <th >operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.arrList.map((item, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.customerCode}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.mobile}</td>
                                        <td><button className='btn btn-danger' onClick={() => this.deletecustomer(index)}>Delete</button></td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>

                </div>
            </>
        );
    }
}

export default CustomerList;