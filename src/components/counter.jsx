import React, { Component } from 'react';

class Counter extends Component {
     styles = {
        fontSize: 10,
        fontWeight: 'bold'
     };

    render() { 
        const {counter, onDelete, onIncrement} = this.props;
        return (
        <>
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button onClick={() => onIncrement(counter)}
            style={this.styles} 
            className="btn btn-secondary btn-sm">
                Increment
            </button>
            <button 
            onClick={() => onDelete(counter.id)} 
            className="btn btn-danger btn-sm m-2">Delete</button><br></br>
           
        </>
            
        );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
export default Counter;