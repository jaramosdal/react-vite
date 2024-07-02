# react-vite

`npm create vite@latest`

# Referencias

[Video de midudev](https://www.youtube.com/watch?v=7iobxzd_2wY&t=2227s)

[Documentación Vite](https://vitejs.dev/guide/)

[Documentación React](https://es.react.dev/)

[Wiki React](https://www.reactjs.wiki/)

# Estado

La actualización de estado en React es asíncrona

# Hooks

## useState

    const [state, setState] = useState(initalValue);
    const [state, setState] = useState(() => {
        // do things....
        return initialValue
     });

## useEffect

    useEffect(() => {
        first

        // Cleanup: ¿Cuándo se ejecuta esto?
        //    - Siempre que se desmonte el componente (es decir, que deje de aparecer)
        //    - Cada vez que cambian las dependencias, antes de ejecutar el efecto de nuevo
        return () => {
            second
        }

    }, [third])

Nos permite controlar cuándo nos vamos a suscribir a un evento
**IMPORTANTE:** siempre para suscribirnos a un evento con JavaSript, se debe meter dentro de un useEffect
Ejecuta un efecto según las dependencias que tenga definidas:

- [] -> solo se ejecuta una vez cuando se monta el componente
- [dep] -> se ejecuta cuando cambia "dep" y cuando se monta el componente
- undefined -> se ejecuta cada vez que se renderiza el componente
