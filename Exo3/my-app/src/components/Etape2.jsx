import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';

class Etape2 extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered">Info Utilisateur : Part 2</h1>
                <label>Votre Framework préféré</label>
                <Form.Field label='Vue' control='input' type='radio' name='htmlRadios' />
                <Form.Field label='Angular' control='input' type='radio' name='htmlRadios' />
                <Form.Field label='Symfony' control='input' type='radio' name='htmlRadios' />
                <br></br>
                <Form.Field label='Autre' control='textarea' rows='3' />
                <br></br>
            <Button onClick={this.back}>Retour</Button>
            <Button onClick={this.saveAndContinue}>Sauvegarder et continuer </Button>
        </Form>
        )
    }
}

export default Etape2;