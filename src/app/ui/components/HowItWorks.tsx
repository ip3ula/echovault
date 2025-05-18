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
            <h1 className="text-sageGreen text-center font-extrabold text-3xl py-5">How It Works</h1> 
               <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center p-5 py-15">
                 {howItWorks.map(({ step, description }, i) => (
                   <div key={i} className="border border-node">
                     <dt className="text-2xl text-white py-2 bg-roseWater text-center p-5 font-bold">{step}</dt>
                     <dd className="text-white text-xl pl-2 bg-sageGreen p-5 text-center">{description}</dd>
                   </div>
                 ))}
               </dl>
        </section>
    )
}