import {Avatar,Divider,Tooltip } from 'antd'
import '../public/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="http://139.224.227.52/image/joker-logo.png"  /></div>
            <div className="author-introduction">
                学无止境<br/>
                Knowledge has no limit
                <Divider>社交账号</Divider>
                <Tooltip  title="waiting..."><Avatar size={28} icon="github" className="account"  /></Tooltip>
                <Tooltip  title="2269785643"><Avatar size={28} icon="qq"  className="account"/></Tooltip >
                <Tooltip  title="waiting..."><Avatar size={28} icon="wechat"  className="account"  /></Tooltip >

            </div>
        </div>
    )

}

export default Author