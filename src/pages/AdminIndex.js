import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Alert } from 'antd';
import { Route} from 'react-router-dom';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';
import '../static/css/AdminIndex.css';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props) {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };
  const handleClickArticle = e => {
    console.log(e.item.props);
    if (e.key === 'addArticle') {
      props.history.push('/index/add');
    } else {
      props.history.push('/index/list');
    }
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">分享知识就是赚钱</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>添加文章</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            onClick={handleClickArticle}
            title={
              <span>
                <Icon type="user" />
                <span>文章管理</span>
              </span>
            }>
            <Menu.Item key="addArticle">添加文章</Menu.Item>
            <Menu.Item key="articleList">文章列表</Menu.Item>
          </SubMenu>

          <Menu.Item key="9">
            <Icon type="file" />
            <span>留言管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
        <Content style={{ margin: '0 16px' }}>
					<Alert message="不停地写，大量地写，现在就开始写。长期写，你会意识到这给自己带来的巨大价值。" type="error" />
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <div>
									<Route path="/index/" exact component={AddArticle} />
									<Route path="/index/add" exact component={AddArticle} />
									<Route path="/index/add/:id" exact component={AddArticle} />
 									<Route path="/index/list" exact component={ArticleList} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Fire1024.com</Footer>
      </Layout>
    </Layout>
  );
}

export default AdminIndex;
