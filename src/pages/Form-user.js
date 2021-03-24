import React from 'react';
import { Col, Row, Typography, Input, Select, Space } from 'antd';
const { Title } = Typography;
const { Option } = Select;

export default function FormUser() {
    return (
        <>
            <p level={4} style={{ marginTop: 26 }}>Dados de acesso</p>
            <Row gutter={16} style={{ marginBottom: 26 }}>

                <Col span={24}> <Input placeholder="Email:" /></Col>
            </Row>

            <Row gutter={16} style={{ marginBottom: 26 }} >

                <Col span={12}> <Input placeholder="Senha" /></Col>

                <Col span={12}> <Input placeholder="Confirme sua senha" /></Col>
            </Row>

        </>
    );
}
