import React, { Component } from 'react';
import PropTypes from "prop-types";
import ScrollableAnchor from 'react-scrollable-anchor';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";


const users = {
    titleText1: 'Our cheerful users',
    titleText2: 'Attention! Sorting users by registration date'
};


export default class Users extends Component {
    static propTypes = {
        users:PropTypes.object,
        users_list:PropTypes.array,
        current_link:PropTypes.string,
        showNextUsers:PropTypes.func,
        titleText1:PropTypes.string,
        titleText2:PropTypes.string,
    };

    render(){
        const users_list = this.props.users_list,
            current_link = this.props.current_link,
            showNextUsers = this.props.showNextUsers;
        return(
            <>
                <Grid container id='users' >
                    <ScrollableAnchor id={'Users'}>
                        <div className='container'>
                            <Grid container spacing={24} >
                                <Grid item md={12}>
                                    <h2>
                                        {users.titleText1}
                                    </h2>
                                </Grid>
                            </Grid>
                            <Grid container spacing={24}>
                                <Grid item md={12}>
                                    <h5>
                                        {users.titleText2}
                                    </h5>
                                </Grid>
                            </Grid>
                            <Grid container spacing={32}>
                                {
                                    users_list.map(item =>
                                        <Grid item xs={12} sm={4}
                                              key={item.email}
                                              className='userCard'
                                              zeroMinWidth
                                              style={{height: 180,marginBottom:38}}
                                        >
                                            <Avatar
                                                className='usersAvatar'
                                                alt={item.name}
                                                src={item.photo}
                                            />
                                            <div style={{marginTop: 22}}>
                                                <h4 className='noWrapText'>{item.name}</h4>
                                                <p id='p3' className='truncatedText'>{item.position}</p>
                                                <p id='p3' className='truncatedText'>{item.email}</p>
                                                <p id='p3' className='truncatedText'>{item.phone}</p>
                                            </div>
                                        </Grid>
                                    )
                                }
                            </Grid>
                            <Grid container >
                                {
                                    current_link ? (
                                        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                                            <Button
                                                variant="outlined"

                                                component="span"
                                                id='secondaryButton'
                                                onClick={showNextUsers}
                                            >
                                                {'Show more'}
                                            </Button>

                                        </Grid>
                                    ) : (
                                        <></>
                                    )
                                }
                            </Grid>
                        </div>
                    </ScrollableAnchor>
                </Grid>
            </>
        );
    }
}