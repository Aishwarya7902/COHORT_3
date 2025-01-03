import { useRef, useState } from "react"
import Button from "./Button";

export function Otp() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    

    const [disabled, setDisabled] = useState(true)

    return <div className="flex justify-center ">
        <SubOtpBox reference={ref1} onDone={() => {
            ref2.current.focus();
        }} />

        <SubOtpBox reference={ref2} onDone={() => {
            ref3.current.focus();
        }} onBack={() => {
            ref1.current.focus()
            ref1.current.value=""
        }} />


        <SubOtpBox reference={ref3} onDone={() => {
            ref4.current.focus();
        }} onBack={() => {
            ref2.current.focus()
            ref2.current.value=""
        }} />


        <SubOtpBox reference={ref4} onDone={() => {
            ref5.current.focus();
        }} onBack={() => {
            ref3.current.focus()
            ref3.current.value=""
        }} />


        <SubOtpBox reference={ref5} onDone={() => {
            ref6.current.focus();
        }} onBack={() => {
            ref4.current.focus()
            ref4.current.value=""
        }} />


        <SubOtpBox reference={ref6} onDone={() => {
            ref6.current.focus();
        }} onBack={() => {
            ref5.current.focus()
            ref5.current.value=""
            
        }} />

        
    </div>
}

function SubOtpBox({ reference, onDone, onBack }) {
    const [inputBoxValue, setInputBoxValue] = useState("")
    return <div>
        <input
            value={inputBoxValue}
            ref={reference}
            onKeyUp={(e) => {
                if (e.key == "Backspace") {
                    onBack()
                }
            }}
            onChange={(e) => {
                const val = e.target.value;
                if (val == "0" || val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val == "9") {
                    setInputBoxValue(val)
                    onDone()
                }
                else {

                }

            }}
            type="text"
            className="outline-none m-1 w-[40px] h-[50px] rounded-2xl bg-blue-500 mt-20 px-4 caret-white text-white" />
    </div>
}