export default function Section({titulo, children}) {
    return (
        <section className="flex flex-col">
            <h1 className="text-3xl font-bold text-center p-3 bg-amber-200">{titulo}</h1>
            <div className="flex py-10 px-4 gap-10">
            {children}
            </div>
        </section>
    )
}