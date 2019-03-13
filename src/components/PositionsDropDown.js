import React, { Component } from 'react';
import MenuItem from "./App";


export default class PositionsDropDown extends Component {
    state = {
        data: [],
    };
    componentDidMount(){
        this.getData();
    }

    async getData(){
        const usersUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
        const res = await fetch(usersUrl);
        const data = await res.json();
        return this.setState({data: data.positions});
    }

    render(){
        return(
            <>
                {
                    this.state.data.map(item =>
                        <MenuItem key={item.id} value={item.id}>
                            {item.name}
                        </MenuItem>)
                }
            </>
        );
    }
}