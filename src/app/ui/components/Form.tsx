import { FormQuery } from '../../lib/defintions'

import Headline from './headlines/Headline'
import SubHeadLine from './headlines/SubHeadline'
import Field from './common/Field'
import Button from './common/Button'
export default function Form({form}: {form: FormQuery}) {
    return (
        <div className="w-[90vw] lg:w-[70vw]  grid flex-col-1 lg:grid-cols-3 border border-node">
            
            <div className="bg-roseWater py-15 px-10 lg:col-span-1 flex flex-col gap-3 lg:gap-5 items-center justify-start">
                <Headline text={form.headline ?? ''} />
                <SubHeadLine text={form.subHeadline ?? ''} />
                <p className='text-red-400 text-center'>{form.message}</p>
            </div>
            <div className="bg-sageGreen p-2 sm:p-5 lg:col-span-2">

        <section className='py-15'>
            <form className='flex flex-col gap-2 lg:gap-4 items-center justify-center'>
                  {form.fields?.map(field => (
                      <Field field={field} key={field.name} />))}
                      <div className='mt-15 flex flex-col gap-3 w-full items-center'>
                  {form.buttons?.map(button => (
                    <Button button={button} key={button.name} />                   
                  ))}
                      </div>
                    </form>
        </section>
        <div className='flex flex-col items-center pb-10'>
            {form.additionalLinks && form.additionalLinks.map(({text, linkText, href}) => (
                    <div key={text} className='flex gap-2'>
                    <SubHeadLine text={text} />
                    <a className='font-extrabold text-roseWater lg:text-2xl' href={href}>{linkText}</a>
                    </div>
            ))}
        </div>
            </div>
        </div>
    )
}