import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { Typography } from 'antd';
const { Title } = Typography;
import { checkNull } from '@ql/lib/helpers/utils'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import GenericDataComponent from './GenericDataComponent';
import SpecialDaysInstance from './SpecialDaysInstance';

const SpecialDays = () => {
    const data = useSelector((state) => state.place.data);
    const dataProperties = () => []
    return (
        <>
            <div className="tab-card-container">
                <Title level={3}>Special Days </Title>
                <Tabs type="card" defaultActiveKey="1">
                    <TabPane tab={<span> <CaretLeftOutlined /> </span>} key="1">
                        <SpecialDaysInstance />
                    </TabPane>
                    <TabPane tab={<span> <CaretRightOutlined /> </span>} key="2">
                        <GenericDataComponent data={data} dataProperties={dataProperties} />
                    </TabPane>
                </Tabs>
            </div>
        </>
    );
}

export default SpecialDays;