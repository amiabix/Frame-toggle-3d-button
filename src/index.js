import React, { useState } from "react"
import ReactDOM from "react-dom"
import { motion, MotionConfig } from "framer-motion"
import { useAnimatedText } from "./use-animated-text"
import "./styles.css"
import { Scene } from "./Canvas"
import { transition } from "./transition"



function App() {
  const [isOn, setOn] = useState(true)
  const headerRef = useAnimatedText(isOn ? 10 : 30, transition)
  return (
    <MotionConfig transition={transition}>
      <motion.div
        className="container"
        initial={false}
        animate={{
          backgroundColor: isOn ? "#FFFFFF" : "#070707",
          color: isOn ? "#070707" : "#FFFFFF"
        }}
      >
        <h1 className="open" children="Slide"/>
        <h1 className="close" children="20 sec" />
        <motion.h1 ref={headerRef} />
        <Scene isOn={isOn} setOn={setOn} />
      </motion.div>
    </MotionConfig>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
