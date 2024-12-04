import  { Component } from 'react';

class CCex2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'hello',
            lastName: 'world',
            psychoGrade: '0',
            showFirstNameMessage: false,
            showLastNameMessage: false,
            showPsychoMessage: false,
            canStudy: false,
            showStudyMessage: false
        };
    }
    componentDidMount() {
        console.log('Component mounted with firstName: hello , lastName: world , psychGrade:0');
    }

    handleFocus = (fieldName) => {
        switch(fieldName) {
            case 'firstName':
                this.setState({ showFirstNameMessage: true });
                break;
            case 'lastName':
                this.setState({ showLastNameMessage: true });
                break;
            case 'psychoGrade':
                this.setState({ showPsychoMessage: true });
                break;
            default:
                break;
        }
    }
    handleBlur = (fieldName) => {
        switch(fieldName) {
            case 'firstName':
                this.setState({ showFirstNameMessage: false });
                break;
            case 'lastName':
                this.setState({ showLastNameMessage: false });
                break;
            case 'psychoGrade':
                this.setState({ 
                    showPsychoMessage: false,
                    showStudyMessage: true,
                    canStudy: Number(this.state.psychoGrade) > 555
                });
                break;
            default:
                break;
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const messageStyle = {
            color: 'red',
            marginBottom: '5px'
        };

        const formStyle = {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '300px',
            margin: '20px auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px'
        };

        const inputStyle = {
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc'
        };

        const studyMessageStyle = {
            color: this.state.canStudy ? 'green' : 'red',
            marginTop: '5px'
        };

        return (
            <div style={formStyle}>
                <div>
                    {this.state.showLastNameMessage && 
                        <p style={messageStyle}>עליך למלא שם משפחה</p>
                    }
                    <input
                        style={inputStyle}
                        type="text"
                        name="lastName"
                        placeholder="שם משפחה"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        onFocus={() => this.handleFocus('lastName')}
                        onBlur={() => this.handleBlur('lastName')}
                    />
                </div>

                <div>
                    {this.state.showFirstNameMessage && 
                        <p style={messageStyle}>עליך למלא שם פרטי</p>
                    }
                    <input
                        style={inputStyle}
                        type="text"
                        name="firstName"
                        placeholder="שם פרטי"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        onFocus={() => this.handleFocus('firstName')}
                        onBlur={() => this.handleBlur('firstName')}
                    />
                </div>

                <div>
                    {this.state.showPsychoMessage && 
                        <p style={messageStyle}>עליך למלא ציון פסיכומטרי</p>
                    }
                    <input
                        style={inputStyle}
                        type="number"
                        name="psychoGrade"
                        placeholder="ציון פסיכומטרי"
                        value={this.state.psychoGrade}
                        onChange={this.handleChange}
                        onFocus={() => this.handleFocus('psychoGrade')}
                        onBlur={() => this.handleBlur('psychoGrade')}
                    />
                    {this.state.showStudyMessage && 
                        <p style={studyMessageStyle}>
                            {this.state.canStudy 
                                ? 'אתה יכול להתקבל ללימודים' 
                                : 'עליך לנסות שוב בשנה הבאה'}
                        </p>
                    }
                </div>
            </div>
        );
    }
}

export default CCex2;