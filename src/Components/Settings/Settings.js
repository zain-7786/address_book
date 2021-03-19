import React from 'react';
import SearchBar from '../../utils/SearchBar';
import {Row, Col, Input,Button} from 'antd';
import {SettingFilled} from '@ant-design/icons'; 
import SkeletonInput from 'antd/lib/skeleton/Input';

export default function Settings() {
    const [input, setInput] = useState('');
    return (
        <>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}  align="middle">
            <Col span={6} push={2}>
            <h1><SettingFilled/> Settings </h1>
            </Col>
            
            <Col span={12} pull={1}>
                <Input value={input} onChange={(e) => setInput(e.target.value) } />
                
            </Col>
        </Row>
        <div style={{ background: "grey", height: "calc(100vh - 55px)" }}></div>
        </>
    )
}

