
interface tagProps {
    text: string[];
}

const Tag = ({text}:tagProps) => {
    return (
        <>
            <span className="uppercase bg-darkBlue text-white py-1 px-3 inline-block rounded-md text-sm self-center my-2">
                {text}
            </span>
        </>
    )
}

export default Tag