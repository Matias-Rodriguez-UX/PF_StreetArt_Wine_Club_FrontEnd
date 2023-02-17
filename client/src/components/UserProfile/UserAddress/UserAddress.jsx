import React from "react";
import Form from 'react-bootstrap/Form';
import { useSelector } from "react-redux";

export default function UserAddress(){
    const states = useSelector((state) => state.users.states);
    const cities = useSelector((state) => state.users.cities);
    
    return (
    <div className="container col py-5 mt-5" display='flex'>
      <div class="col-md-8">
        <div class="card mb-3">
          <div class="card-body">
                <Form>
                <div class="row">
                    <div class="col-sm-3">
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Main address"
                            class="row mb-3"
                        />
                    </div>
                    <h6 class="col-sm-9 text-secondary">Calle wallabe 234</h6>
                </div>
                <hr/>
                <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Contact number</h6>
                    </div>
                    <h6 class="col-sm-9 text-secondary">351 7 334 771</h6>
                </div>
                </Form>
            </div>
            <hr />
            </div>
            </div>
            <hr/>

            <div class="col-lg-8">
					<div class="card">
						<div class="card-body">
                            <h4>Add address</h4>
                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Complete Address (street & number)</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" name='address' />
								</div>
							</div>

                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Zip code</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" name='zipCode' />
								</div>
							</div>

                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">State</h6>
								</div>
								<div class="col-sm-9 text-secondary">
                                    <Form.Select>
                                        <option>State</option>
                                    </Form.Select>
								</div>
							</div>

                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">City</h6>
								</div>
								<div class="col-sm-9 text-secondary">
                                    <Form.Select>
                                        <option>City</option>
                                    </Form.Select>
								</div>
							</div>

                            <div class="row">
								<div class="col-sm-3"></div>
								<div class="col-sm-9 text-secondary">
									<input type="button" class="btn btn-warning btn-sm" value="Add" />
								</div>
							</div>

                        </div>
                    </div>
            </div>
        </div>        
    )
}