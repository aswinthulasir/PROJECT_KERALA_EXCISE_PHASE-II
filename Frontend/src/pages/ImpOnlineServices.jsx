import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaPhoneAlt, FaLink } from 'react-icons/fa';
import '../styles/cards.css'


function GovtInitiatives() {
  const initiatives = [
    {
      title: 'VIMUKTHI',
      description:
        "Vimukthi is an anti-narcotics campaign launched by the Government of Kerala",
      link: 'https://vimukthi.kerala.gov.in/',
      helpline: '199',
      color: '#007bff',
    },
    {
      title: 'E-TODDY',
      description:
        'An Online Toddy Shop Sale Service by Kerala Excise Department',
      link: 'https://etoddy.keralaexcise.gov.in/',
      color: '#9b59b6',
    },
    {
      title: 'E-LICENSES',
      description:
        "E-Licenses can be acquired through the services portal of Kerala Excise Department",
      link: 'https://services.keralaexcise.gov.in/',
      color: '#28a745',
    },
    {
      title: 'E-FIR',
      description:
        'Check your status and other details of your case through E-FIR.',
      link: 'https://eroll.keralaexcise.gov.in/crreport',
      color: '#e67e22',
    },
    {
        title: 'VEELS',
        description:
          'Vehicle Management and Location Tracking System introduced by Govt. of Kerala',
        link: 'https://veels.kerala.gov.in/',
        color: '#2F3061',
      },
      {
        title: 'HELLO EXCISE',
        description:
          'Android App of Kerala Excise Department',
        link: 'https://play.google.com/store/apps/details?id=info.keralaexcise.directory&pli=1',
        color: '#13262F',
      },
  ];

  return (
    <div className="gradient-background-b" style={{width:'109%', marginLeft:'-3%'}}>
      <Container fluid className="govt-initiatives-section">
        <div className="section-header text-center">
          <h6>Useful Online Services</h6>
          <h4>Govt. of Kerala Initiatives</h4>
        </div>

        <Row className="cards-row">
          {initiatives.map((initiative, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
                <a
                href={initiative.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >

              <Card className="initiative-card">
                <div
                  className="card-header"
                  style={{ backgroundColor: initiative.color }}
                >
                  {initiative.title}
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Text>{initiative.description}</Card.Text>
                  <div>
                    
                    {initiative.helpline && (
                      <div className="helpline">
                        <FaPhoneAlt /> Helpline No: <span>{initiative.helpline}</span>
                      </div>
                    )}
                  </div>
                </Card.Body>
              </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default GovtInitiatives;
