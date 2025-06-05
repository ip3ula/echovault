export default function Paragraph({text} : {text: string}) {
    return(
        <section>
            <p className="text-center font-bold text-xl md:text-2xl">{text}</p>
        </section>
    )
}