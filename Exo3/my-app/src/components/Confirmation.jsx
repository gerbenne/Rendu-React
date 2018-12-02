import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { prenom, nom, email, civilite }} = this.props;

        return(
            <div>
                <h1 className="ui centered">Confirmer les informations saisie</h1>
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Prénom: {prenom}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Nom: {nom}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                        Email: <a href='mailto:jack@semantic-ui.com'>{email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='civilite' />
                        <List.Content>Civilite: {civilite}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Retour</Button>
                <Button onClick={this.saveAndContinue}>Confirmer</Button>
            </div>
        )
    }
}

export default Confirmation;