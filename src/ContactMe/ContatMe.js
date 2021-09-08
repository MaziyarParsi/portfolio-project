import React, { useState } from "react"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import "./ContactMe.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const ContactMe = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [description, setDescription] = useState("")

  const getNameInput = (event) => {
    setName(event.target.value)
  }
  const getEmailInput = (event) => {
    setEmail(event.target.value)
  }
  const getsubjectInput = (event) => {
    setSubject(event.target.value)
  }
  const getTextareaInput = (event) => {
    setDescription(event.target.value)
  }
  const handleSubmitButton = () => {
    console.log(name, email, subject, description)
    resetInputValues()
    window.alert("Thanks! i will answer you as soon as possible")
  }

  const resetInputValues = () => {
    document.forms["contactMeForm"].reset()
  }

  return (
    <section className="contactMeSection" id="contactMeSection">
      <div className="container">
        <h2 className="title">ارتباط با من</h2>
        <div className="contactMeContent">
          <div className="rightColumn">
            <div className="text">در تماس باشید</div>
            <p className="infoText">
              بخشی از اطلاعات شخصی من در پایین اومده، میتونین از طریقش با من ارتباط برقرار کنین
            </p>
            <div className="icons">
              <div className="row">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <div className="info">
                  <div className="head"> نام</div>
                  <div className="subTitle"> مازیار پارسی</div>
                </div>
              </div>
              <div className="row">
                <i>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </i>
                <div className="info">
                  <div className="head"> آدرس</div>
                  <div className="subTitle"> تهران شهرک غرب</div>
                </div>
              </div>
              <div className="row">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <div className="info">
                  <div className="head"> ایمیل</div>
                  <div className="subTitle"> mparsi1992@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="leftColumn">
            <div className="text"> به من پیام دهید</div>

            <form action="#" name="contactMeForm">
              <div className="fields">
                <div className="name field" id="name">
                  <input type="text" placeholder="نام شما" required onChange={getNameInput}></input>
                </div>
                <div className="email field">
                  <input
                    type="text"
                    placeholder="ایمیل شما"
                    required
                    onChange={getEmailInput}
                  ></input>
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="موضوع پیام "
                  required
                  onChange={getsubjectInput}
                ></input>
              </div>
              <div className="textArea field" required onChange={getTextareaInput}>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="در اینجا میتوانید پیام  خود را بنویسید "
                ></textarea>
              </div>
              <div className="button">
                <button type="button" onClick={handleSubmitButton}>
                  تایید پیام
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe
