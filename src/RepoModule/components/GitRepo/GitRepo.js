import { useEffect, useState } from "react"
import RepoCard from "../RepoCards/RepoCard";
import CodeEditor from "../GitEditorFileds/GitEditorField";
import {InputLabel, MenuItem, Select} from "@mui/material"
import { getRepository, getBranch, getCompo, getCode } from "../../services/Repo.service";



export default function GitRepos(){
    const [brancheVal, setbrancheVal] = useState({data: [], loading: false});
    const [repositoryVal, setRepositoryVal] = useState({data: [], loading: false});
    const [composantVal, setComposantVal] = useState({data: [], loading: false});
    const [branches, setbranches] = useState({data: [], loading: false});
    const [repository, setRepository] = useState({data: [], loading: false});
    const [composants, setComposants] = useState({data: [], loading: false});
    const [code, setCode] = useState({data: [], loading: false});

    useEffect(() => {
        const fetchRepository = async() => {
        setRepository({data: [], loading: false});
            try {
                const response = await getRepository();
                setRepository({data: response.data, loading: true});
            } catch (error) {
                alert(error);
            }
        } 
        fetchRepository();
    }, []);

    async function onSelectRepo(e){
        setbranches({data: [], loading: false});
        setRepositoryVal( e.target.value);
        try {
            const branchesResponse = await getBranch(e.target.value);
            setbranches({data: branchesResponse.data, loading: true});
        } catch (error) {
            alert(error);
        }
    }

    async function onSelectBranch(e){
        setComposants({data: [], loading: false});
        setbrancheVal(e.target.value);
        try { 
            const composantsResponse = await getCompo(repositoryVal, e.target.value);
            setComposants({data: composantsResponse.data, loading: true});
        } catch (error) {
            alert(error);
        }
    }

    async function onClickCompo(value){
        setComposants({data: '', loading: false});
        setComposantVal(value);
        try {
            const codeResponse = await getCode(repositoryVal, brancheVal, value);
            setCode({data: codeResponse.data, loading: true});
        } catch (error) {
            alert(error);
        }
    }

    async function onClickDownload(value){
        setComposants({data: '', loading: false});
        setComposantVal(value);
        try {
            const codeResponse = await getCode(repositoryVal, brancheVal, value);
            setCode({data: codeResponse.data, loading: true});
        } catch (error) {
            alert(error);
        }
    }


    return(
        <div className="w-screen h-screen flex flex-row">
            <div className="bg-greyColor overflow-auto w-1/4 h-1/2 mt-24 ml-24">
                <div className="flex justify-center mt-3">
                    <div>
                        <InputLabel id="label">Repository</InputLabel>
                        <Select className='w-3/4' labelId="demo-simple-select-label" id="demo-simple-select" onChange={onSelectRepo}>
                        {repository.data.map(repo => (
                        <MenuItem key={repo.id} value={repo.name}>{repo.name}</MenuItem>
                        ))}
                        </Select>
                    </div>
                    <div className="ml-5">
                        <InputLabel id="label">Branches</InputLabel>
                        <Select className='w-3/4' labelId="demo-simple-select-label" id="demo-simple-select" onChange={onSelectBranch}>
                        {branches.data.map(branch => (
                        <MenuItem key={branch.id} value={branch.name}>{branch.name}</MenuItem>
                        ))}
                        </Select>
                    </div>
                </div>
                <div className="mt-3 mb-3">Ajouter barre de recherche</div>
                
                {composants.data.map(compo => (
                    <RepoCard composantName={compo.name} key={compo.size} value={compo.path} onClickEdit={() => onClickCompo(compo.path)}  onClickDownload={console.log('dl')}/>
                ))}
            
            </div>
            <div className="mt-24 ml-24 ">
                <CodeEditor repo={repository} branch={branches} composant={composantVal} code={code}/>
            </div>

        </div>
    )
}
