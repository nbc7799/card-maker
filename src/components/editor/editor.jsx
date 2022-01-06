import React from "react";
import AddForm from "../add_form/add_form";
import EditorForm from "../editor_form/editor_form";
import styles from "./editor.module.css";

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Editor</h1>
    {Object.keys(cards).map((key) => (
      <EditorForm
        key={key}
        FileInput={FileInput}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <AddForm FileInput={FileInput} onAdd={addCard} />
  </section>
);

export default Editor;
