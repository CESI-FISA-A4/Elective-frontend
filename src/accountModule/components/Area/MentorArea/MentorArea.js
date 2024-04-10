import { TextField } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import IconButton from '@mui/material/IconButton';
import { mentorAccountByCode } from '../../../services/account.service';
import { useState } from 'react';

function MentorArea({identity}) {
    const [mentorCodeTarget, setMentorCodeTarget] = useState("");

    const handleMentoring = async() => {
        try {
            let response = await mentorAccountByCode(mentorCodeTarget);
            alert(response.data);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="mentor-area">
            <h2 className='text-secondaryTitle p-2'>Parrainage</h2>
            <p className='text-standard text-left'><strong>Mon code :</strong> {identity.mentorCode}</p>
            <div className="flex flex-row">
                <TextField className="w-full" value={mentorCodeTarget} onChange={(e) => setMentorCodeTarget(e.target.value)} id="mentor" label="Parrainer un ami" variant="outlined" size="small" />
                <IconButton onClick={handleMentoring}>
                    <HandshakeIcon></HandshakeIcon>
                </IconButton>
            </div>
            <br />
            {identity.mentorFirstname && 
                <p className='text-standard text-left'>
                    <strong>Mon parrain :</strong> {identity.mentorLastname.toUpperCase()} {identity.mentorFirstname}
                </p>
            }
        </div>
    );
}


export default MentorArea;