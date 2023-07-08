import "./index.scss";
import edit from "../../assets/edit.png";
import excluir from "../../assets/excluir.png";

import { useState } from "react";

export default function Tasks({ data }) {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalTrash, setShowModalTrash] = useState(false);
  const [showModalNew, setShowModalNew] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  const openModalEdit = (title, description) => {
    setSelectedTitle(title);
    setSelectedDescription(description);
    setShowModalEdit(true);
  };
  const openModalTrash = (title, description) => {
    setSelectedTitle(title);
    setSelectedDescription(description);
    setShowModalTrash(true);
  };

  return (
    <div className="containerTable">
      <table
        id="tfhover"
        className="tftable"
        style={{
          display: showModalEdit || showModalNew || showModalTrash ? "none" : "table",
         
        }}
      >
        <tr>
          <th>Tarefa</th>
          <th>Status</th>
          <th>Opções</th>
        </tr>
        {data.map((obj) => (
          <tr key={obj.id}>
            <td className="tr__td">{obj.title}</td>
            <td className="check">
              <input type="checkbox" checked={obj.completed} />
            </td>
            <td>
              <img
                onClick={() => openModalEdit(obj.title, obj.description)}
                src={edit}
              ></img>
              <img
                onClick={() => openModalTrash(obj.title, obj.description)}
                src={excluir}
              ></img>
            </td>
          </tr>
        ))}
        <tr className="tr">
          <td className="tr__tdNew">Nova Tarefa...</td>
          <td className="add" onClick={() => setShowModalNew(true)}>
            +
          </td>
        </tr>
      </table>

      {showModalNew && (
        <div className="modal__containerNew">
          <div className="modal__containerNew__content">
            <div
              className="modal__containerNew__content--close"
              onClick={() => setShowModalNew(false)}
            >
              <h2>X</h2>
            </div>
            <h1>Deseja adicionar uma tarefa?</h1>
            <label>
              <input type="text" placeholder="Digite o nome tarefa..." />
            </label>
            <div className="modal__containerNew__content__buttons">
              <button className="no" onClick={() => setShowModalNew(false)}>
                Não
              </button>
              <button className="yes">Sim</button>
            </div>
          </div>
        </div>     

      )}


      {showModalEdit && (
        <div className="modal__container">
          <div className="modal__container__content">
            <div
              className="modal__container__content--close"
              onClick={() => setShowModalEdit(false)}
            >
              <h2>X</h2>
            </div>
            <h1>{`Deseja editar o item "${selectedTitle}"?`}</h1>
            <span>{selectedDescription}</span>
            <div className="modal__container__content__buttons">
              <button className="no" onClick={() => setShowModalEdit(false)}>
                Não
              </button>
              <button className="yes">Sim</button>
            </div>
          </div>
        </div>
      )}
      {showModalTrash && (
        <div className="modal__container">
          <div className="modal__container__content">
            <div
              className="modal__container__content--close"
              onClick={() => setShowModalTrash(false)}
            >
              <h2>X</h2>
            </div>
            <h1>{`Deseja excluir o item "${selectedTitle}"?`}</h1>
            <span>{selectedDescription}</span>
            <div className="modal__container__content__buttons">
              <button className="no" onClick={() => setShowModalTrash(false)}>
                Não
              </button>
              <button className="yes">Sim</button>
            </div>
          </div>
        </div>
        )}
      
    </div>
  );
}
