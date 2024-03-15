import React from 'react';
class Sumdemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    doSum () {
        const {no1,no2} = this.state;
        var sum = parseInt(no1)+parseInt(no2);
        this.setState({ans:"Sum is "+sum})
    }

    render() {
        return(<>
        
        No1 <input type='text' onChangeCapture={(e)=>this.setState({no1:e.target.value})}/>
        No2 <input type='text' onChangeCapture={(e)=>this.setState({no2:e.target.value})}/>
        <input type='button' value={"add"} onClick={this.doSum.bind(this)} />
        {this.state.ans}
        </>)
    }
}

export default Sumdemo;