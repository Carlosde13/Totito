App.jsx
import { useState } from 'react';
import './App.css'
import Card from './Card';

const OPCIONES = [
  { id: 1, nombre: "Inglés" },
  { id: 2, nombre: "Conectividad  y redes" },
  { id: 3, nombre: "Programación" },
]

const CURSOS = [
  { title: "Inglés", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas." },
  { title: "Conectividad  y redes", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, voluptatibus!" },
  { title: "Programación", description: "El mejor curso." },
  { title: "Programación", description: "El mejor curso del mundo mundial." }
]

function App() {
  const [lista, setLista] = useState([]);
  const [cards, setCards] = useState([]);

  function filterList(e) {
    let inputValue = e.target.value.toLowerCase();

    if (inputValue === "") {
      setLista([]);
    } else {
      const FILTERED = OPCIONES.filter((el) => {
        return el.nombre.toLowerCase().includes(inputValue);
      })

      setLista(FILTERED);
    }
  }

  function filterCards(nombre) {
    const FILTERED = CURSOS.filter((el) => {
      return el.title === nombre;
    })

    setCards(FILTERED);
  }

  return (
    <div id='contenedor'>
      <nav>
        <input
          type="text"
          id="myInput"
          onKeyUp={filterList}
        />
        <ul id="myUL">
          {
            lista.map((el, index) => (
              <li key={index} onClick={() => filterCards(el.nombre)}>
                {el.nombre}
              </li>
            ))}
        </ul>
      </nav>
      <div id='contenido'>
        {
          cards.map((el, index) => (
            <Card props={el} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default App