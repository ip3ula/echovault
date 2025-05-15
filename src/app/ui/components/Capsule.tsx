import Headline from './Headline'
import SubHeadLine from './SubHeadline'

export default function Capsule({title, date}) {
    return (
        <section>
            <Headline text={title} />
            <SubHeadLine text={`unlock date: ${date}`} />
        </section>
    )
}