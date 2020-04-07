import React ,{useState,useEffect} from 'react'
import '../public/style/components/header.css'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath  from '../config/apiUrl'

import {Row,Col, Menu, Icon} from 'antd'
const Header = () => {
    const [navArray , setNavArray] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
           const result= await axios(servicePath.getCategoryList).then(
                (res)=>{
                    setNavArray(res.data)
                    return res.data
                }
              )
           setNavArray(result)
        }
        fetchData()
    },[])
    //跳转到列表页
    const handleClick = (e)=>{
        if(e.key==0){
            Router.push('/index')
        }else{
            Router.push('/list?id='+e.key)
        }


    }
    return (
        <div className="header">
          <Row type="flex" justify="center">
              <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                  <span className="header-logo"><a href="/">CrazyCoder</a></span>
                  {/* <span className="header-txt">Knowledge has no limit.</span> */}
              </Col>
      
              <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
              <Menu  
                    mode="horizontal"
                    onClick={handleClick}
                >
                    {
                        navArray.map((item)=>{
                        return(
                            <Menu.Item key={item.id}>
                                {item.name}
                            </Menu.Item>
                        )
                        }) 
                    }
                </Menu>
              </Col>
          </Row>
       </div>
      )
}

export default Header