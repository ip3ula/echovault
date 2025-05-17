import Headline from "./Headline";
import { HowItWorksQuery } from "../../lib/defintions";

export default function HowItWorks() {
    const howItWorks: HowItWorksQuery[] = [
        {
          step: 'Write your message',
          description: 'Share a thought, letter, wish, or memory. It can be text, a photo, or even a voice recording.',
        },
        {
          step: 'Set a future date',
          description: 'Choose when your capsule will unlock — weeks, months, or even years from now.',
        },
        {
          step: 'Seal it',
          description: 'We’ll keep it safe. When the day comes, open it and rediscover your moment.',
        },
      ];
    return (
        <section className="py-10 px-5">
               <Headline text="How It Works"/>
               <dl className="px-5 flex flex-col gap-5">
                 {howItWorks.map(({ step, description }, i) => (
                   <div key={i}>
                     <dt className="text-2xl text-sageGreen py-2"><span className="font-bold text-roseWater">Step {i + 1} - </span>{step}</dt>
                     <dd className="text-stone-400 text-xl pl-2">{description}</dd>
                   </div>
                 ))}
               </dl>
        </section>
    )
}