import Headline from "../ui/components/Headline";
import Paragraph from "../ui/components/Paragraph";

export default function Page() {
    return(
        <div className="py-20 flex justify-center sm:py-40">

        <div className="w-[90vw] sm:w-[70vw] grid flex-col-1 sm:grid-cols-3 border border-node">
                    <div className="bg-roseWater p-5 sm:col-span-1">
         <Headline text="Why We Built This" />
                    </div>
                    <div className="bg-sageGreen p-5 sm:col-span-2 text-white">
                 <Paragraph text="Life moves fast. We forget how we felt, what we hoped for, or what we feared.
         EchoVault is a digital time capsule — a place to speak to your future self, record a memory, or share a message to the world.
         Whether it’s a dream you’re chasing, a moment you want to hold onto, or a letter you need to read later — this is your space.
         We believe reflection is powerful. Writing to the future can help you understand the present."/>
         <Paragraph text="Made with 💻 and ☕ by Paula — a developer who believes memories deserve safe places.
         "/>
                    </div>
                </div>
        </div>
    )
}