import React from 'react';
import HeaderPageProfil from '../../components/HeaderPageProfil/HeaderPageProfil';
import MainPageProfil from '../../components/MainPageProfil/MainPageProfil';
import SectionPageProfil from '../../components/SectionPageProfil/SectionPageProfil';
import '../PageProfil/PageProfil.css';

function PageProfil() {
    return (
        <div className='page-profil'>
            <HeaderPageProfil />
            <MainPageProfil />
            <SectionPageProfil />
        </div>
    );
}

export default PageProfil;
