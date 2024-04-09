import trash from '../../../assets/trash.svg'
import download from '../../../assets/download.svg'
import edit from '../../../assets/edit.svg'

export default function RepoCard({onClickEdit, onClickDownload, composantName}){
    return (
        <div  className="flex  bg-greenColor rounded-md h-8 w-64 m-auto items-center text-center">
            <h1 className="ml-5">{composantName}</h1>
            <img onClick={onClickEdit} className=' h-3' src={edit} alt="edit" />
            <img onClick={onClickDownload} className=' -3' src={download} alt="download" />
        </div>
    )
}