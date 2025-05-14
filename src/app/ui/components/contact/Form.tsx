export default function Form() {
    const fields = [
        {placeholder: 'Name', type: 'text'},
        {placeholder: 'Email', type: 'email'},
        {placeholder: 'Message', type: 'textarea'},
    ]
    return(
        <section>
            {fields.map(({ placeholder, type}, i) => (
                <h1 key={i}>{placeholder}, {type}</h1>
            ))}
        </section>
    )
}