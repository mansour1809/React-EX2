import { Component } from "react";

class CCex3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableWidth: "100%",
    };
  }
  

  componentDidMount() {
    console.log("Component mounted with table width 100% ");
  }
handleClick = ()=>{
    this.setState({tableWidth:'50%'})
}
handleDoubleClick = () =>{
    this.setState({tableWidth:'100%'})
}

  render() {
    const tableStyle = {
        width: this.state.tableWidth,
        borderCollapse: "collapse",
        border: "2px solid black",
        margin: "20px auto",
      };
    
      const cellStyle = {
        border: "1px solid black",
        padding: "10px",
        textAlign: "center",
      };
    return (
       <table 
                style={tableStyle} 
                onClick={this.handleClick}
                onDoubleClick={this.handleDoubleClick}
            >
                <tbody>
                    <tr>
                        <td style={cellStyle}>1</td>
                        <td style={cellStyle}>2</td>
                        <td style={cellStyle}>3</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>4</td>
                        <td style={cellStyle}>5</td>
                        <td style={cellStyle}>6</td>
                    </tr>
                </tbody>
            </table>
    );
  }
}

export default CCex3;
