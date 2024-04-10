import React, { useState, useEffect } from 'react';
import {commitSynch, getCode} from '../../services/Repo.service';
import CustomButton from '../../../utils/components/CustomButton';
import ConfirmModal from '../../../utils/components/Modal/ConfirmModal/ConfirmModal';
import InformationModal from '../../../utils/components/Modal/InformationModal/InformationModal';

const GithubCodeEditor = ({ repo, branch, composant, code}) => {
  const [codeVal, setCodeVal] = useState('');
  const [commitMessage, setCommitMessage] = useState('');
  const [component, setComponent] = useState('');
  const [popupCommit, setPopup] = useState(false);
  const [popupInfoCommit, setPopupInfo] = useState(true);
  async function handleCommit () {
    const commit = await commitSynch(repo, branch, codeVal, component.path, commitMessage);
    if(commit.state = "fulfilled") {
      setPopupInfo(true);
    }
  };

  useEffect(() => {
      setCodeVal(code.data);
      setComponent(composant);
  }, [code, composant]);

  return (
    <div className='flex flex-col grow'>
      <h1 className='text-left'>{component.name ? component.name : 'Choisissez un composant'}</h1>
      <textarea
        className='rounded-lg border border-black mb-2 grow'
        value={codeVal}
        onChange={(e) => setCodeVal(e.target.value)}
      />
      <textarea className='rounded-lg border border-black mb-2'
        type="text"
        placeholder="Commit message"
        value={commitMessage}
        onChange={(e) => setCommitMessage(e.target.value)}
      />
      <CustomButton className='my-2' onClick={() => {setPopup(true);}}>Commit</CustomButton>
      <ConfirmModal open={popupCommit} onClose={() => {setPopup(false);}} onConfirm={() => {handleCommit(); setPopup(false);}} title={"Commit"} content={`Voulez vous commit le fichier ${component.name}`} textClose={"Annuler"} textConfirm={"Commit"} colorConfirm={"primary"} colorClose={"secondary"}></ConfirmModal>
      <InformationModal open={popupInfoCommit} onConfirm={() => {setPopupInfo(false);}} title={"Information"} content={`Voulez avez commit le fichier ${component.name}`} textConfirm={"Ok"} colorConfirm={"primary"}></InformationModal>
    </div>
  );
};

export default GithubCodeEditor;