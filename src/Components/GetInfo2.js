import React from 'react';
// import '../css/GetInfo.css';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {clintonInventory, shelters} from '../helpers';
import axios from 'axios';

export default class Clinton2 extends React.Component {
    
    state = {
        name: [],
        quantity: []
    }


    handleSuccess = ({ name, quantity}) => {
        const inventory = {
        'name': name,
        'quantity': quantity
        }
        this.setState(inventory)
    }

    render() {
        return (
            <div>
                <h2>Shelters</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="shelterCheck">Check Shelter Availability</Label>
                            <Input type="select" name="shelterSelection" id="shelter" required>
                            <option disabled selected value> -- select an option -- </option>
                            <option>Delete</option>
                                <option>View Inventory</option>
                                <option>Add Shelter</option>
                            </Input>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                        <br/><br/>
                        
                </Form>
                <table className="center">
                    <tbody>
                        <tr>
                            <th>TEST</th>
                            <th>Quantity</th>
                     
                        </tr>
                            {clintonInventory.map(function(hour, i){
                                return (
                                    <tr key={i}>
                                        <td>{hour.item}</td> 
                                        <td>{hour.quantity}</td> 
                                        
                                    </tr>
                                    )
                                })}
                    </tbody>
                </table>
            </div>
        )
    }
}

