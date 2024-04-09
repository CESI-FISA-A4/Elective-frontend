import { useEffect, useState } from "react";
import { getAllAccounts } from "../../accountModule/services/account.service";

function ClientList() {
    const [clientSource, setClientSource] = useState({data: [], loading: false});

    const fetchData = async(value="") => {
        try {
            setClientSource({data: [], loading: false});
            let response = await getAllAccounts();
            console.log(response);
            setClientSource({data: response.data, loading: true});
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
      <>
          <h1>Liste des clients</h1>
      </>
    );
  }
  
  
  export default ClientList;