import React, {useState, useEffect} from 'react'
import { Row, Spin, Alert } from 'antd';
import { getAllUsersData} from '../Api/randomUser';
import DetailModal from './DetailModal'; 
import {Link} from 'react-router-dom';
import InfoCard from './InfoCard';

function AddressList() {
    //const style = { background: '#0092ff', padding: '8px 0' };
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageNo, setPage] = useState(1);

    useEffect(() => {
        //setIsLoading(true);
        getAllUsersData(setUsers, pageNo);
        //setIsLoading(false);
    }, []);

    function LoadMore(e) {
        console.log(e);
        let bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 20;
        if(bottom){
            let page_ = pageNo + 1;
            setPage(page_)
            getAllUsersData(setUsers, page_);
            setIsLoading(true);
        }
    }

    return (
        <div onScroll={LoadMore}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-between" align="middle">
            {isLoading ? <h1>Loading...</h1> : ""}
            {users && users.map((user) => (
                <Link onClick={() => { setShow(true); }}><InfoCard src={user.picture.thumbnail} title={user.name.first+" "+user.name.last} /></Link>
            // <Col className="gutter-row" span={6}>
            //     <Link onClick={() => { setShow(true); }} style={style}>{user.name.first}</Link>
            // </Col>
            ))}

            {/* <Spin tip="Loading..." />
            <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
            /> */}
           
            <DetailModal show={show} handleOk={()=> setShow(false)} handleCancel={()=> setShow(false)}/>
        </Row>
        </div>

    )
}

export default AddressList
