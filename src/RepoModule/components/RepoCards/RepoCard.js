import trash from '../../../assets/trash.svg'
import download from '../../../assets/download.svg'
import edit from '../../../assets/edit.svg'

export default function RepoCard({composantName}){
    return (
        <div className="flex justify-center justify-between bg-greenColor rounded-md h-8 w-64 m-auto items-center text-center">
            <h1 className="ml-5">{composantName}</h1>
            <img className='h-3' src={edit} alt="edit" />
            <img className='h-3' src={download} alt="download" />
            <img className='h-3 mr-5' src={trash} alt="trash" />
        </div>
    )
}