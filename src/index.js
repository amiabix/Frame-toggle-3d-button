import React, { useState } from "react"
import ReactDOM from "react-dom"
import { motion, MotionConfig } from "framer-motion"
import { useAnimatedText } from "./use-animated-text"
import "./styles.css"
import { Scene } from "./Canvas"
import { transition } from "./transition"



function App() {
  const [isOn, setOn] = useState(true)
  const headerRef = useAnimatedText(isOn ? 0 : 10, transition)
  return (
    <MotionConfig transition={transition}>
      <motion.div
        className="container"
        initial={false}
        animate={{
          background: isOn ? "linear-gradient(to right, #03001e ,#7303c0 ,#ec38bc ,#fdeff9 )" : "linear-gradient(to right, #F0F2F0, #000C40)",
          color: isOn ? "#E2DFD2" : "##FAF9F6	"
        }}
      >
        <h1 className="open" children="Slide"/>
        <h1 className="close" children="to start" />
        <motion.h1 ref={headerRef} />
        <Scene isOn={isOn} setOn={setOn} />
      </motion.div>
    </MotionConfig>
  )
}
ReactDOM.render(<App />, document.getElementById("root"))