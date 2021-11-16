import React from "react"
import HeroSection from "../HeroSection/HeroSection"
import AboutSection from "../AboutSection/AboutSection"
import MyServices from "../MySecvices/MyServices"
import ContactMe from "../ContactMe/ContatMe"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Layout from "../Layout/Layout"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Layout>
              <HeroSection />
            </Layout>
          </Route>
          <Route exact path="/AboutSection">
            <Layout>
              <AboutSection />
            </Layout>
          </Route>
          <Route exact path="/MyServices">
            <Layout>
              <MyServices />
            </Layout>
          </Route>
          <Route exact path="/ContactMe">
            <Layout>
              <ContactMe />
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
