import { isDeveloper, isRestaurantOwner, isSalesman, isTechnician } from '../../../authModule/services/auth.service';
import ChangePassword from '../Area/ChangePassword/ChangePassword';
import DangerArea from '../Area/DangerArea/DangerArea';
import IdentityArea from '../Area/IdentityArea/IdentityArea';
import MentorArea from '../Area/MentorArea/MentorArea';
import OrderHistory from '../Area/OrderHistoryArea/OrderHistory';
import RestaurantStatArea from '../Area/RestaurantStatArea/RestaurantStatArea';
import './account.css';

function Account() {
    return (
        <>
            {(isTechnician() || isDeveloper() || isSalesman()) ?
                <IdentityArea></IdentityArea>
                :
                <div className='account'>
                    <IdentityArea></IdentityArea>

                    <div className="user-info">
                        <ChangePassword></ChangePassword>
                        <br />
                        <MentorArea></MentorArea>
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