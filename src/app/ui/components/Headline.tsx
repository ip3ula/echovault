export default function Headline({text}: {text:string}) {
    return(
        <section>
         <h1 className="text-sageGreen text-center font-extrabold text-3xl py-5">{text}</h1>
        </section>
    )
}