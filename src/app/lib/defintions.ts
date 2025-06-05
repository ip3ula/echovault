
type FieldType = 'text' | 'email' | 'textarea' | 'radio' | 'password' | 'date' | 'file'

export type Field = {
    name: string,
    type: FieldType,
    value?: string | File,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    values?: string[]
}

export type Button = {
    name: string,
    type?: "button" | "submit" | "reset",
    onClick:  string | ((...args: unknown[]) => unknown),
}

type AdditionalLinkes = {
    text: string,
    linkText: string,
    href: string
}
type FormData = {
    title: string,
    message: string,
    unlockDate: string,
    isPublic: boolean,
}
export interface FormQuery{
    headline?: string,
    subHeadline?: string,
    fields?: Field[],
    formData?: FormData,
    setFormData?: React.Dispatch<React.SetStateAction<FormData>>,
    buttons?: Button[],
    additionalLinks?: AdditionalLinkes[],
    message?: string,
}

export interface CardQuery{
    title: string,
    subTitle: string,
    description: string,
    list: string[],
    buttonText: string
    buttonFunction: () => void
}

export interface CapsuleQuery{
    id: string,
    title: string,
    message?: string | null,
    unlockDate?: string,
    createdAt?: string,
    isPublic?: boolean,
    sealed?: boolean,
    userId?: string
}

export interface LinkQuery{
    name: string,
    href: string,
}

export interface HowItWorksQuery{
    step: string,
    description: string
}