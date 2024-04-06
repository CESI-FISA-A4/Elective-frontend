import { TextField } from '@mui/material';
import accountImg from '../../../assets/account.png';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ChangePassword from '../ChangePassword/ChangePassword';
import './account.css';

function Account() {
    return (
        // w-screen
        <div className='account h-screen'>
            <div className="identity bg-greyColor">
                <img src={accountImg} alt="Img profile" />
                <h2 className='text-secondaryTitle'>NOM Prenom</h2>
                <p>18 rue des licornes, Saint-Nazaire</p>
            </div>

            <div className="user-info">
                <h2 className='text-secondaryTitle p-2'>Infos utilisateurs</h2>
                <ChangePassword></ChangePassword>
                <br />
                <br />
                <h2 className='text-secondaryTitle'>Autre section</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque laudantium enim sequi id quae aliquam odio, tenetur aliquid rerum quo asperiores consequuntur voluptatibus minus ea, quod incidunt dignissimos debitis reprehenderit.</p>
                <br />
                <h2 className='text-secondaryTitle'>Danger zone</h2> 
            </div>

            <div className="context-info">
                <div className="mentor-area">
                    <h2 className='text-secondaryTitle p-2'>Parrainage</h2>
                    <p className='text-standard'>Mon code : 1234613</p>
                    <div className="flex flex-row">
                        <TextField className="w-full" id="mentor" label="Parrainer un ami" variant="outlined" size="small" />
                        <IconButton>
                            <SearchIcon></SearchIcon>
                        </IconButton>
                    </div>
                </div>
                <div className="command">
                    <h2 className='text-secondaryTitle p-2'>Historique de commande</h2>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Account;