import { useNavigate } from 'react-router-dom';
import SearchBar from "../Searchbar/SearchBar";
import Header from '../Header/Header';


function HomePage({ title }) {
    const navigate = useNavigate();

    const handleSearchBarChange = (data) => {
        
        navigate("/restaurant-list?texteFieldValue="+data
        )
        
    };

    return (
        <div>
            <Header/>
            <div className="h-screen flex items-center justify-center ">
                <SearchBar onSearchBarChange={handleSearchBarChange}/>
            </div>  
        </div>
     
    )
}

export default HomePage;