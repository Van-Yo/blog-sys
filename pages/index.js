import React,{useState} from 'react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {Row, Col , List ,Icon} from 'antd'
import '../public/style/pages/index.css'
const Home = (list) => {
  console.log(list.data);
  const [myList,setMyList] = useState(list.data)
  return(
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left"  xs={24} sm={24} md={13} lg={13} xl={13}  >
          <List
            header={<div>日志列表</div>}
            dataSource={myList}
            itemLayout="vertical"
            renderItem={item=>(
              <List.Item>
                <div className="list-title" >
                  <Link href={{pathname:'/detailed',query:{_id:item._id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span><Icon type="calendar" /> {item.date}</span>
                  <span><Icon type="folder" /> {item.category===1?'博文':'生活'}</span>
                  <span><Icon type="fire" /> {item.hot}人</span>
                </div>
                <div className="list-context">{item.content}</div>
              </List.Item>
            )}
          />
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={5} lg={5} xl={5}>
          <Author/>
          <Advert/>
        </Col>
      </Row>
      <Footer/>
    </>
  )
}

Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios('http://localhost:3100/blogList/getBlogList').then(res=>{
      console.log(res.data)
      resolve({data:res.data})
    })
  })
  return await promise
}
export default Home