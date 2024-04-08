import './identityArea.css';
import accountImg from '../../../../assets/account.png';
import { getRole } from '../../../../authModule/services/auth.service';
import CustomButton from '../../../../utils/components/CustomButton';
import { useEffect, useState } from 'react';
import { getAccountById, updateAccountById } from '../../../services/account.service';
import EditIdentity from '../../EditIdentity/EditIdentity';

function IdentityArea() {
    const [accountData, setAccountData] = useState({ data: {}, loading: false });
    const [activeUpdateIdentityModal, setActiveUpdateIdentityModal] = useState(false);

    const fetchAccount = async () => {
        try {
            setAccountData({ data: {}, loading: false });
            let userId = localStorage.getItem("userId");
            let response = await getAccountById(userId);
            setAccountData({ data: response.data, loading: true });

        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchAccount();
    }, []);

    const handleAccountUpdate = async(data) => {
        setActiveUpdateIdentityModal(false);

        try {
            let userId = localStorage.getItem("userId");
            await updateAccountById(userId, data);
            fetchAccount();
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="identity-area bg-bgGreyColor flex flex-col gap-4">
            <h2 className='text-secondaryTitle pb-8'>Profil<br />{getRole()}</h2>

            {accountData.loading && 
            <>
                {accountData.data.imageUrl ?
                    <img src={accountData.data.imageUrl} alt="Img profile" />
                    :
                    <img src={accountImg} alt="Img profile" />
                }
                <h2 className='text-secondaryTitle'>{accountData.data.lastname.toUpperCase()} {accountData.data.firstname}</h2>
                <p>{accountData.data.address}</p>
                <CustomButton onClick={() => setActiveUpdateIdentityModal(true)}>Modifier le profil</CustomButton>
                
                {accountData.loading && 
                    <EditIdentity 
                        open={activeUpdateIdentityModal}
                        data={accountData.data}
                        onCancel={() => setActiveUpdateIdentityModal(false)}
                        onIdentityUpdated={handleAccountUpdate}>
                    </EditIdentity>
                }
            </>
            }
        </div>
    );
}

export default IdentityArea;


