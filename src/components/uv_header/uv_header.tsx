import React, { memo } from 'react';

import './uv_header.css';
import { UVHeaderProps } from './UVHeaderTypes';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

const UVHeader = (props: UVHeaderProps) => {

  return (
    <Container>
      <Row className="uv-row">
        <div className="uv-header-container">
          <div id="headerDiv">
            <div className={'toolbar ' + (props.theme ? props.theme : 'primary')} role="banner">
              <Col xs={2} md={1}>
                <a href={process.env.PUBLIC_URL + props.primaryWebsite} className="website-link" rel="noopener noreferrer">
                  <img width={props.logoWidth ? props.logoWidth : '40px'}
                    alt={props.logoAlt ? props.logoAlt : 'Yuvraj Patil'}
                    src={props.logoFile ? props.logoFile : 'logo192.png'} />
                </a>
              </Col>
              <Col xs={7} md={3} className="d-none d-md-block d-lg-block">
                <span>{props.title}</span>
              </Col>
              <Col xs={{offset:3, span:2}} md={{offset: 0, span:6}}>
                { props.centralTitle &&
                  <div className="uv-central-title">
                    {props.centralTitle}
                  </div>
                }
              </Col>
              <Col xs={{offset:2, span:1}} md={{span:1, offset:1}}>
                <div className="spacer"></div>
                {
                  props.repository && !props.menu &&
                  <a href={props.repository.url} className="repository-link" target="_blank" rel="noopener noreferrer">
                    <img className="logo" alt={props.alt}
                      height={props.repository.height ? props.repository.height : '40px'}
                      src={props.repository.logo ? props.repository.logo : 'logo192.png'} />
                  </a>
                }

                {
                  props.menu &&
                  <Dropdown className="menu-container">
                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                      <img className="menu" alt={props.alt}
                        height={props.menu.height ? props.menu.height : '40px'}
                        src={props.menu.logo ? props.menu.logo : 'logo192.png'} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {props.menu.items.map((menuItem: any, index: any) => (
                        <React.Fragment key={'menuItem-' + index}>
                          { index > 0 &&
                            <Dropdown.Divider />
                          }
                          <Dropdown.Item href={process.env.PUBLIC_URL + menuItem.href}>{menuItem.title}</Dropdown.Item>
                        </React.Fragment>
                      ))}

                    </Dropdown.Menu>
                  </Dropdown>
                }
              </Col>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default memo(UVHeader);
