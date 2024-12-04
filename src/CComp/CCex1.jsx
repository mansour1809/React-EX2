import  { Component } from 'react';

class CCex1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           backgroundColor:'white'
        };
    }
    colors = ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'purple', 'black'];
   
    buttonStyle = {
        padding: '10px 20px',
        margin: '5px',
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: 'white'
    };

    componentDidMount() {
        console.log('Component mounted with color: white');
    }

    colorChange = (color)=>{
        this.setState({backgroundColor: color})
    }

    render() {
        return (
            <div style={{
                backgroundColor: this.state.backgroundColor,
                padding: '20px',
                minHeight: '200px'
            }}>
              {this.colors.map((color) => (
                        <button 
                            key={color}
                            style={this.buttonStyle}
                            onClick={() => this.colorChange(color)}
                        >
                            {color}
                        </button>
                    ))}
            </div>
        );
    }
}

export default CCex1;