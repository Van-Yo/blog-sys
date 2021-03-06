import React,{useState} from 'react'
import Head from 'next/head'
import axios from 'axios'
import {Row, Col , List ,Icon,BackTop} from 'antd'
import Link from 'next/link'
import '../public/style/pages/index.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
// import DateCs from '../components/DateCs'
import servicePath  from '../config/apiUrl'
const Home = (list) => {
  const [ mylist , setMylist ] = useState(list.data)
  return (
      <>
        <Head>
          <title>疯狂程序猿-这是一个基于next.js的初级博客网站</title>
        </Head>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
              <div>    
                  <List
                      header={<div>最新日志</div>}
                      itemLayout="vertical"
                      dataSource={mylist}
                      renderItem={item => (
                      <List.Item>
                          <div className="list-title">
                            <Link href={{pathname:'/detailed',query:{id:item._id}}}>
                              <a>{item.title}</a>
                            </Link>
                          </div>
                          <div className="list-icon">
                          <span><Icon type="calendar" /> {item.date}</span>
                          <span><Icon type="folder" /> {item.category}</span>
                          <span><Icon type="fire" /></span>
                          </div>
                          <div className="list-context">{item.brief}</div>  
                      </List.Item>
                      )}
                  />    
              </div>
          </Col>
    
          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author />
            {/* <Advert /> */}
            {/* <DateCs /> */}
          </Col>
        </Row>
        <Footer/>
        <BackTop />
     </>
    )
}
Home.getInitialProps = async() => {
  const res = await axios.get(servicePath.getBlogList)
  return { data: res.data }
}


export default Home