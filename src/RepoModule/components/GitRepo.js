import { useState } from "react"
import CustomButton from "../../utils/components/CustomButton";
import RepoCard from "./RepoCard";
import CodeEditor from "./GitEditorField";

export default function GitRepos(){
    const [repository, setRepository] = useState();

    return(
        <div className="w-screen h-screen flex">
            <div className="bg-greyColor w-1/4 h-96 mt-24 ml-24">
                <div>Ajouter barre de recherche</div>
                <RepoCard composantName='nom de mon composant'/>
            </div>
            <div className="ml-5">
            <CodeEditor owner='estebanLavaux' repo='' path=''/>
            </div>
        </div>
    )
}
