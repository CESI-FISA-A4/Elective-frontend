import { useState } from "react";
import { TextField } from '@mui/material';
import FormModal from "../../../utils/components/Modal/FormModal/FormModal";

function EditIdentity({open, data, onCancel, onIdentityUpdated}) {
    const [imageUrl, setImageUrl] = useState(data.imageUrl ?? "");
    const [firstname, setFirstname] = useState(data.firstname ?? "");
    const [lastname, setLastname] = useState(data.lastname ?? "");
    const [address, setAddress] = useState(data.address ?? "");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data);

        onIdentityUpdated({imageUrl, firstname, lastname, address});
    }

    return (
        <div className="edit-identity">
            <FormModal
                open={open}
                onClose={onCancel}
                title="Edition du compte"
                onApply={handleSubmit}>
                    <div className="inputs flex flex-col gap-4">
                        <TextField className="w-full" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} id="imageUrl" label="Image du compte" variant="outlined" />
                        <TextField className="w-full" value={lastname} onChange={(e) => setLastname(e.target.value)} id="lastname" label="Nom" variant="outlined" />
                        <TextField className="w-full" value={firstname} onChange={(e) => setFirstname(e.target.value)} id="firstname" label="Prénom" variant="outlined" />
                        <TextField className="w-full" value={address} onChange={(e) => setAddress(e.target.value)} id="address" label="Adresse" variant="outlined" />
                    </div>
            </FormModal>
        </div>
    );
}

export default EditIdentity;