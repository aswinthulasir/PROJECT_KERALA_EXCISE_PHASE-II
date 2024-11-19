import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../styles/Leaders.css';

const leadersData = [
  {
    name: 'Sri. Pinarayi Vijayan',
    title: 'Hon. Chief Minister',
    image: '/Pinarayi Vijayan Sir.png',
  },
  {
    name: 'Sri. M. B. Rajesh',
    title: 'Hon. Excise Minister',
    image: '/MB Rajesh.png',
  },
  {
    name: 'Dr. A. Jayathilak I.A.S.',
    title: 'Addl. Chief Secretary Taxes',
    image: '/JAYA IAS.png',
  },
  {
    name: 'Sri. Mahipal Yadav I.P.S',
    title: 'Excise Commissioner',
    image: '/Mahipal IPS.png',
  },
];

const Leaders = () => {
  return (
    <Container className="leaders-container">
  <h2 className="section-title text-center">Leaders of Excise Department</h2>

  {/* Cards section */}
  <Row className="justify-content-center">
    {leadersData.map((leader, index) => (
      <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
        <Card className="leader-card">
          <Card.Img
            variant="top"
            src={leader.image}
            alt={leader.name}
            className="card-image"
          />
          <Card.Body className="card-body">
            <Card.Title className="leader-name">{leader.name}</Card.Title>
            <Card.Text className="leader-title">{leader.title}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>

  {/* About section */}
  <div className="about-department">
    <h2>About The Department</h2>
    <p className="department-description">
      Excise Department is one of the oldest Departments in the State and it contributes a major share of the State Revenue.
      The Department is administering laws related to Liquor, Narcotic Drugs, and Psychotropic Substances and Medicinal
      Preparations containing alcohol and narcotic drugs, etc.
    </p>
    <a href="#" className="read-more-link">Read More →</a>
  </div>
</Container>

  );
};

export default Leaders;
