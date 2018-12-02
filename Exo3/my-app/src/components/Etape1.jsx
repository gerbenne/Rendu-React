import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class Etape1 extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    

    render(){
        const { values } = this.props;
        
        return(
            <Form>
                <h1>Info Utilisateur : Partie 1</h1>
                <Form.Field label='Civilité: ' control='select' onChange={this.props.handleChange('civilite')} defaultValue={values.civilite}>
                    <option value='monsieur'>Monsieur</option>
                    <option value='madame'>Madame</option>
                </Form.Field>
                <br></br>
                <Form.Field>
                    <label>Prénom: </label>
                    <input
                    placeholder='Prénom'
                    onChange={this.props.handleChange('prenom')}
                    defaultValue={values.prenom}
                    />
                </Form.Field>
                <br></br>
                <Form.Field>
                    <label>Nom: </label>
                    <input
                    placeholder='Nom'
                    onChange={this.props.handleChange('nom')}
                    defaultValue={values.nom}
                    />
                </Form.Field>
                <br></br>
                <Form.Field>
                    <label>Email: </label>
                    <input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <br></br>
                <Form.Field>
                    <label>Téléphone: </label>
                    <input
                    type='tel'
                    placeholder='+33'
                    onChange={this.props.handleChange('telephone')}
                    defaultValue={values.telephone}
                    />
                </Form.Field>
                <br></br>
                <Button onClick={this.saveAndContinue}>Sauvegarder et continuer </Button>
            </Form>
        )
    }
}

export default Etape1;