### useForm 

![npm](https://img.shields.io/npm/v/@veritem/useform)

Tiny hook to use form state in your component.

## Usage

```ts
import useForm  from '@veritem/useform' 

export default function App(){
    const {form, handleChange,inputs} = useForm({
        name: '',
        email: '',
        password: ''
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
    }

    return (<section> 
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={form.name} onChange={handleChange}/>
            <input type="text" name="email" value={form.email} onChange={handleChange}/>
            <input type="text" name="password" value={form.password} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    </section>)
}
```

### License

[MIT](https://github.com/veritem/eslint-plugin-vitest/blob/main/LICENSE) Licence &copy; 2022 - present [veritem](https://github.com/veritem)
