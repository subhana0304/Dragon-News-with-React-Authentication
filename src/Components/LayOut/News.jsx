import React from 'react';
import Header from '../Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../../Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const News = () => {
    return (
        <div>
            <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default News;