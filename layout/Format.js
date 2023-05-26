import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Format({children}){
    return(
        <>
        <Head>
            <title>Blog</title>
        </Head>

            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}