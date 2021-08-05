import React, { useState } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

const Questions = ({ title, info }) => {
  const [showFaq, setShowFaq] = useState(false)
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowFaq(!showFaq)}>
          {showFaq ? (
            <FiChevronUp styles={{ color: "orange" }} />
          ) : (
            <FiChevronDown styles={{ stroke: "orange" }} />
          )}
        </button>
      </header>
      {showFaq && <p>{info}</p>}
      <hr />
    </article>
  )
}

export default Questions
