export default function Section({titulo, children}) {
    return (
        <section>
            <h1>{titulo}</h1>
            {children}
        </section>
    )
}