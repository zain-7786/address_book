import React from 'react';
import SearchBar from '../utils/SearchBar';
import {Row, Col} from 'antd';
import {SettingFilled} from '@ant-design/icons'; 

export default function Settings() {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}  align="middle">
            <Col span={6} push={2}>
            <h1><SettingFilled/> Settings </h1>
            </Col>
            
            <Col span={12} pull={1}>
                <SearchBar />
            </Col>
        </Row>
    )
}

