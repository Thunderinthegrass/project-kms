// import React from "react";
// import s from "./Dialogs.module.css";
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
// import { Field, reduxForm } from "redux-form";
// // import { Navigate } from "react-router-dom";

// const MessageForm = (props) => {
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <Field placeholder={"Введите сообщение"} name={"newMessage"} component={"textarea"} />
//       <button>Отправить сообщение</button>
//     </form>
//   )
// }

// const MessageReduxForm = reduxForm({form: 'messageForm'}) (MessageForm);

// const Dialogs = (props) => {

//   let dialogs = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

//   let messages = props.dialogsPage.messages.map(message => <Message message={message.message} />);

//   const onSubmit = (messageData) => {
//     console.log(messageData)
//     let message = messageData.newMessage;
//     props.addMessage(message);
//   }
  
//   return (
//     <div className={s.dialogsWrapper}>
//       <div className={s.dialogs}>
//         { dialogs }
//       </div>
//       <div className={s.messages}>
//         <div className={s.messagesWrapper}>
//            { messages }
//         </div>
//         <div className={s.textareaWrapper}>
//           <MessageReduxForm onSubmit={onSubmit} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dialogs;

import React from "react";
import { Form, Field } from "react-final-form";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const MessageForm = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name="newMessage">
            {({ input, meta }) => (
              <div>
                <textarea 
                  {...input} 
                  placeholder="Введите сообщение"
                  className={meta.error && meta.touched ? s.error : ""}
                />
                {meta.error && meta.touched && <span className={s.errorMessage}>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button type="submit" disabled={submitting}>
            Отправить сообщение
          </button>
        </form>
      )}
    </Form>
  );
};

const Dialogs = (props) => {
  let dialogs = props.dialogsPage.dialogs.map(dialog => 
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  );

  let messages = props.dialogsPage.messages.map((message, index) => 
    <Message key={index} message={message.message} />
  );

  const onSubmit = (messageData, form) => {
    console.log(messageData);
    let message = messageData.newMessage;
    props.addMessage(message);
    form.reset(); // Очистка формы после отправки
  };

  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        {dialogs}
      </div>
      <div className={s.messages}>
        <div className={s.messagesWrapper}>
          {messages}
        </div>
        <div className={s.textareaWrapper}>
          <MessageForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;