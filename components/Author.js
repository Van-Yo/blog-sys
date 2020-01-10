import {Avatar,Divider} from 'antd'
import '../public/style/components/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="http://139.224.227.52/image/joker-logo.png"  /></div>
            <div className="author-introduction">
                She always tells me to smile, and put on a happy face.
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />

            </div>
        </div>
    );
}

export default Author;
