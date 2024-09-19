import Hero from "@/components/shared/Hero";
import LatestPost from "@/components/shared/LatestPost";
import TopPost from "@/components/shared/TopPost";

const Home  = () => {
    return (
        <>
            <Hero/>
            <div
                className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 w-[95%] overflow-y-hidden h-fit mt-10"
            >
                <LatestPost/>
                <TopPost/>
            </div>
        </>
    )
}

export default Home

