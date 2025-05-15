export default function HowItWorks() {
    const howItWorks = [
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
        <section>
               <h1>How It Works</h1>
               <dl>
                 {howItWorks.map(({ step, description }, i) => (
                   <div key={i}>
                     <dt><span>Step {i + 1} - </span>{step}</dt>
                     <dd>{description}</dd>
                   </div>
                 ))}
               </dl>
        </section>
    )
}