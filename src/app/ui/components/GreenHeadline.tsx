export default function Headline({text}: {text:string}) {
    return(
        <div className="lg:px-80">
            <h1 className="text-sageGreen text-center font-extrabold text-3xl lg:text-4xl pt-15 pb-5">{text}</h1>
        </div>

    )
}