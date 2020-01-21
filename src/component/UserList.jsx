import React, { Component } from 'react';
import HeaderSite from './HeaderSite';

class UserList extends Component {
    constructor(){
        super();
        this.state = {users:[],isLoading:true}
    }

    componentDidUpdate(){
        this.getUserApi();
        console.log( this.getUserApi())
    }

    getUserApi=()=>{
           const apiUrl = 'https://reqres.in/api/users';
            fetch(apiUrl)
            .then(response=>response.json())
            .then(result=>{
                this.setState({isLoading:false , users:result.data})
            })
    }
    render() {
        return (
            <>
                <HeaderSite title='Fetch User List' />
                 {this.state.isLoading ? : }
            </>
        );
    }
}

export default UserList;