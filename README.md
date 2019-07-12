> **Advertencia**: este tutorial se desarrolló usando [React v16.8](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html), pero utiliza [*class components*](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class) para manejar el estado de los componentes y por lo tanto no utiliza [*Hooks*](https://reactjs.org/docs/hooks-intro.html)

# Fases
Este tutorial se divide en fases, para crear la aplicación [**React tutorial**](https://dahc36.github.io/react-tutorial/). Cada fase va creando cada uno de los componentes que forman la aplicación.

Las Fases son:
1. [**app-component**](#Fase-1-app-component): Proyecto base limpio con un solo componente funcional (que no hace nada)
2. [**counter-component**](#Fase-2-counter-component): Componente "Contador", que mantiene un valor (0 inicialmente) y le va sumando 1.
3. [**timer-component**](#Fase-3-timer-component): Componente "Timer", que mantiene un valor (0 inicialmente) y va aumentando su valor en 0.1 cada décima de segundo, mientras se encuentre iniciado.
4. [**to-do-component**](#Fase-4-to-do-component): Componente "To Do", que puede agregar palabras o frases a una lista de cosas por hacer y modificar su estado de realizadas.
5. [**swapi-search-component**](#Fase-5-swapi-search-component): Componente "SWAPI Search", que permite buscar personajes de la saga Star Wars con palabras clave (utilizando [SWAPI](https://swapi.co/)).

Cada una de estas fases representa un tag del proyecto git, por lo que se puede visitar el código final de cada fase usando: `$ git checkout fase-<número>` o: `$ git checkout <nombre-fase>`

# Fase 1: app-component

## Pasos
1. Se creó el proyecto usando [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
1. Se eliminó el código innecesario, dejando solo el archivo `index.js` que utiliza el método `ReactDOM.render` para montar la aplizazión React a `<div id="root">` y un componente funcional `App.js` en `src/`
1. Se creó el archivo `.env` para hacer `imports` absolutos

## Código
**Terminal**
```bash
$ npx create-react-app react-tutorial
$ cd react-tutorial
$ npm start
```
**src/index.js**
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
```
**src/App.js**
```jsx
import React from 'react';

const App = function() {
    return <h1>App component</h1>;
};

export default App;
```
**.env**
```jsx
NODE_PATH=src
```

# Fase 2: counter-component
## Crear componente `Counter` base
### Pasos
1. Se creó la carpeta `components` en `src/`
1. Se creó la carpeta `Counter` en `src/components`
1. Se creó el archivo `index.js` en `src/components/Counter`
1. Se importó el nuevo componente a `src/App.js` y se agregó el componente `Fragment` para agregar más tags HTML sin necesidad de crear otro `<div>`

### Código
**src/components/Counter/index.js**
```jsx
import React from 'react';

const Counter = function() {
    return (
        <h1>Counter</h1>
    );
};

export default Counter;
```
**src/App.js**
```jsx
import React, { Fragment } from 'react';
import Counter from 'components/Counter';

const App = function() {
    return (
        <Fragment>
            <h1>App component</h1>
            <hr/>
            <Counter />
        </Fragment>
    );
};

export default App;
```

## Crear componente `Values` y comunicar valor a través de `prop`
### Pasos
1. Se creó archivo `Values.js` en `src/components/Counter`
1. Se importó el nuevo archivo a `Counter.js`
1. Se pasó el valor `value` como una prop al componente `Values`

### Código
**src/components/Counter/Values.js**
```jsx
import React from 'react';

const Values = function(props) {
    return (
        <div>
            <p>Value: {props.value}</p>
        </div>
    );
};

export default Values;
```
**src/components/Counter/index.js**
```jsx
import React from 'react';

import Values from './Values';

const Counter = function() {
    let value = 1;

    return (
        <div>
            <h2>Counter</h2>
            <Values value={value} />
        </div>
    );
};

export default Counter;
```

## Crear componente `Buttons` con comportamiento para evento `onClick`
### Pasos
1. Se creó el archivo `Buttons.js` en `src/components/Counter`
1. Se importó el nuevo archivo a `Counter.js`
1. Se creó un botón con comportamiento para el evento `onClick`

### Código
**src/components/Counter/Buttons.js**
```jsx
import React from 'react';

const Buttons = function(props) {
    const handleClick = event => {
        console.log('Clicked!');
    }

    return (
        <div>
            <button onClick={handleClick} >Click Me!</button>
        </div>
    );
};

export default Buttons;
```
**src/components/Counter/index.js**
```jsx
import React from 'react';

import Buttons from './Buttons';
import Values from './Values';

const Counter = function() {
    let value = 1;

    return (
        <div>
            <h2>Counter</h2>
            <Values value={value} />
            <Buttons />
        </div>
    );
};

export default Counter;
```

## Transformar componente `Counter` a componente basado en clase y entregar comportamiento para `onClick` por `prop`
### Pasos
1. Se modificó el componente `Buttons` para recibir el comportamiento para `onClick` por `prop`
1. Se modificó el componente `Counter` para ser basado en clase y poder manejar estado
1. Se modificó el comportamiento para `onClick`, para que modifique el estado usando el método `setState`
1. Se agregaron ejemplos de algunos métodos `lifecycle` de todo componente basado en clase al componente `Counter` ([ver diagrama](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/))

### Código
**src/components/Counter/Buttons.js**
```jsx
import React from 'react';

const Buttons = function(props) {
    return (
        <div>
            <button onClick={props.onClick} >Click Me!</button>
        </div>
    );
};

export default Buttons;
```
**src/components/Counter/index.js**
```jsx
import React, { Component } from 'react';

import Buttons from './Buttons';
import Values from './Values';

class Counter extends Component {
    state = {
        value: 1,
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    handleClick = _ => {
        this.setState(state => ({
            value: state.value + 1,
        }));
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <Values value={this.state.value} />
                <Buttons onClick={this.handleClick} />
            </div>
        );
    }
};

export default Counter;
```

## Separar componente `Counter` en componentes contenedor y presentacional
### Pasos
1. Se creó a carpeta `containers` en `src/components/Counter`
1. Se creó el archivo `Counter.js` en `src/components/Counter/containers`
1. Se modificó el componente `Counter` para adaptarse a las recomendaciones del artículo [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
1. Se modificó la ruta para importar el componente `Counter` en `src/App.js`

### Código
**src/components/Counter/index.js**
```jsx
import React from 'react';

import Buttons from './Buttons';
import Values from './Values';

const Counter = function(props) {
    return (
        <div>
            <h2>{props.label}</h2>
            <Values value={props.value} />
            <Buttons label={props.clickLabel} onClick={props.onClick} />
        </div>
    );
};

export default Counter;
```
**src/components/Counter/containers/Counter.js**
```jsx
import React, { Component } from 'react';

import PresentationCounter from 'components/Counter';

class ContainerCounter extends Component {
    state = {
        value: 1,
    }

    handleClick = _ => {
        this.setState(state => ({
            value: state.value + 1,
        }));
    }

    render() {
        return (
            <PresentationCounter
                value={this.state.value}
                label="Counter"
                clickLabel="Add one"
                onClick={this.handleClick}
            />
        );
    }
};

export default ContainerCounter;
```
**src/App.js**
```jsx
import React, { Fragment } from 'react';

import Counter from 'components/Counter/containers/Counter';

const App = function() {
    return (
        <Fragment>
            <h1>App component</h1>
            <hr/>
            <Counter />
        </Fragment>
    );
};

export default App;
```

# Fase 3: timer-component
## Pasos
1. Se creó un nuevo componente contenedor `Timer` en `src/components/Counter/containers`, utilizando el componente presentacional del `Counter`
1. Se modificó el componente presentacional para mejorar la apariencia de ambos componentes contenedores
1. Se importó el nuevo componente a `src/App.js`

## Código
**src/components/Counter/containers/Timer.js**
```jsx
import React, { Component } from 'react';

import PresentationCounter from 'components/Counter';

class ContainerTimer extends Component {
    state = {
        timeout: null,
        timerStarted: false,
        value: 0,
    }

    handleClick = _ => {
        if (this.state.timerStarted) {
            clearInterval(this.state.timeout);
            this.setState(_ => ({
                timeout: null,
                timerStarted: false,
            }));
        } else {
            const timeout = setInterval(_ => {
                this.setState(state => ({
                    value: state.value + 0.1,
                }));
            }, 100);
            this.setState(_ => ({
                timeout,
                timerStarted: true,
            }));
        }
    }

    render() {
        return (
            <PresentationCounter
                clickLabel={this.state.timerStarted ? 'STOP' : 'START'}
                label="Timer"
                onClick={this.handleClick}
                value={Math.round(this.state.value * 10) / 10}
            />
        );
    }
};

export default ContainerTimer;
```
**src/components/Counter/index.js**
```jsx
import React from 'react';

import Buttons from './Buttons';
import Values from './Values';

const Counter = function(props) {
    return (
        <div
            style={{
                display: 'inline-block',
                textAlign: 'center',
                width: '50%',
            }}
        >
            <h2>{props.label}</h2>
            <Values value={props.value} />
            <Buttons label={props.clickLabel} onClick={props.onClick} />
        </div>
    );
};

export default Counter;
```
**src/App.js**
```jsx
import React, { Fragment } from 'react';

import Counter from 'components/Counter/containers/Counter';
import Timer from 'components/Counter/containers/Timer';

const App = function() {
    return (
        <Fragment>
            <h1>App component</h1>
            <hr />
            <Counter />
            <Timer />
        </Fragment>
    );
};

export default App;
```

# Fase 4: to-do-component
## Crear formulario y sus comportamientos
### Pasos
1. Se creó la carpeta `ToDo` en `src/components`
1. Se creo el archivo `index.js` en `src/components/ToDo`
1. Se importó el nuevo componente a `src/App.js`

### Código
**src/components/ToDo/index.js**
```jsx
import React, { Component } from 'react';

class ToDo extends Component {
    state = {
        inputValue: 'ejemplo',
        formValue: '',
    }

    handleInputChange = event => {
        const { target } = event;
        this.setState(_ => ({ inputValue: target.value }));
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState(_ => ({ formValue: this.state.inputValue }));
    }

    render () {
        return (
            <div>
                <h2>To Do</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange} />
                    <button>Add</button>
                </form>
                <p>{this.state.formValue}</p>
            </div>
        );
    }
};

export default ToDo;
```
**src/App.js**
```jsx
import React, { Fragment } from 'react';

import Counter from 'components/Counter/containers/Counter';
import Timer from 'components/Counter/containers/Timer';
import ToDo from 'components/ToDo';

const App = function() {
    return (
        <Fragment>
            <h1>App component</h1>
            <hr/>
            <Counter />
            <Timer />
            <hr/>
            <ToDo />
        </Fragment>
    );
};

export default App;
```

## Encapsular formulario en componente
### Pasos
1. Se creó el archivo `Form.js` en `src/components/ToDo` para aislar el manejo de input y form
1. Se modificó el comportamiento del componente `ToDo` para utilizar el nuevo componente `Form`

### Código
**src/components/ToDo/Form.js**
```jsx
import React, { Component } from 'react';

class ToDoForm extends Component {
    state = {
        inputValue: '',
    }

    handleInputChange = event => {
        const { target } = event;
        this.setState(_ => ({ inputValue: target.value }));
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue);
        this.setState(_ => ({ inputValue: '' }));
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange} />
                <button>{this.props.label}</button>
            </form>
        );
    }
};

export default ToDoForm;
```
**src/components/ToDo/index.js**
```jsx
import React, { Component } from 'react';

import ToDoForm from 'components/ToDo/Form';

class ToDo extends Component {
    state = {
        formValue: '',
    }

    handleSubmit = inputValue => {
        this.setState(_ => ({ formValue: inputValue }));
    }

    render () {
        return (
            <div>
                <h2>To Do</h2>
                <ToDoForm
                    label="Add"
                    onSubmit={this.handleSubmit}
                />
                <p>{this.state.formValue}</p>
            </div>
        );
    }
};

export default ToDo;
```

## Crear componente para mostrar lista
### Pasos
1. Se creó el archivo `List.js` en `src/components/ToDo`
1. Se importó el nuevo componente al componente `ToDo`

### Código
**src/components/ToDo/List.js**
```jsx
import React from 'react';

const ToDoList = function(props) {
    const renderList = function(list) {
        return list.map((item, index) => (
            <li key={index} >{item}</li>
        ));
    }

    return (
        <ul>
            {renderList(props.list)}
        </ul>
    );
};

export default ToDoList;
```
**src/components/ToDo/index.js**
```jsx
import React, { Component } from 'react';

import ToDoForm from 'components/ToDo/Form';
import ToDoList from 'components/ToDo/List';

class ToDo extends Component {
    state = {
        list: [],
    }

    handleSubmit = inputValue => {
        const list = [ ...this.state.list ];
        list.push(inputValue);
        this.setState(_ => ({ list }));
    }

    render () {
        return (
            <div>
                <h2>To Do</h2>
                <ToDoForm
                    label="Add"
                    onSubmit={this.handleSubmit}
                />
                <ToDoList list={this.state.list} />
            </div>
        );
    }
};

export default ToDo;
```

## Agregar checkboxes a componente `List`
### Pasos
1. Se modificó el componente `List` para poder manejar el estado de `checked` de cada item

### Código
**src/components/ToDo/List.js**
```jsx
import React, { Component } from 'react';

class ToDoList extends Component {
    state = {
        checkList: {},
    }

    handleCheckboxChange = index => event => {
        const { target } = event;
        this.setState(state => ({
            checkList: {
                ...state.checkList,
                [index]: target.checked,
            },
        }));
    }

    renderList = list => {
        return list.map((item, index) => {
            const checked = this.state.checkList[index] ? true : false;
            return (
                <li key={index} style={{ listStyleType: 'none' }} >
                    <input id={`check-input-${index}`} type="checkbox" checked={checked} onChange={this.handleCheckboxChange(index)} />
                    <label
                        htmlFor={`check-input-${index}`}
                        style={{ textDecorationLine: checked ? 'line-through' : 'none' }}
                    >
                        {item}
                    </label>
                </li>
            );
        });
    }
    
    render() {
        return (
            <ul>
                {this.renderList(this.props.list)}
            </ul>
        );
    }
};

export default ToDoList;
```

# Fase 5: swapi-search-component
## Pasos
1. Se intaló [axios](https://github.com/axios/axios) en el proyecto
1. Se creó la carpeta `SwapiSearch` en `src/components`
1. Se creó el archivo `index.js` en `src/components/SwapiSearch`
1. Se reutilizaron los componentes `ToDo/Form` y `ToDo/List` para crear un formulario de búsqueda y los resultados
1. Se agregó un `prop` `disabled` al componente `ToDo/Form`, para el momento de carga de datos
1. Se importó el nuevo componente a `src/App.js`

## Código
**Terminal**
```bash
$ npm install axios
```
**src/components/SwapiSearch/index.js**
```jsx
import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from 'components/ToDo/Form';
import SearchList from 'components/ToDo/List';

class SwapiSearch extends Component {
    state = {
        list: [],
        searchValue: 'none',
    }

    getAllData = async function(searchParam) {
        const characterArray = [];
        let url = `https://swapi.co/api/people/?search=${searchParam}`;
        let response = await axios.get(url);
        let data = response.data;
        data.results.forEach(result => characterArray.push(result.name));
        while (data.next) {
            url = data.next;
            response = await axios.get(url);
            data = response.data;
            data.results.forEach(result => characterArray.push(result.name));
        }
        return characterArray;
    }

    handleSubmit = searchParam => {
        this.setState(_ => ({
            list: [],
            loading: true,
            searchValue: searchParam,
        }));
        this.getAllData(searchParam)
            .then(response => this.setState(_ => ({
                list: response,
                loading: false,
            })))
            .catch(error => console.log(error));
    }

    render() {
        const {
            list,
            loading,
            searchValue,
        } = this.state;

        return (
            <div>
                <h2>Swapi Search</h2>
                <SearchForm
                    disabled={loading}
                    label="Search"
                    onSubmit={this.handleSubmit}
                />
                <p>Search value: {searchValue}</p>
                <SearchList
                    list={list}
                />
            </div>
        );
    }
};

export default SwapiSearch;
```
**src/components/ToDo/Form.js**
```jsx
import React, { Component } from 'react';

class ToDoForm extends Component {
    state = {
        inputValue: '',
    }

    handleInputChange = event => {
        const { target } = event;
        this.setState(_ => ({ inputValue: target.value }));
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue);
        this.setState(_ => ({ inputValue: '' }));
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange} />
                <button disabled={this.props.disabled} >{this.props.label}</button>
            </form>
        );
    }
};

export default ToDoForm;
```
**src/App.js**
```jsx
import React, { Fragment } from 'react';

import Counter from 'components/Counter/containers/Counter';
import SwapiSearch from 'components/SwapiSearch';
import Timer from 'components/Counter/containers/Timer';
import ToDo from 'components/ToDo';

const App = function() {
    return (
        <Fragment>
            <h1>App component</h1>
            <hr/>
            <Counter />
            <Timer />
            <hr/>
            <ToDo />
            <hr/>
            <SwapiSearch/>
        </Fragment>
    );
};

export default App;
```

# Siguientes pasos
Luego de comprender los conceptos de este tutorial, se recomienda:
1. **Aprender [React Router](https://reacttraining.com/react-router/web/guides/quick-start)**: Es la opción más popular para implementar navegación en React.
1. **Aprender [Redux](https://redux.js.org/)**: Librería para manejar estado, facilita la comunicación entre distintos componentes y la persistencia de estado. Es importante entender que **el uso de Redux no es obligatorio** y [**en muchos casos no es necesario**](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367). Pero tomando decisiones correctas sobre cuándo utilizarla, puede ser una herramienta muy útil en una aplicación React.
1. **Desarrollar algo**: Es la mejor forma incorporar estos conocimientos y adquirir nuevos.

# Links de utilidad
* [Documentación oficial de React](https://reactjs.org/docs/getting-started.html)
* [Blog oficial de React](https://reactjs.org/blog/)
* [Documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
