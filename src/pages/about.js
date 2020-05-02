import React from "react"
import Header from "../components/header"
import Button from "../components/primarybutton"

const handleClick = () => {
    const data = {
      object: 'Next Button',
      action: 'click'
    }
    window.gtag("event", "click", { ...data })
  }


export default () => (

  <div style={{ color: `teal` }}>
    <Header headerText="About Gatsby" />
    <p>Such wow. Very React.</p>
    <Button
          disabled={false}
          onClick={handleClick}

        />
  </div>
)
