import Background from "../assets/pattern-1.png"

function PrimarySection({ children }) {
    return (
        <section
            style={{ backgroundImage: `url(${Background})` }}
            className="relative bg-primary w-full section-padding"
        >
            {children}
        </section>
    )
}

export default PrimarySection