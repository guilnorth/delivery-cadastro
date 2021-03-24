import React from 'react';
import { Col, Row, Typography, Input, Select, Avatar } from 'antd';
import { MdDirectionsBike, MdMotorcycle, MdChromeReaderMode } from "react-icons/md";

const { Option } = Select;


export default function FormVehicle() {
  return (
    <>
      <Row  >

        <Row justify="space-around" align="middle" span={12} style={{ marginBottom: 26 }}>
          <Col span={24}><p level={4} style={{ marginTop: 26, }}>Escolha seu tipo de veículo</p></Col>
          <Col span={12}>
            <Avatar
              size={{ xs: 40, sm: 40, md: 40, lg: 64, xl: 64, xxl: 64 }}
              icon={<MdMotorcycle />}
            />

          </Col>
          <Col span={12}>
            <Avatar
              size={{ xs: 40, sm: 40, md: 40, lg: 64, xl: 64, xxl: 64 }}
              icon={<MdDirectionsBike />}
            />
          </Col>
        </Row>
        <Row justify="space-around" align="middle" span={12} style={{ marginBottom: 26 }}>
          <Col span={24}><p level={4} style={{ marginTop: 26, }}>Documentos necessários</p></Col>
          <Col span={12}>
            <Avatar
              size={{ xs: 40, sm: 40, md: 40, lg: 64, xl: 64, xxl: 64 }}
              icon={<MdChromeReaderMode />}
            />
          </Col>
          <Col span={12}>
            <Avatar
              size={{ xs: 40, sm: 40, md: 40, lg: 64, xl: 64, xxl: 64 }}
              icon={<MdChromeReaderMode />}
            />
          </Col>
        </Row>

      </Row>

      <p level={4} style={{ marginTop: 26 }}>Informe seus dados bancários</p>
      <Row gutter={16} style={{ marginBottom: 26 }} >
        <Col span={8}>

          <Select placeholder="Banco:" style={{ width: '100%' }}>
            <Option value="jack">Bradesco</Option>
            <Option value="lucy">Caixa</Option>
            <Option value="Yiminghe">NuConta</Option>
            <Option value="Yiminghe">...</Option>
          </Select>
        </Col>
        <Col span={5}> <Input placeholder="Agência: __________" /></Col>
        <Col span={6}> <Input placeholder="Conta:      ______________" /></Col>
        <Col span={5}> <Input placeholder="Dígito:  _____" /></Col>
      </Row>

    </>
  );
}
