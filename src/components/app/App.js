import {React} from "react";
import AppLayout from "../templates/app-template";
import {Layout, PageHeader} from "antd";
import "./app.sass";
import PostList from "../organisms/post-list";
import SeachPanel from "../molecules/search-panel";
import PostStatusFilter from "../molecules/post-status-filter";

const {Header, Footer, Content} = Layout;

function App() {

    return (
        <AppLayout className="app-layout">
            <Layout>
                <Header>
                    <PageHeader className="site-page-header" title="Родин Андрей"/>
                </Header>
                <Content>
                    <PostStatusFilter/>
                    <PostList/>
                    <SeachPanel/>
                </Content>
                <Footer>
                    <p className="site-footer-content">Designed with Ant-design</p>
                </Footer>
            </Layout>
        </AppLayout>
    );
}

export default App;
