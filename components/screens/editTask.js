import React, { Component } from 'react';
import { NavigationContext } from 'react-navigation';

class EditTask extends Component {
    render () {
        const taskID = NavigationContext.getParams('taskID');
        return (
            <Text>{"Edit Task"}</Text>
        );
    }
}

export default EditTask;