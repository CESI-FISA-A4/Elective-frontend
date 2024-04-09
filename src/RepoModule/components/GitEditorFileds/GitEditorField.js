import React, { useState, useEffect } from 'react';
import {commitSynch, getCode} from '../../services/Repo.service';
import CustomButton from '../../../utils/components/CustomButton';

const GithubCodeEditor = ({ repo, branch, composant, code}) => {
  const [codeVal, setCodeVal] = useState('');
  const [commitMessage, setCommitMessage] = useState('');

  function handleCommit  () {
    commitSynch(repo, branch, commitMessage, codeVal);
  };

  useEffect(() => {
      const fetchCode = async() => {
          let response = await getCode();
          setCodeVal(response.data);
      } 
      fetchCode();
  }, []); 

  return (
    <div>
      <textarea
        className='rounded-lg border border-black'
        value={code.value}
        onChange={(e) => setCodeVal(e.target.value)}
        rows={25}
        cols={130}
      />
      <br />
      <input
        type="text"
        placeholder="Commit message"
        value={commitMessage}
        onChange={(e) => setCommitMessage(e.target.value)}
      />
      <br />
      <CustomButton onClick={handleCommit}>Commit</CustomButton>
    </div>
  );
};

export default GithubCodeEditor;