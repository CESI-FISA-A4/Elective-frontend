import { useEffect, useState } from "react"
import RepoCard from "../RepoCards/RepoCard";
import CodeEditor from "../GitEditorFileds/GitEditorField";
import {InputLabel, Select} from "@mui/material"
import { getRepository, getBranch, getCompo, getCode } from "../../services/Repo.service";

export default function GitRepos(){
    
    const [branches, setbranches] = useState({data: [], loading: false});
    const [composants, setComposants] = useState({data: [], loading: false});
    const [repository, setRepository] = useState({data: [], loading: false});

    useEffect(() => {
        const fetchRepository = async() => {
            setRepository({data: [], loading: false});
            let response = await getRepository();
            setRepository({data: response.data, loading: true});
        } 
        fetchRepository();
    }, []);

    function onSelectRepo(e){
        setRepository(e);
        getBranch(repository);
    }

    function onSelectBranch(e){
        setbranches(e);
        getCompo(repository, branches);
    }

    function onSelectCompo(e){
        setComposants(e);
        getCode(repository, branches, composants);
    }

    return(
        <div className="w-screen h-screen flex">
            <div className="bg-greyColor w-1/4 h-96 mt-24 ml-24">
            <div className="flex justify-center mt-3">
            <div>
            <InputLabel id="label">Repository</InputLabel>
                <Select className='w-3/4' labelId="demo-simple-select-label" id="demo-simple-select" onChange={onSelectRepo}>
                </Select>
            
            </div>
            <div className="ml-5">
            <InputLabel id="label">Branches</InputLabel>
            <Select className='w-3/4' labelId="demo-simple-select-label" id="demo-simple-select" onChange={onSelectBranch}>
            </Select>
            </div>
            </div>
            <div className="mt-3">Ajouter barre de recherche</div>
          
            
            </div>
            <div className="mt-24 ml-24 ">
            <CodeEditor repo='' branch=''/>
            </div>

        </div>
    )
}
