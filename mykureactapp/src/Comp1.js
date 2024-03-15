import React from 'react';
import './Styles.css';

class Comp1 extends React.Component{
    constructor(props) {
        super(props);
        this.state={ };
    }

    render() {
        var a = 10;
        var b = 20;
        var myColor = {
            backgroundColor: 'blue',
            color: 'white'
        }
        return (
            <>
            A value is {a} <br/>
            B value is {b} <br/>
            Sum is {a+b}
            <p style={{backgroundColor:'red',color:'white'}}> I am P1</p>
            <p style={myColor}>I am P2</p>
            <p className='myClass'>I am Class Demo</p>
            </>
        )
    }
}

export default Comp1;