import next from "next"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import Author from "./_child/Author"
import fetcher from "../controller/fetcher"

export default function Section1() {
    const bg = {
        background: "url('/blogbg.png') no-repeat",
        backgroundPosition: "right"
        // backgroundSize:"600px"
    }
    const { data, isLoading, isError } = fetcher("api/trending");
    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error</div>
    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    speed={1700}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        data.map((value, index) => (
                            <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </section>
    )
}

function Slide({ data }) {
    const { id, category, title, img, author, published, subtitle } = data
    return (
        <div className="grid md:grid-cols-2">
            <div className="image" style={{borderRadius:'53px'}}>
                <Link legacyBehavior href={`/posts/${id}`}><a style={{borderRadius:'53px'}}><Image src={img || "#"} width={450} height={400} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link legacyBehavior href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange">{category || "Unknown"}</a></Link>
                    <Link legacyBehavior href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange">{published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={`/posts/${id}`}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"} </a></Link>
                </div>
                <p className="text-grey-500 py-3">
                    {subtitle || "Unknown"}
                </p>
                {author ? <Author></Author> : <></>}
            </div>
        </div>
    )
}