import React from "react";
import Button from "../button/button";
import styles from "./editor_form.module.css";

const EditorForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, theme, title, email, message, filename, fileURL } =
    card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      filename: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (e) => {
    // == 사용 이유는 빈값이어도 null,undefined 두개를 거르기위함
    // 즉 타입도 체크하기위해서임 반면 ===은 타입도 같아야 같다고 여김
    if (e.currentTarget == null) {
      return;
    }
    console.log(e.currentTarget.vlaue);
    e.preventDefault();
    updateCard({
      ...card, // ...card로 기존 card 복사해옴
      [e.currentTarget.name]: e.currentTarget.value,
      // 복사해온거에 name이 존재하던거면 value를 변경, 없는 name이면 새로 추가해줌
    });
  };

  const onSubmit = (e) => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={name} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default EditorForm;
