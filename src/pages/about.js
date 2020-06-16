import React from "react"
import Header from "../components/header"
// import { PrimaryButton } from '../components/primarybutton'
import { Button } from 'rebass'
import Form from "../components/form"

const handleClick = () => {
    const data = {
      object: 'Next Button',
      action: 'click'
    }
    if(typeof window !== "undefined" && window.gtag) {
      window.gtag("config", {"user_id": '0101h'})
      window.gtag("event", "click", { ...data })

    }
}

const AboutUs = () => {
  // const firebase = useContext(useFirebase)
      return (
        <div style={{ color: `teal` }}>
          <Header headerText="About Gatsby" />
          <p>Such wow. Very React.</p>
          <Button variant='secondary' mr={2} onClick={handleClick}>Primary</Button>
          <Form></Form>
        </div>
    )
     // <p>Get to Know more about us</p>
  }


export default AboutUs
