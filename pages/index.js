import Layout from "../components/layout"
import Head from "next/head"
import Table from "../components/table.js"
import Header from '../components/header.js'

function HomePage() {

    return (
        <Layout>
            <Head>
                <title>Lost Ark Checklist</title>
            </Head>
            
            <Header />

            <Table/>
        </Layout>

    )
}

export default HomePage