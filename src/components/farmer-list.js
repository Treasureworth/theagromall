import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import FarmerDetailComponent from './farmer-details';


const FarmerLIstComponent = ({farmers, imageBaseUrl}) => {

    const [farmerDetails, setFarmerDetails] = useState(false);

    const handleOpenFarmerDetails = () => {
        setFarmerDetails(true);
      }
      
    const handleCloseFarmerDetails = () => {
        setFarmerDetails(false);
      }
    
    Modal.setAppElement(document.getElementById('root'));
    
    return(<>
        <div className={`row mt-4 shadow-sm pt-3 pb-3 farmer-list`} onClick={() => handleOpenFarmerDetails()}>
            <div className="col-sm-3 col-xs-12 align-vertical-middle">
                  <img src={`${imageBaseUrl}${farmers.passport_photo}`} alt="passport thumbnail" className="img-fluid img-circle"/>
                {farmers.surname} {farmers.middle_name} {farmers.first_name}
            </div>
            <div className="col-3 align-vertical-middle d-none d-sm-flex">
                {farmers.reg_no}
            </div>
            <div className="col-2 align-vertical-middle d-none d-sm-flex">
                {farmers.gender}
            </div>
            <div className="col-2 align-vertical-middle d-none d-sm-flex">
                {farmers.mobile_no}
            </div>
            <div className="col-2 align-vertical-middle d-none d-sm-flex">
                {farmers.dob}
            </div>
        </div>

        <Modal
          isOpen={farmerDetails}
        //   onAfterOpen={afterOpenModal}
        //   onRequestClose={closeModal}
        style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgb(0,0,0,0.2)',
              zIndex: 2000,
              paddingBottom: 100
            },
            content: {
              position: 'absolute',
              top: '0px',
              left: '0px',
              right: '0px',
              bottom: '0px',
              border: '1px solid #ccc',
              background: '#F8F8F8',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
          contentLabel="Farmer's Details"
        >
          <div className="mb-5 mr-5">
            <button className="close" onClick={handleCloseFarmerDetails}>
            <i className="fa fa-arrow-left mr-3" aria-hidden="true"></i> 
            Back
            </button>
          </div>
          <FarmerDetailComponent farmers={farmers} imageBaseUrl={imageBaseUrl} />
          <div className="mb-5 mr-5 mt-5">
            <button className="close" onClick={handleCloseFarmerDetails}>
            <i className="fa fa-arrow-left mr-3" aria-hidden="true"></i> 
            Back
            </button>
          </div>
        </Modal>

    </>
    )
}

FarmerLIstComponent.propTypes ={
    farmers: PropTypes.object.isRequired,
    imageBaseUrl: PropTypes.string.isRequired
}
export default FarmerLIstComponent;