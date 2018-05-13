import React from 'react';
import '../css/Capacity.css';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Capacity extends React.Component{
    render() {
        return (
            <div>
                <h2>Shelters</h2>
                <Form>
                    <FormGroup>
                        <Label for="shelterCheck">Check Shelter Availability</Label>
                            <Input type="select" name="shelterSelection" id="shelter" required>
                            <option disabled selected value> -- select an option -- </option>
                            <option value="Adams Street Educational Campus">Adams Street Educational Campus - (283 Adams Street)</option>
                            <option value="Aviation HS">Aviation HS - (45-30 36 Street)</option>
                            <option value="Brooklyn Tech HS">Brooklyn Tech HS - (29 Ft Greene Place)</option>
                            <option value="Clara Barton HS">Clara Barton HS - (901 Classon Avenue)</option>
                            <option value="Clinton School">Clinton School - (10 E 15 Street)</option>
                            <option value="Forest Hills HS">Forest Hills HS - (67-01 110 Street)</option>
                            <option value="Frank Sinatra HS">Frank Sinatra HS - (35-12 35Th Avenue)</option>
                            <option value="George Washington Educational Campus">George Washington Educational Campus - (549 Audobon Avenue)</option>
                            <option value="Grover Cleveland HS">Grover Cleveland HS - (21-27 Himrod Street)</option>
                            <option value="Hillcrest HS">Hillcrest HS - (160-05 Highland Avenue)</option>
                            <option value="HS of Law, Gov't and Justice">HS of Law, Gov't and Justice - (244 E 163 Street)</option>
                            <option value="HS of Teaching, Lib Arts and Sci">HS of Teaching, Lib Arts and Sci - (74-20 Commonwealth Blvd)</option>
                            <option value="IS - HS 362">IS - HS 362 - (921 E 228 Street)</option>
                            <option value="IS 118">IS 118 - (154 W 93 Street)</option>
                            <option value="IS 131">IS 131 - (100 Hester Street)</option>
                            <option value="IS 145">IS 145 - (33-34 80 Street)</option>
                            <option value="IS 158">IS 158 - (800 Home Street)</option>
                            <option value="IS 2">IS 2 - (655 Parkside Avenue)</option>
                            <option value="IS 201">IS 201 - (730 Bryant Avenue)</option>
                            <option value="IS 227">IS 227 - (6500 16 Avenue)</option>
                            <option value="IS 25">IS 25 - (34-65 192 Street)</option>
                            <option value="IS 324">IS 324 - (800 Gates Avenue)</option>
                            <option value="IS 383">IS 383 - (1300 Greene Avenue)</option>
                            <option value="IS 391">IS 391 - (2225 Webster Avenue)</option>
                            <option value="IS 391">IS 391 - (790 East New York Avenue)</option>
                            <option value="IS 51">IS 51 - (20 Houston Street)</option>
                            <option value="IS 55">IS 55 - (2021 Bergen Street)</option>
                            <option value="IS 74">IS 74 - (61-15 Oceania Street)</option>
                            <option value="IS 90">IS 90 - (21 Jumel Place)</option>
                            <option value="Jerome Parker Campus">Jerome Parker Campus - (100 Essex Drive)</option>
                            <option value="John Jay Educational Campus">John Jay Educational Campus - (237 7th Avenue)</option>
                            <option value="Martin Luther King Jr. HS">Martin Luther King Jr. HS - (122 Amsterdam Avenue)</option>
                            <option value="Midtown East Campus (PS 59)">Midtown East Campus (PS 59) - (233 E 56 Street)</option>
                            <option value="MS - HS 141">MS - HS 141 - (660 W 237 Street)</option>
                            <option value="Petrides Complex">Petrides Complex - (715 Ocean Terrace)</option>
                            <option value="PS - IS 210">PS - IS 210 - (501-503 W 152 Street)</option>
                            <option value="PS - IS 218">PS - IS 218 - (1220 Gerard Avenue)</option>
                            <option value="PS - IS 268">PS - IS 268 - (92-07 175 Street)</option>
                            <option value="PS - IS 30">PS - IS 30 - (7002 4 Avenue)</option>
                            <option value="PS 100">PS 100 - (111-11 118 Street)</option>
                            <option value="PS 102">PS 102 - (1827 Archer Street)</option>
                            <option value="PS 125">PS 125 - (425 W 123 Street)</option>
                            <option value="PS 132">PS 132 - (1245 Washington Avenue)</option>
                            <option value="PS 145">PS 145 - (100 Noll Street)</option>
                            <option value="PS 20">PS 20 - (142-30 Barclay Avenue)</option>
                            <option value="PS 207">PS 207 - (40-20 100 Street)</option>
                            <option value="PS 211">PS 211 - (1919 Prospect Avenue)</option>
                            <option value="PS 226">PS 226 - (6006 23 Avenue)</option>
                            <option value="PS 239">PS 239 - (17-15 Weirfield Street)</option>
                            <option value="PS 24">PS 24 - (427 38 Street)</option>
                            <option value="PS 249">PS 249 - (18 Marlborough Road)</option>
                            <option value="PS 306">PS 306 - (40 West Tremont Avenue)</option>
                            <option value="PS 327">PS 327 - (111 Bristol Street)</option>
                            <option value="PS 56">PS 56 - (250 Kramer Avenue)</option>
                            <option value="PS 58">PS 58 - (72-24 Grand Avenue)</option>
                            <option value="PS 7">PS 7 - (858 Jamaica Avenue)</option>
                            <option value="PS 92">PS 92 - (222 W 134 Street)</option>
                            <option value="Ralph McKee HS">Ralph McKee HS - (290 St Marks Place)</option>
                            <option value="Townsend Harris HS">Townsend Harris HS - (149-11 Melbourne Avenue)</option>
                            <option value="Walton HS">Walton HS - (2780 Reservoir Avenue)</option>
                            </Input>
                        </FormGroup>
                        <Button>Submit</Button>
                        <br/><br/>
                        <FormGroup>
                            <Label>Shelter Name: </Label><br/>
                            <Label>Shelter Location: </Label><br/>
                            <Label>Current Quantity: </Label><br/>
                            <Label>Total Capacity: </Label>
                        </FormGroup>
                </Form>
                    
            </div>
        )
    }
}

export default Capacity;