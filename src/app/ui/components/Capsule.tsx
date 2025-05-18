import { CapsuleQuery } from '../../lib/defintions'

import Headline from './Headline'
import SubHeadLine from './SubHeadline'

export default function Capsule({capsule}: {capsule: CapsuleQuery}) {
    const date = new Date(capsule.unlockDate);
const formatted = date.toLocaleDateString(); 
    return (
        <a className='border border-node grid grid-cols-5 w-[90vw] md:w-[45vw]' href={`/capsule/${capsule.id}`}>
            <div className='bg-roseWater col-span-3 min-h-30 p-5'>
            <Headline text={capsule.title} />
            </div>
            <div className='bg-sageGreen col-span-2 min-h-30 max-h-auto p-5'>
            <SubHeadLine text={`unlock date: ${formatted}`} />
            </div>
        </a>
    )
}