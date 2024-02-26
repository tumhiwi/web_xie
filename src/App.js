import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
import TeachingPage from './pages/TeachingPage';
import TalksPage from './pages/TalksPage';
import './App.css';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/research" element={<ResearchPage />} />
                    <Route path="/publications" element={<PublicationsPage />} />
                    <Route path="/teaching" element={<TeachingPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/talks" element={<TalksPage />} />
                    {/* 其他页面路由 */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
