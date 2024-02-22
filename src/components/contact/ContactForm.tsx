// Modules
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

// Images
import board from "../../images/board.jpg";

// Helpers
import { getContact, sendData } from "../../helpers/apiRequests";
import { highlightColor } from "../../helpers/otherVariables";

// Components
import Loader from "../global/Loader";
import Status from "../contact/Status";

// Validators
import { validateEmail } from "../../validators/validateEmail";

// Icons
import forward from "../../icons/arrow-forward.svg";
import email from "../../icons/email-black.svg";
import phone from "../../icons/phone-gray.svg";
import pin from "../../icons/pin.svg";
import fb from "../../icons/facebook-gray.svg";
import yt from "../../icons/youtube-gray.svg";
import ig from "../../icons/instagram-grey.svg";
import twitter from "../../icons/twitter-gray.svg";

// Types
import { ContactData, Contact } from "../../types/contact";
type stateBool = [boolean, React.Dispatch<boolean>];

const ContactForm = () => {
  const [contact, setContact]: [Contact[], React.Dispatch<Contact[]>] =
    useState([
      {
        id: -1,
        phone: "",
        address: "",
        instagram: "",
        twitter: "",
        youtube: "",
        facebook: "",
        translations: [
          {
            model_id: "",
            locale: "",
            attribute_data: "",
          },
        ],
      },
    ]);

  const [data, setData]: [ContactData, React.Dispatch<ContactData>] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [load, setLoad]: stateBool = useState(false);
  const [triggered, setTriggered]: stateBool = useState(false);
  const [sent, setSent]: stateBool = useState(false);
  const [validation, setValidation]: stateBool = useState(false);

  const status = {
    success: "Ваше сообщение успешно отправлено",
    error: "Не удалось отправить сообщение",
  };

  useEffect(() => {
    if (
      data.name.length !== 0 &&
      validateEmail(data.email) &&
      data.message.length !== 0
    ) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [data]);

  useEffect(() => {
    getContact(setContact);
  }, []);

  return (
    <form
      className="contact-form"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      }}
    >
      <Loader className={load ? "active" : ""} />
      <div className="contact-form-left">
        <div className="contact-img">
          <img src={board} alt="" />
        </div>
      </div>
      <div className="contact-form-right">
        <div className="contact-form-right-top">
          <div className="contact-title">
            <div className="contact-title-inner">
              <div className="contact-icon">
                <img src={forward} alt="" />
              </div>
              <h3>Свяжитесь с нами</h3>
            </div>
            <div className="contact-icon">
              <img src={email} alt="" />
            </div>
          </div>
        </div>
        <div className="contact-form-right-middle">
          <div className="contact-form-link">
            {contact[0].id !== -1 ? (
              <div className="contact-form-link-left">
                <div className="link-icon">
                  <img src={pin} alt="" />
                </div>
                <span>{contact[0].address}</span>
              </div>
            ) : (
              <Skeleton
                height={"1.9rem"}
                style={{ minWidth: "25rem" }}
                width={"100%"}
                highlightColor={highlightColor}
              />
            )}
            {contact[0].id !== -1 ? (
              <a
                className="contact-form-link-left"
                target="_blank"
                rel="noreferrer"
                href={"tel:" + contact[0].phone}
              >
                <div className="link-icon">
                  <img src={phone} alt="" />
                </div>
                <span>{contact[0].phone}</span>
              </a>
            ) : (
              <Skeleton
                highlightColor={highlightColor}
                height={"1.9rem"}
                style={{ minWidth: "12rem" }}
                width={"100%"}
              />
            )}
          </div>
          <div className="contact-form-link links">
            <div className="contact-form-link-right">
              {contact[0].id !== -1 ? (
                <a
                  href={contact[0].instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="link-icon"
                >
                  <img src={ig} alt="" />
                </a>
              ) : (
                <Skeleton
                  height={"3rem"}
                  width={"3rem"}
                  highlightColor={highlightColor}
                />
              )}
              {contact[0].id !== -1 ? (
                <a
                  href={contact[0].twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="link-icon"
                >
                  <img src={twitter} alt="" />
                </a>
              ) : (
                <Skeleton
                  height={"3rem"}
                  width={"3rem"}
                  highlightColor={highlightColor}
                />
              )}
            </div>
            <div className="contact-form-link-right">
              {contact[0].id !== -1 ? (
                <a
                  href={contact[0].youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="link-icon"
                >
                  <img src={yt} alt="" />
                </a>
              ) : (
                <Skeleton
                  height={"3rem"}
                  width={"3rem"}
                  highlightColor={highlightColor}
                />
              )}
              {contact[0].id !== -1 ? (
                <a
                  href={contact[0].facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="link-icon"
                >
                  <img src={fb} alt="" />
                </a>
              ) : (
                <Skeleton
                  height={"3rem"}
                  width={"3rem"}
                  highlightColor={highlightColor}
                />
              )}
            </div>
          </div>
        </div>
        <div className="contact-form-right-bottom">
          <div className="input-blocks-wrapper">
            <div className="input-block">
              <label htmlFor="name">
                Имя <span className="red">*</span>
              </label>
              <input
                required
                autoSave="true"
                autoComplete="true"
                type="text"
                name="name"
                id="name"
                placeholder="Аман Аманов"
                onPaste={(e: any) => {
                  setAlert({ ...alert, name: true });
                  setData({ ...data, name: e.target.value });
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setAlert({ ...alert, name: true });
                  setData({ ...data, name: e.target.value });
                }}
              />
              <span
                className={
                  alert.name && data.name.length === 0
                    ? "form-warning active"
                    : "form-warning"
                }
              >
                Это поле обязательно для заполнения
              </span>
            </div>
            <div className="input-block">
              <label htmlFor="email">
                Email <span className="red">*</span>
              </label>
              <input
                autoSave="true"
                autoComplete="true"
                required
                type="email"
                name="email"
                id="email"
                placeholder="aman@gmail.com"
                onPaste={(e: any) => {
                  setAlert({ ...alert, email: true });
                  setData({ ...data, email: e.target.value });
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setAlert({ ...alert, email: true });
                  setData({ ...data, email: e.target.value });
                }}
              />
              <span
                className={
                  alert.email && !validateEmail(data.email)
                    ? "form-warning active"
                    : "form-warning"
                }
              >
                Введен некорректный email
              </span>
            </div>
            <div className="input-block">
              <label htmlFor="text">
                Чем мы можем помочь вам? <span className="red">*</span>
              </label>
              <textarea
                required
                name="text"
                id="text"
                placeholder="Расскажите нам о вашей проблеме..."
                onPaste={(e: any) => {
                  setAlert({ ...alert, message: true });
                  setData({ ...data, message: e.target.value });
                }}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setAlert({ ...alert, message: true });
                  setData({ ...data, message: e.target.value });
                }}
              ></textarea>
              <span
                className={
                  alert.message && data.message.length === 0
                    ? "form-warning active"
                    : "form-warning"
                }
              >
                Это поле обязательно для заполнения
              </span>
            </div>
          </div>
          <button
            disabled={!validation}
            type="submit"
            onClick={(e: React.FormEvent<HTMLButtonElement>) => {
              setLoad(true);
              e.preventDefault();
              sendData(setLoad, setSent, setTriggered, data);
            }}
          >
            Отправить сообщение
          </button>
          <span className="form-note">
            Поля отмеченные <span className="red">*</span> обязательны для
            заполнения
          </span>
          <Status message={status} success={sent} active={triggered} />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
