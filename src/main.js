import React from 'react';
import ProfileImage from './profile/ProfilPhoto.js'
import FullName from './profile/FullName.js'
import Adress from './profile/Adress.js';
import './main.css';

function ProfileDetails() {
    return(
        <div>
            <div className="container">
                <div className="profile-container row">
                    <div className="profile-block">
                        <div className="well profile">
                            <div className="col-sm-12 profile-items">
                                <div className="col-xs-6 col-sm-6 border border-2 border-info rounded">
                                    <ProfileImage />
                                    <h2 className="font-weight-bold">Profile Photo</h2>
                                </div>
                                <div className="col-xs-6 col-sm-6 profile-details d-flex flex-column">
                                    <h3 className="border-bottom border-dark mt-auto"> Firstname & Lastname<FullName /></h3>
                                    <h3 className="border-bottom border-dark mt-auto">Adress<Adress /></h3>
                                </div> 
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProfileDetails;