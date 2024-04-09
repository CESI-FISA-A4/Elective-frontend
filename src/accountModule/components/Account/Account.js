import { useEffect, useState } from 'react';
import { isDeveloper, isRestaurantOwner, isSalesman, isTechnician } from '../../../authModule/services/auth.service';
import { getAccountById } from '../../services/account.service';
import ChangePassword from '../Area/ChangePassword/ChangePassword';
import DangerArea from '../Area/DangerArea/DangerArea';
import IdentityArea from '../Area/IdentityArea/IdentityArea';
import MentorArea from '../Area/MentorArea/MentorArea';
import OrderHistory from '../Area/OrderHistoryArea/OrderHistory';
import RestaurantStatArea from '../Area/RestaurantStatArea/RestaurantStatArea';
import './account.css';

function Account() {
    const [accountData, setAccountData] = useState({ data: {}, loading: false });

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

    const onIdentityUpdated = () => {
        fetchAccount();
    }

    return (
        <>
            {(isTechnician() || isDeveloper() || isSalesman()) ?
                <IdentityArea></IdentityArea>
                :
                <div className='account'>
                    {accountData.loading &&
                        <IdentityArea identity={accountData.data} onIdentityUpdated={onIdentityUpdated}></IdentityArea>
                    }

                    <div className="user-info">
                        <ChangePassword></ChangePassword>
                        <br />
                        {accountData.loading &&
                            <MentorArea mentorCode={accountData.data.mentorCode}></MentorArea>
                        }  
                        <br />
                        <DangerArea></DangerArea>
                    </div>

                    <OrderHistory></OrderHistory>

                    {isRestaurantOwner() && 
                        <RestaurantStatArea></RestaurantStatArea>
                    }
                </div>
            }
        </>
    );
}

export default Account;