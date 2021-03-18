import React from 'react'
import SearchBar from '../utils/SearchBar';
import { Row, Col } from 'antd';
import AddressList from './AddressList';

export function HomePage() {
    return (
        <>
        <Row align="middle" justify="center">
            <Col md={6}><h1>Address Book</h1></Col>
            
            <Col><SearchBar /></Col>
        </Row>
        <AddressList />
        </>
    )
}
