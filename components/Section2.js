import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from "../controller/fetcher"
import {data} from '../pages/api/data'

const {Trending}=data
const imge =Trending[0].img
console.log(imge)
export default function Section2() {
    const { data, isLoading, isError } = fetcher("api/posts");
    if(isLoading)return <div>Loading</div>
    if(isError) return <div>Error</div>
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {
                    data.map((post, index) => (
                        <Post data={post} key={index} />
                    ))
                }
            </div>
        </section>
    )
}


function Post({ data }) {
    const { id, category, title, img, author, published, subtitle } = data
    return (
        <div className="item">
            <div className="images">
                <Link legacyBehavior href={`/posts/${id}`}><a><Image src={img || "#"} className="rounded" width={500} height={350} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link legacyBehavior href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
                    <Link legacyBehavior href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600">{published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={`/posts/${id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    {subtitle|| "Unknown"}
                </p>
                {author ? <Author></Author> : <></>}
            </div>
        </div>
    )
}

