
type FieldType = 'text' | 'email' | 'textarea' | 'password' | 'radio' | 'password' | 'date' | 'file'

export interface FieldQuery{
    name: string,
    type: FieldType,
    values?: string[]
}

export interface ButtonQuery{
    name: string,
    onClick:  () => void
}
export interface AdditionalLinkesQuery{
    text: string,
    linkText: string,
    href: string
}

export interface CardQuery{
    title: string,
    subTitle: string,
    description: string,
    list: string[],
    buttonText: string
    buttonFunction: () => void
}

export interface PrivacyQuery{
    title: string,
    description?: string,
    list?: string[]
}

type Media = {
    type: "image" | "audio",
    url: string
}

export interface CapsuleQuery{
    id: string,
    title: string,
    message: string,
    unlockDate: string,
    createdAt: string,
    isPublic: boolean,
    media: Media,
    sealed: boolean,
    userId: string
}

export interface LinkQuery{
    name: string,
    href: string,
}

export interface HowItWorksQuery{
    step: string,
    description: string
}