import React,{useState} from 'react'
import Head from 'next/head'
import axios from 'axios'
import {Row, Col ,Affix, Icon ,Breadcrumb  } from 'antd'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import Tocify from '../components/tocify.tsx'
import servicePath  from '../config/apiUrl'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../public/style/pages/detailed.css'
const Detailed = (list) => {
  const [ mylist , setMylist ] = useState(list.data[0])
  /**
     * marked && highlight
    */
   const tocify = new Tocify()
   const renderer = new marked.Renderer();
   renderer.heading = function(text, level, raw) {
      const anchor = tocify.add(text, level);
      return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };
   marked.setOptions({
       renderer: renderer,
       gfm: true,
       pedantic: false,
       sanitize: false,
       tables: true,
       breaks: false,
       smartLists: true,
       smartypants: false,
       xhtml: false,
       highlight: function (code) {
               return hljs.highlightAuto(code).value;
       }
   });

    let html = marked(list.data[0].content) 

  return (
    <>
      <Head>
        <title>{mylist.title}</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  {/* <Breadcrumb.Item>视频列表</Breadcrumb.Item> */}
                  <Breadcrumb.Item>{mylist.title}</Breadcrumb.Item>
                </Breadcrumb>
              </div>

             <div>
                <div className="detailed-title">
                  {mylist.title}
                </div>

                <div className="list-icon center">
                  <span><Icon type="calendar" />{mylist.date}</span>
                  <span><Icon type="folder" />{mylist.category}</span>
                  <span><Icon type="fire" /> </span>
                </div>

                <div className="detailed-content" dangerouslySetInnerHTML = {{__html:html}}>
                    
                </div>

             </div>

            </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          {/* <Advert /> */}
          <Affix offsetTop={8}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer/>

   </>
  )
}
Detailed.getInitialProps = async(context) => {
  console.log(context.query.id)
  let id =context.query.id
  const res = await axios.get(servicePath.getBlogDetailById+id)
  return { data: res.data }
}
export default Detailed