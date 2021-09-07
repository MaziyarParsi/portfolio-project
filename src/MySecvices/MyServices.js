import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrush } from "@fortawesome/free-solid-svg-icons"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faPallet } from "@fortawesome/free-solid-svg-icons"
import "./MyServices.css"

const MyServices = () => {
  return (
    <section className="myServicesSection" id="myServicesSection">
      <div className="container">
        <h2 className="title">خدمات من</h2>
        <div className="myServicesContent">
          <div className="card">
            <div className="box">
              <i>
                <FontAwesomeIcon icon={faCode} />
              </i>
              <div className="textTitle"> برنامه نویسی وب</div>
              <p>
                برای پیاده سازی طرح وبسایت، نیاز به کدنویسی فرانت اند ضروری است،در اینجا مهارت های
                کدنویسی به شما کمک میکند
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i>
                <FontAwesomeIcon icon={faPallet} />
              </i>
              <div className="textTitle"> طراحی رابط کاربری</div>
              <p>
                برای طراحی ظاهر سایت یا اپلیکیشن خود، میتوانید روی مهارت های من برای طراحی رابطه
                کاربری حساب باز کنید
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i>
                <FontAwesomeIcon icon={faBrush} />
              </i>
              <div className="textTitle"> طراحی وبسایت</div>
              <p>
                با کمک من، شما میتوانید سایت شخصی یا کاری خود را در سطح وب پیاده سازی کرده و برای
                عموم به مشاهده بگذارید
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyServices
