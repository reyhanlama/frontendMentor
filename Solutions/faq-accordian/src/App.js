import React, { useState } from "react"
// import Image from "./Image"
import Questions from "./Questions"
import data from "./faqs"

function App() {
  const [faqs, setFaqs] = useState(data)
  return (
    <main>
      <div className="container">
        <div className="image">
          {/* <Image /> */}
          <img src="images/mobile.svg" className="mobile" alt="" />
          {/* <img className="box" src="images/box.svg" alt="" />
          <img className="woman" src="images/women.svg" alt="" /> */}
        </div>
        <section className="faq">
          <h1>FAQ</h1>
          {faqs.map((faq) => {
            return <Questions key={faq.id} {...faq} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
