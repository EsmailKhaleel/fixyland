import FadeIn from "./FadeIn"

function BatchText({text}) {
    return (
        <FadeIn className="text-sm tracking-widest text-primary font-semibold uppercase bg-white px-3 py-1 rounded-sm inline-block">
            {text}
        </FadeIn>
    )
}

export default BatchText