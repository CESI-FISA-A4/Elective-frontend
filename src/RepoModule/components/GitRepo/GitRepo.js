import { useEffect, useState } from "react"
import RepoCard from "../RepoCards/RepoCard";
import CodeEditor from "../GitEditorFileds/GitEditorField";
import {InputLabel, MenuItem, Select, FormControl } from "@mui/material"
import { getRepository, getBranch, getCompo, getCode } from "../../services/Repo.service";
import ConfirmModal from "../../../utils/components/Modal/ConfirmModal/ConfirmModal";



export default function GitRepos(){
    const [brancheVal, setbrancheVal] = useState({data: [], loading: false});
    const [repositoryVal, setRepositoryVal] = useState({data: [], loading: false});
    const [composantVal, setComposantVal] = useState({data: [], loading: false});
    const [branches, setbranches] = useState({data: [], loading: false});
    const [repository, setRepository] = useState({data: [], loading: false});
    const [composants, setComposants] = useState({data: [], loading: false});
    const [code, setCode] = useState({data: [], loading: false});
    const [popupDownload, setPopupDownload] = useState(false);
    const [componentDownload, setComponentDownload] = useState({data: [], loading: false});

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
        setComposants({data: [], loading: false});
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
        // setComposants({data: '', loading: false});
        setComposantVal(value);
        try {
            const codeResponse = await getCode(repositoryVal, brancheVal, value.path);
            setCode({data: codeResponse.data.content, loading: true});
            } catch (error) {
            alert(error);
        }
    }

    async function onClickDownload(value){
        const response = await getCode(repositoryVal, brancheVal, value.path);
        const blob = response.data.content;
          // Create blob link to download
          const url = window.URL.createObjectURL(
            new Blob([blob], { type : 'plain/text' }),
          );
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute(
            'download',
            `${value.name}`,
          );
      
          // Append to html link element page
          document.body.appendChild(link);
      
          // Start download
          link.click();
      
          // Clean up and remove the link
          link.parentNode.removeChild(link);
    }


    return(
        <div className="h-screen flex xl:flex-row flex-col">
            <div className="bg-greyColor rounded-lg border border-black flex flex-col m-5">
                <div className="flex p-2">
                    <FormControl fullWidth sx={{ m: 1, minWidth: 150 }} size="small">
                        <InputLabel id="label">Repository</InputLabel>
                        <Select className='w-50' labelId="demo-simple-select-label" id="demo-simple-select" onChange={onSelectRepo}>
                        {repository.data.map(repo => (
                        <MenuItem key={repo.id} value={repo.name}>{repo.name}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, minWidth: 150 }} size="small">
                        <InputLabel id="label">Branches</InputLabel>
                        <Select className='' labelId="demo-simple-select-label" id="demo-simple-select" onChange={onSelectBranch}>
                        {branches.data.map(branch => (
                        <MenuItem key={branch.id} value={branch.name}>{branch.name}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="">Ajouter barre de recherche</div>
                
                <div className='flex flex-col max-h-48 xl:max-h-full overflow-auto'>
                {composants.data.map(compo => (
                    <RepoCard composantName={compo.name} key={compo.path} value={compo.sha} onClickEdit={() => onClickCompo(compo)}  onClickDownload={() => {setComponentDownload(compo); setPopupDownload(true); console.log(compo)}}/>
                ))}
                </div>
            
            </div>
            <div className="flex flex-row grow m-5">
                <CodeEditor repo={repositoryVal} branch={brancheVal} composant={composantVal} code={code}/>
            </div>

            <ConfirmModal open={popupDownload} onClose={() => {setPopupDownload(false)}} onConfirm={() => {onClickDownload(componentDownload); setPopupDownload(false)}} title={"Download"} content={`Voulez vous télécharger le fichier ${componentDownload.name}`} textClose={"Annuler"} textConfirm={"Télécharger"} colorConfirm={"primary"} colorClose={"secondary"}></ConfirmModal>
        </div>
    )
}
