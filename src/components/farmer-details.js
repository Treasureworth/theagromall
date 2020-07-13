import React, {useState, useCallback} from 'react'
import PropTypes from 'prop-types';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { generateKey } from '../assets/utils/generate-key';

const FarmerDetailComponent = ({farmers, imageBaseUrl}) => {

    const getFingerprintPath = (value) => {
        var path = {src: `${imageBaseUrl}${value}`}
        return path;
      }
    const fingerprintObject = `${farmers.fingerprint}`;
    const fingerprint = fingerprintObject.split(';');
    const fingerprintUrlArray = fingerprint.map(value => getFingerprintPath(value) );
    

    return(<>
        <div>
           <div className="row">
                <div className="col-sm-2 col-xs-9">
                    <Zoom>
                      <img src={`${imageBaseUrl}${farmers.passport_photo}`} alt="passport thumbnail" className="rounded img-fluid"/>
                    </Zoom>
                </div>
                <div className="col-sm-9 col-xs-12 shadow p-5 ml-sm-5">

                <div className="custom-header">Basic Information </div>

                        <div className="row">
                            <div className="col-sm-3 col-xs-6">
                                <p> Farmer ID</p>
                                <h4>
                                {farmers.farmer_id}
                                </h4>
                            </div>
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Registration Number</p>
                                <h4>
                                 {farmers.reg_no}
                                </h4>
                            </div>
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Bank Verification Number</p>
                                <h4>
                                {farmers.bvn}
                                </h4>
                            </div>
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Identification Number</p>
                                <h4>
                                {farmers.id_no}
                                </h4>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Surname</p>
                                <h4>
                                {farmers.surname}
                                </h4>
                            </div>
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> First Name</p>
                                <h4>
                                 {farmers.first_name}
                                </h4>
                            </div>
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Middle Name</p>
                                <h4>
                                {farmers.middle_name}
                                </h4>
                            </div>
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Email</p>
                                <h4>
                                {farmers.email_address}
                                </h4>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Mobile Number</p>
                                <h4>
                                {farmers.mobile_no}
                                </h4>
                            </div>
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Date of Birth</p>
                                <h4>
                                 {farmers.dob}
                                </h4>
                            </div>
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Gender</p>
                                <h4>
                                {farmers.gender}
                                </h4>
                            </div>
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Marital Status</p>
                                <h4>
                                {farmers.marital_status}
                                </h4>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Spouse Name</p>
                                <h4>
                                {farmers.spouse_name}
                                </h4>
                            </div>

                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Occupation</p>
                                <h4>
                                {farmers.occupation}
                                </h4>
                            </div>

                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Address</p>
                                <h4>
                                {farmers.address}
                                </h4>
                            </div>

                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> L.G.A</p>
                                <h4>
                                 {farmers.lga}
                                </h4>
                            </div>
                        </div>
                        <div className="row mt-4">

                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> City</p>
                                <h4>
                                {farmers.city}
                                </h4>
                            </div>
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> State</p>
                                <h4>
                                {farmers.state}
                                </h4>
                            </div>
                            <div className="col-sm-3 col-xs-6 mt-xs-3">
                                <p> Nationality</p>
                                <h4>
                                {farmers.nationality}
                                </h4>
                            </div>
                            <div className="col">

                            </div>
                        </div>
                </div>
           </div>

           <div className="row mt-5">
                <div className="col-sm-2">
                </div>
                <div className="col-sm-5 col-xs-12 shadow ml-sm-5">
                    <div className="row p-5">
                    <div className="custom-header">Identification </div>
                        <div className="col-12">
                            <Zoom>
                                <img src={`${imageBaseUrl}${farmers.id_image}`} alt="passport thumbnail" className="rounded img-fluid zoom"/>
                            </Zoom>
                        </div>
                        <div className="col-12 mt-5">
                                 <div className="row">
                                    <div className="col">
                                            <p> Issued Date</p>
                                            <h4>
                                            {farmers.issue_date}
                                            </h4>
                                        </div>
                                        <div className="col">
                                            <p> Expiry Date</p>
                                            <h4>
                                            {farmers.expiry_date}
                                            </h4>
                                        </div>
                                        <div className="col">
                                            <p> ID Type</p>
                                            <h4>
                                                <span className="custom-badge">{farmers.id_type}</span>
                                            </h4>
                                        </div>
                                 </div>   
                        </div>
                    </div>
                </div>

                <div className="col-sm-4 col-xs-12 shadow p-5 ml-sm-4">
                <div className="custom-header">Finger Print </div>
                    <div className="row">
                        {
                            fingerprintUrlArray.map(value => 
                                <div className="col-6" key={generateKey(5)}>
                                    <Zoom>
                                        <img src={value.src} alt="fingerprint thumbnail" width="250" className="rounded img-fluid zoom" />
                                    </Zoom>
                                </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

FarmerDetailComponent.propTypes ={
    farmers: PropTypes.object.isRequired,
    imageBaseUrl: PropTypes.string.isRequired
}
export default FarmerDetailComponent;