import React from 'react';
// import Maketext from './maketext';
import './displaytext.css';

class Displaytext extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tweet:'',
        };
    }
    render(props){
        return(
            <div>
                <div className="tweet-block">
                    { this.props.tweet }
                </div>
            </div>
        );
    }
}
export default Displaytext;