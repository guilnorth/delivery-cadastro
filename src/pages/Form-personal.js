import React from 'react';
import { Col, Row, Typography, Input, Select, Space } from 'antd';
const { Title } = Typography;
const { Option } = Select;


export default function FormPersonal() {
    return (
        <>
            <p level={4} style={{ marginTop: 26 }}>Preecha com seus dados pessoais</p>
            <Row gutter={16} style={{ marginBottom: 26 }}>

                <Col span={18}> <Input placeholder="Nome Completo" /></Col>
                <Col span={6}> <Input placeholder="Data de Nascimento" /></Col>
            </Row>

            <Row gutter={16} style={{ marginBottom: 26 }} >

                <Col span={8}> <Input placeholder="Digite seu CPF" /></Col>
                <Col span={8}>

                    <Select placeholder="Selecione seu gênero" style={{ width: '100%' }}>
                        <Option value="jack">Feminino</Option>
                        <Option value="lucy">Masculino</Option>
                        <Option value="Yiminghe">Prefiro não dizer</Option>
                    </Select>
                </Col>

                <Col span={8}> <Input placeholder="Telefone:      ( ) __ _______" /></Col>
            </Row>

        </>
    );
}
