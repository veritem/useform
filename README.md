### useForm 

![npm](https://img.shields.io/npm/v/@veritem/useform)

Tiny hook to use form state in your component.

#### Usage

```ts
import useForm  from '@veritem/useform' 

export default function App(){
    const { handleChange , inputs } = useForm({
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
            <input type="text" name="name" value={inputs.name} onChange={handleChange}/>
            <input type="text" name="email" value={inputs.email} onChange={handleChange}/>
            <input type="text" name="password" value={inputs.password} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    </section>)
}
```

### License

[MIT](https://github.com/veritem/useform/blob/main/LICENSE) Licence &copy; 2022 - present [veritem](https://github.com/veritem)
