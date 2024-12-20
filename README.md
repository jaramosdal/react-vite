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

## useRef

Permite crear una referencia mutable que persiste durante todo el cliclo de vida del componente (persiste entre renders, su valor no se reinicia).
Cuando cambia, NO VUELVE A RENDERIZAR el componente.
También es útil para guardar referencias de elementos del DOM.

## useMemo

Memoriza un valor, para no tener que volverlo a calcular, dependiendo de unas dependencias.

## useCallback

Es lo mismo que el useMemo, pero pensado para funciones. Se puede usar useMemo, de hecho useCallback por debajo usa useMemo, es sólo para simplificar sintáxis (syntactic sugar).

## useContext

Algo separado de nuestro árbol de commponentes y que puedes leer de forma separada. Se realiza en 3 pasos:

- Crear el contexto
- Proveer el contexto
- Consumir el contexto

![Ejemplo](/images/filters.png)

# Custom Hooks

Es un Singleton, y sirve como una especie de inyector de dependencias.
Sirven para extraer la lógica de un componente:

- Gestión del estado
- useEffect
- Validaciones

Código de ejemplo:

    src\context\filters.jsx
    import { createContext, useState } from "react";

    // Este es el que tenemos que consumir
    export const FiltersContext = createContext();

    // Este es el que nos provee de acceso al contexto
    export function FiltersProvider({ children }) {
        const [filters, setFilters] = useState({
            category: "all",
            minPrice: 250,
        });

        return (
            <FiltersContext.Provider
                value={{
                    filters,
                    setFilters,
                }}
            >
                {children}
            </FiltersContext.Provider>
        );
    }

    src\main.jsx
    createRoot(document.getElementById("root")).render(
        <StrictMode>
            <FiltersProvider>
                <App />
            </FiltersProvider>
        </StrictMode>
    );

Si lo usamos para estados globales, tenemos que procurar que sean estados pequeños o que cambien con muy poca frecuencia.

# Despliegue

## Plataformas recomendadas por Midudev

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)

# packages.json

## peerDependencies

Aquí van aquellas dependencias que no instalará nuestra librería como tal, pero sí que allá donde se utilice la librería debe tener esas dependencias instaladas.
