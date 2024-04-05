import { useRef } from 'react';
import CustomButton from '../../utils/button';
export const FileUploader = ({handleFile}) => {
  
  const hiddenFileInput = useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };
return (
    <>
      <CustomButton children={"Selectionner un fichier"} onClick={handleClick} />
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{display: 'none'}} // Make the file input element invisible
      />
    </>
  );
}

  export default FileUploader;