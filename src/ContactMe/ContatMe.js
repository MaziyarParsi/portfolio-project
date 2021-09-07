import React from "react"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import "./ContactMe.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMarker } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const ContactMe = () => {
  return (
    <section className="contactMeSection">
      <div className="container">
        <h2 className="title">ارتباط با من</h2>
        <div className="contactMeContent">
          <div className="leftColumn">
            <div className="text">در تماس باشید</div>
            <p>
              Commodo amet exercitation incididunt commodo.Commodo amet exercitation incididunt
              commodo.
            </p>
            <div className="icons">
              <div className="row">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <div className="head"> نام</div>
                <div className="subTitle"> مازیار پارسی</div>
              </div>
              <div className="row">
                <i>
                  <FontAwesomeIcon icon={faMarker} />
                </i>
                <div className="head"> آدرس</div>
                <div className="subTitle"> تهران شهرک غرب</div>
              </div>
              <div className="row">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <div className="head"> ایمیل</div>
                <div className="subTitle"> mparsi1992@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe
