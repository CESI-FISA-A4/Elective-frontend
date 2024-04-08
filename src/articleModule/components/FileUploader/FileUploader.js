import { useRef } from 'react';
import CustomButton from '../../../utils/components/CustomButton';
import { uploadFileToS3 } from '../../services/article.service';

export const FileUploader = ({handleFile}) => {
  
  const hiddenFileInput = useRef(null);
  
  const handleClick = e => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    const imgUrl = uploadFileToS3(fileUploaded);
    handleFile(imgUrl);
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