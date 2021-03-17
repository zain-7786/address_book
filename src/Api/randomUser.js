
import axios from 'axios';

const url = 'https://randomuser.me/api/';

export const getAllUsersData = (setUsers, pageNo, setIsLoading, users) => {
    debugger;
    axios.get(`${url}?page=${pageNo}&results=1000`)
    .then((response) => {
        const {status, data} = response;
        if(status === 200)
        {
            //setIsLoading(true);
            setUsers(data.results);
            //debugger;
            if(pageNo > 1){
                let resultArr = [...users, ...data.results]
                setUsers(resultArr);
            }
            else{
                setUsers(data.results);
            }
            setIsLoading(false);
        }
        else{
            console.log("404 Error while loading data");
        }
    })
    .catch(error => console.error(`Error: ${error}`));
}


