import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Heading from "./UI/Heading";
import Button from "./UI/Button";
import contactsIMG from "/images/contactsIMG.jpg";

const Contacts = () => {
  const socialsItems = [
    {
      id: 1,
      label: "Instagram",
      link: "https://www.instagram.com/_triples6x_",
    },
    { id: 2, label: "Telegram", link: "https://t.me/takee_photo" },
    { id: 3, label: "VK", link: "https://vk.com/take_offthe_lenses" },
    { id: 4, label: "WhatsApp", link: "https://wa.me/1234567890" },
    { id: 5, label: "+79508053610", link: "tel:+79508053610" },
  ];

  return (
    <>
      <div
        id="contacts"
        className="flex flex-col max-w-7xl mx-auto items-center"
      >
        {/* HEADING */}
        <div className="flex flex-col items-center">
          <Heading label="Контакты" />
          <p className="fira-sans-condensed-light text-center text-base/normal text-(--gray)">
            Быстрее всего связаться со мной можно в Telegram:
            <br />
            <a
              href="https://t.me/take_offthe_lenses"
              target="_blank"
              className="text-(--white) pb-0.5 border-b-1 border-(--white)"
            >
              @take_offthe_lenses
            </a>
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-16 xl:gap-0 justify-between items-center w-full pt-16 px-4">
          <div className="flex relative flex-col items-center xl:items-start gap-4">
            <img
              src={contactsIMG}
              className="bg-(--gray) w-[clamp(0px,calc(100vw-32px),500px)] sm:w-[500px] h-auto sm:h-[680px]"
            />
            <ul className="flex flex-row flex-wrap gap-4">
              {socialsItems.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <li className="fira-sans-condensed-light cursor-pointer text-(--gray) text-xl duration-300 hover:text-(--white) hover:-translate-y-0.5">
                    {social.label}
                  </li>
                </a>
              ))}
            </ul>
            <p className="fira-sans-condensed-light text-base/tight text-(--gray)">
              * - Instagram принадлежит компании Meta,
              <br /> признанной экстремистской организацией и запрещенной в РФ
            </p>
          </div>

          {/* FORM */}
          <div className="flex flex-col gap-16 max-w-[500px]">
            <p className="fira-sans-condensed-light text-xl text-(--white)">
              Заполните контактную форму или напишите мне в соцсетях
            </p>
            <form className="flex flex-col items-start gap-12" action={""}>
              <input
                name="name"
                required
                type="text"
                placeholder="ВАШЕ ИМЯ"
                className="placeholderForm fira-sans-condensed-light text-(--white)"
              />
              <input
                name="email"
                required
                type="email"
                placeholder="ВАШ EMAIL"
                className="placeholderForm fira-sans-condensed-light text-(--white)"
              />
              <textarea
                name="message"
                required
                type="text"
                placeholder="ВАШЕ СООБЩЕНИЕ"
                className="placeholderForm h-24 max-h-48 min-h-12 fira-sans-condensed-light text-(--white)"
              />
              <Button type="submit" label="Отправить" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
