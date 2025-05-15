import Field from './Field'
import Button from './Button'
export default function Form({fields, buttonText}) {
    return (
        <section>
            <form>
                  {fields.map(field => (
                      <Field type={field.type} placeholder={field.name} key={field.name}/>))}
                    <Button text={buttonText} />                   
                    </form>
        </section>
    )
}