import React from "react"
import "./AboutSection.css"
import Typical from "react-typical"
import aboutSectionPicture from "../images/me.jpg"

const AboutSection = () => {
  return (
    <section className="aboutSection">
      <div className="container">
        <h2 className="title">درباره من</h2>
        <div className="aboutContent">
          <div className="pictureColumn">
            <img src={aboutSectionPicture}></img>
          </div>
          <div className="textColumn">
            <div className="aboutMeText">
              اسم من مازیاره و کار من این روزها
              {"  "}
              <Typical
                className="typical"
                wrapper="p"
                loop={Infinity}
                steps={["برنامه نویس فرانت اند", 1000, "طراحی سایت وردپرس", 1000]}
              />
            </div>
            <p className="aboutParagraph">
              برنامه نویسی رو از سال 93 با یادگیری ++C شروع کردم. بعد از ی مدت رفتم سراغ یادگیری
              برنامه نویسی جاوا و طراحی اپلیکیشن های اندروید. تازه داشتم راه میوفتادم که مجبور شدم
              برم خدمت! توی خدمت سعی میکردم خودمو بروز نگه دارم و ارتباطم با دنیای برنامه نویسی رو
              از دست ندم، به این نتیجه رسیدم که بهترین زمینه برای من برنامه نویسی تحت وبه. شروع کردم
              به یادگیریش، آموزش های مختلفی رو در زمینه برنامه نویسی وبسایت و طراحی رابط کاربری
              گذروندم. و الانم تقریبا 1 ساله که در زمینه طراحی رابط کاربری و طراحی صغحات وب مشغول به
              کارم.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
