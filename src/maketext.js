import React from 'react';

class Maketext extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
                      value:'',
                    };
        this.handleChange= this.handleChange.bind();
      }

      handleChange =(event) => {
        this.setState({value:event.target.value});
        console.log(this.state.value);
      }

    render(){
        return(
            <div>
                 <input type='text' name='input' className='input-text' 
                 onChange={ this.handleChange } placeholder='what are you thinking'/>
            </div>
        );
    }
}
export default Maketext;