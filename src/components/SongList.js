import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongList extends Component{
    render(){
        return(
            <div></div>
        );
    }
}

export default connect()(SongList);

function sayHello(){
    return function(name){
        return `Hello ${name}`;
    }
}

sayHello()('Furkan');