import React from 'react';
// import '../css/GetInfo.css';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {clintonInventory, shelters} from '../helpers';
import axios from 'axios';

export default class Clinton extends React.Component {
    
    state = {
        name: [],
        quantity: []
    }

    componentDidMount() {
        const url = 'http://localhost:5000/api/checkinventory/clinton';
        axios.get(url, {headers:{'Access-Control-Allow-Origin': '*'}})
        
        .then( res => {
            const invent = res.data;
            console.log(res.data);
    })

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const url = 'http://localhost:5000/api/checkinventory/clinton';
    //     axios.get(url, {headers:{'Access-Control-Allow-Origin': '*'}})
        
    //     .then( res => {
    //         const invent = res.data;
    //         console.log(res)
    //     })
        // .then(data => this.handleSuccess(data.data));
        

        // if(event.target.shelter.value === 'true'){
        //     return 0
        // }else{
        //     const data = new FormData(event.target);
        //     console.log(event.target.shelter.value);
        //     const url = `http://localhost:5000/api/checkinventory/${event.target.shelter.value}`
        //     console.log(url)
        //     axios.get(url, {headers:{'Access-Control-Allow-Origin': '*'}})
        //     .then(data => this.handleSuccess(data.data));
        // }
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
                            <th>item</th>
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

// export default Capacity;