import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import axios from 'axios'
import {Row, Col , List ,Icon ,Breadcrumb ,BackTop } from 'antd'
import Link from 'next/link'
import '../public/style/pages/index.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import servicePath  from '../config/apiUrl'
const BlogList = ({query}) => {
  const [ mylist , setMylist ] = useState([])
  useEffect(()=>{
      const fetchData = async ()=>{
        const result= await axios(servicePath.getBlogListByCategoryId+query.id).then(
              (res)=>{
                setMylist(res.data)
              }
            )
      }
      fetchData()
  },[query.id])
  return (
      <>
        <Head>
          <title>疯狂程序猿-这是一个基于next.js的初级博客网站</title>
        </Head>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
              
              <div>  
                  <div className="bread-div">
                    <Breadcrumb>
                      <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                      <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                    </Breadcrumb>
                  </div>  
                  <List
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
          </Col>
        </Row>
        <Footer/>
        <BackTop />
     </>
    )
}
// BlogList.getInitialProps = async(context) => {
//   let id =context.query.id
//   const res = await axios.get(servicePath.getBlogListByCategoryId+id)
//   return { data: res.data }
// }
BlogList.getInitialProps = ({query}) => {
  return {query}
}

export default BlogList