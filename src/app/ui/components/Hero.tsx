import Headline from './Headline'
import SubHeadline from './SubHeadline'
import Button from "./Button";

export default function Hero() {
    return (
        <section>
         <Headline text="Save a message for your future self" />
      <SubHeadline text="Lock it away. Open it years later. A time capsule for your thoughts, memories, and dreams." />
      <Button text="Create Your Capsule" />
        </section>
    )
}