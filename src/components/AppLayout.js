import React from 'react';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppContent from './AppContent';

export default function AppLayout() {
    return (
        <Layout className="layout">
            <AppHeader />
            <AppContent />
        </Layout>
    );
}
