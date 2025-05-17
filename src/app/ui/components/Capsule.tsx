import { CapsuleQuery } from '../../lib/defintions'

import Headline from './Headline'
import SubHeadLine from './SubHeadline'

export default function Capsule({capsule}: {capsule: CapsuleQuery}) {
    return (
        <a className='flex border border-node' href={`/capsule/${capsule.id}`}>
            <div className='bg-roseWater w-[50vw] min-h-30 p-5'>
            <Headline text={capsule.title} />
            </div>
            <div className='bg-sageGreen w-[40vw] min-h-30 p-5 flex items-center'>
            <SubHeadLine text={`unlock date: ${capsule.unlockDate}`} />
            </div>
        </a>
    )
}