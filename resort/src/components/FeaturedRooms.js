import React, { Component } from 'react';
import {RoomContext} from '../context';

export default class FeaturedRooms extends Component {
static contextType = RoomContext
    render() {
        const {featuredRooms : rooms} = this.context
        return (
            <div>
                {greeting} {name} from featured rooms 
            </div>
        )
    }
}
 