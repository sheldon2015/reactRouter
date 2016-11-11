import React, { Component, PureComponent } from 'react';

class ListOfWords extends PureComponent {
    render() {


        return <div>{this.props.words.join(',')}</div>;
    }
}

class WordAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // This section is bad style and causes a bug
        const words = this.state.words;
        //words.push('marklar');
        // this.setState({ words: words });
        //

        this.setState({ words: [...words, 'marklar'] });
    }

    render() {


        return (
            <div>
                <button onClick={this.handleClick} >click</button>
                <ListOfWords words={this.state.words} />
            </div>
        );
    }
}

export default WordAdder; 