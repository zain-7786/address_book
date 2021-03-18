import React, {useState, useEffect} from 'react';
//import 'antd/dist/antd.css';
import { Row,Input } from 'antd';
import AddressList from '../Components/AddressList';

function SearchBar() {
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const { Search } = Input;
    const onSearch = value => console.log(value);

    useEffect(() => {
        setFilteredUsers(
            users.filter((user) => user.name.first.toLowerCase().includes(search.toLowerCase())
            )
        );
        debugger;
    }, [search, users]);
    return (
        <Row className="search-bar__main">
            <Search placeholder="Search Users" onSearch={onSearch} enterButton size="large" onChange={(e) => setSearch(e.target.value)}/>
            {filteredUsers.map((user, idx) => (
                <AddressList key={idx} {...user} />
            ))}

        </Row>
    )
}

export default SearchBar
