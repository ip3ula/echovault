
export default function Headline({text}: {text:string}) {
    return(
        <section>
         <h1 className={`text-white text-center font-extrabold text-3xl md:text-4xl font-share`}>{text}</h1>
        </section>
    )
}