import React, { Component } from 'react';
import UserDetails from './Etape1';
import PersonalDetails from './Etape2';
import Confirmation from './Confirmation';
import Success from './Success';

class MainForm extends Component {
    state = {
        step: 1,
        prenom: '',
        nom: '',
        email: '',
        civilite: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }
    
    render(){
        const {step} = this.state;
        const { prenom, nom, email, civilite } = this.state;
        const values = { prenom, nom, email, civilite };
        switch(step) {
        case 1:
            return <UserDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <PersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 4:
            return <Success />
        }
    }
}

export default MainForm;