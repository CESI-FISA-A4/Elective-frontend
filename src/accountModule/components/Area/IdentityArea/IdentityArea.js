import './identityArea.css';
import accountImg from '../../../../assets/account.png';
import { getRole } from '../../../../authModule/services/auth.service';
import CustomButton from '../../../../utils/components/CustomButton';
import { useEffect, useState } from 'react';
import { updateAccountById } from '../../../services/account.service';
import EditIdentity from '../../EditIdentity/EditIdentity';

function IdentityArea({ identity, onIdentityUpdated }) {
    const [identityData, setIdentityData] = useState(identity);
    const [activeUpdateIdentityModal, setActiveUpdateIdentityModal] = useState(false);

    useEffect(() => {
        setIdentityData(identity);
    }, [identity]);

    const handleAccountUpdate = async (data) => {
        setActiveUpdateIdentityModal(false);

        try {
            let userId = localStorage.getItem("userId");
            await updateAccountById(userId, data);
            onIdentityUpdated();
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="identity-area bg-bgGreyColor flex flex-col gap-4">
            <h2 className='text-secondaryTitle pb-8'>Profil<br />{getRole()}</h2>

            {identityData.imageUrl ?
                <img src={identityData.imageUrl} alt="Img profile" />
                :
                <img src={accountImg} alt="Img profile" />
            }
            <h2 className='text-secondaryTitle'>{identityData.lastname.toUpperCase()} {identityData.firstname}</h2>
            <p>{identityData.address}</p>
            <CustomButton onClick={() => setActiveUpdateIdentityModal(true)}>Modifier le profil</CustomButton>
            
            <EditIdentity
                open={activeUpdateIdentityModal}
                data={identityData}
                onCancel={() => setActiveUpdateIdentityModal(false)}
                onIdentityUpdated={handleAccountUpdate}>
            </EditIdentity>
        </div>
    );
}

export default IdentityArea;


