import React from 'react';
import logo from "../../assets/images/logo.png";
import '../HeaderPasswordReset/HeaderPasswordReset.scss';

function HeaderPasswordReset() {
    return (
        <div className='header-password-reset'>
            <img src={logo} alt="Logo" />
        </div>
    );
}

export default HeaderPasswordReset;
