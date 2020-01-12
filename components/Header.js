import React from 'react';
import { Row, Col ,Menu,Icon} from 'antd'
import '../public/style/components/header.css'
const Header = () => {
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={13} lg={13} xl={13} className="logo-left">
                    {/* <span>
                        <img src={require('../public/img/logo.jpg')} />
                    </span> */}
                    <span className="header-logo">Vanlus</span>
                    <span className="header-txt">Blogs focused on web</span>
                </Col>
                <Col xs={0} sm={0} md={5} lg={5} xl={5} className="logo-right">
                    <Menu  mode="horizontal">
                        <Menu.Item key="home">
                            <Icon type="home" />
                            首页
                        </Menu.Item>
                        <Menu.Item key="video">
                            <Icon type="youtube" />
                            视频
                        </Menu.Item>
                        <Menu.Item key="life">
                            <Icon type="smile" />
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    );
}
export default Header;
