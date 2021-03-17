import React from 'react';
import { Card } from 'antd';

function InfoCard({src, title, description}) {
    const { Meta } = Card;
    return (
        <Card
            hoverable
            style={{ width: 200 }}
            cover={<img alt="example" src={src} />}
        >
            <Meta title={title} description={description} />
        </Card>
    )
}

export default InfoCard
