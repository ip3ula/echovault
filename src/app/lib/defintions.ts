
type FieldType = 'text' | 'email' | 'textarea' | 'password' | 'radio' | 'password' | 'date' | 'file'

export type Field = {
    name: string,
    type: FieldType,
    value?: string | File,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    values?: string[]
}

export type Button = {
    name: string,
    onClick:  () => void
}

type AdditionalLinkes = {
    text: string,
    linkText: string,
    href: string
}

export interface FormQuery{
    headline: string,
    subHeadline: string,
    fields: Field[],
    buttons: Button[],
    additionalLinks?: AdditionalLinkes[]
}

export interface CardQuery{
    title: string,
    subTitle: string,
    description: string,
    list: string[],
    buttonText: string
    buttonFunction: () => void
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