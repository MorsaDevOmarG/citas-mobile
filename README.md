# Proyecto Citas

- Creación del proyecto:
  - **_npx @react-native-community/cli init nombreProyecto_**
- Tener _AndroidStudio_, instalado y abierto, ejecutamos:
  - **_npx react-native run-android_**

## Componentes React Native
1. Todos los contenedores son VIEW.
    - Text: Debe ser un texto, ejemplo: LABEL
    - Button
    - View: es como un DIV html
    - StyleSheet
    - Pressable: es como un BUTTON
    - Alert
    - ScroView
    - FlatList
    - Modal
    - Picker: es como un SELECT
    - Image

### JSX
1. Extensión de lenguaje para REACT.
1. Es JS pero soporta etiquetas y componentes como HTML, basicamente es un lenguaje de Template que muestra el HTML pero tiene todas las funciones de JS.

**REGLAS:**
1. A diferencia de HTML, no es estricto.
1. Si un elemento HTML tiene una etiqueta de apertura, deberás tener también la
de cierre, no se pondrá sola.
1. Cada componente debe tener un return que es lo que se mostrará en pantalla.
1. En este return debe haber máximo un solo elemento en el nivel máximo.

### HOOKS
1. Están disponibles desde la versión 16.8, antes de ello se ten´ían que crear clases
para crear y modificar el STATE, con los HOOKS no es necesario.
1. Los HOOKS se dividen en básicos y adicionales.

**CATEGORIAS:**

- useState
- useEffect
- useContext

**Adicionales:**

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

**Ventajas:**

- Crear propios hooks, de esta forma podrás separar tu código en funciones reutilizables y sacar todo el beneficio de lo que REACT ofrece.

**REGLAS:**

1. Se colocan en la parte superior de tus componentet en REACT.
1. No se deben colocar dentro de condicionales.
1. Tampoco se coloan después de un RETURN.

### EVENTOS
- La forma en que _React_ maneja lo eventos son muy similat a como lo hace _JS_ de forma nativa con algunos cambios.
- Los eventos son: **camelCase**, es decir; en lugar de _onchange_ se utiliza: **onChange**, _onclick_ -> **onClick**.
- _React Native_ tiene una serie de eventos optimizados para teléfonos móviles como: presionar o dejar presionado un botón por mucho tiempo.

### STATE
1. Muestra el estado de la app.
1. Es una variable de información relevante en nuestra app, algunas veces el STATE pertenece a un componente en específico o algunas veces deseas compartirlo a lo largo de diferentes componentes.
1. El STATE es creado con la funcion: useState();

**Ejemplo:**

```
    const [cliente, setCliente] = useState({});
    const [cliente, setCliente] = useState(0);
    const [cliente, setCliente] = useState([]);
    const [cliente, setCliente] = useState(false);
```

- React reacciona en base al STATE, cada que el STATE cambia, la APP se va renderizando y actualiza los cambios.
- Para modificar el STATE, se utiliza la función que extraemos cuando declaramos el STATE en nuestro componente.

## Instalaciones

1. Dentro del PROYECTO, instalremos DEVTOOLS, abrimos POWERSHELL:
`npm i react-devtools`

1. **PROPS:**
    - Son variables o funciones de otros componentes.

1. El STATE o FUNCIONES que crees en tus componenetes, solo estarán disponibles en ese componentet.
1. Una forma de evitar duplicar código y reutilizar esas variables, state o estado y funciones en otros componentes es por medio de PROPS o PROPIEDADES.
1. Los PROPS se pasan del padre al hijo, nunca se pueden pasar del hijo al padre.

1. Si tienes un STATE que se va a pasar por diferentes componentes, lo mejor es colocarlo en el archivo principal.
1. Cada nivel de componente deberá tomar y pasar el PROP hacia otros componentes, tecnologías como REDUX o CONTEXT evitan tener que hacerlo de esta forma.

#### **INSTALAR DATE PICKER**
- `npm i react-native-date-picker`
- SOLO SI INSTALARAS LA APP EN IOS
```
    cd ios
    pod install
```

#### **useEffect:**
1. Es el más utilizado después de useState.
2. Siempre es un callback que se ejecuta cuando un STATE cambia o cuando el componente esta listo.
1. Es el sustituto de lo que antes era: componentDidMount() y: componentDidUpdate()
1. Al ejecutarse automaticamente cuando el componente esta listo, es un excelente lugar para colocar código para consultar una API o LocalStorage.
1. Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que sucendan en una variable, puede actualizar el componente cuando ese cambio suceda.