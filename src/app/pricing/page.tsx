'use client'

import { CardQuery } from "../lib/defintions"

import Cards from "../ui/components/Cards"

export default function Page() {
    const handleFree = () => {

    }
    const handlePremium = () => {

    }
    const handleLT = () => {

    }
    const planes: CardQuery[] = [
        {title: 'Free Plan', subTitle: '$0 / month', description: 'Perfect for getting started.', list: ['Create up to 5 capsules', 'Sealed capsules with unlock dates', 'Share public capsules', 'Secure storage', 'Access from any device'], buttonText: 'Choose Free Plan', buttonFunction: handleFree },
        {title: 'Premium Plan', subTitle: '$4.99 / month', description: 'For memory makers and future thinkers.', list: ['Unlimited capsules', 'Custom capsule themes', 'Upload images or voice messages', 'Early access to new features', 'Priority support'], buttonText: 'Upgrade to Premium', buttonFunction: handlePremium },
        {title: 'Lifetime Plan', subTitle: '$49 one-time', description: 'Pay once, enjoy Echo Vault forever.', list: ['All premium features', 'One-time payment', 'Never worry about renewals  '], buttonText: 'Get Lifetime Access', buttonFunction: handleLT },
    ]
    return(
        <div className="pt-20">
         <Cards object={planes} />
         </div>
    )
}