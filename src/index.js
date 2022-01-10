import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";
//service로직을 index에서 작성하는이유는 index는 딱한번만 생성되는반면 다른 컴포들은 재생성될 가능성이 있기때문
const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
//ImageFileInput이 많은 props을 받는다면 계속 prop으로 전달해야
//하기때문에 외부에서 만들어서 props을 인자로 받게만듦
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);
//FileInput에 ImageFileInput라는 컴포넌트를 불러오는 콜백을 할당
//ImageFileInput에 prop으로 imageUploader와, 앞으로 등록될 props들을 인자로 넣어줌
ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
