import React, { useContext } from 'react';
import { Layout, Row, Col, Button } from 'antd';
import FormPersonal from '../pages/Form-personal';
import FormVehicle from '../pages/Form-vehicle';
import FormUser from '../pages/Form-user';
import { GlobalContext } from '../context/GlobalContext';

const { Content } = Layout;

export default function AppContent() {
    const { setForm, form } = useContext(GlobalContext);
    const RenderPage = () => {
        if (form === 1)
            return (<FormVehicle />);
        else if (form === 2)
            return (<FormUser />);
        else
            return (<FormPersonal />);
    }

    const nextForm = () => {
        const auxForm = form + 1;
        setForm(auxForm >= 0 && auxForm <= 2 ? auxForm : 0);
    }

    return (
        <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
                <Row justify="center">
                    <Col className="logo-box" span={4}>Logo</Col>
                </Row>
                <Row justify="center">
                    <Col xs={{ span: 22, offset: 1 }} lg={{ span: 12 }} >
                        <RenderPage />
                    </Col>
                </Row>
                <Row justify="center">
                    <Button onClick={nextForm}
                        type="default"
                        size="large"
                        style={{ paddingLeft: 46, paddingRight: 46, background: '#ED8484', color: '#FFF' }}>
                        {form === 2 ? 'Finalizar cadastro' : 'Continuar'}
                    </Button>
                </Row>
            </div>
        </Content>
    );
}
