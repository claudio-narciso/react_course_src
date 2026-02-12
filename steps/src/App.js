import './index.css'
import {useState} from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setOpen] = useState(true);

    // The correct way of changing a state is to use a callback function instead of updating the variable directly
    function handlePrevious() {
        // step > 0 && setStep(step - 1);
        step > 0 && setStep((e) => e - 1);  // Short-circuit
    }
    function handleNext() {
        if (step < messages.length) {
            setStep((e) => e + 1)
        }
    }
    
    return (
        <>
            <button className="close" onClick={() => setOpen(!isOpen)}>&times;</button>
            { isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 && 'active'}>1</div>
                        <div className={step >= 2 && 'active'}>2</div>
                        <div className={step >= 3 && 'active'}>3</div>
                    </div>

                    <p className="message">Step {step} {messages[step - 1]}</p>

                    <div className="buttons">
                        <button style={{backgroundColor:'#7950f2', color:"#fff"}} onClick={handlePrevious}>Previous</button>
                        <button style={{backgroundColor:'#7950f2', color:"#fff"}} onClick={handleNext}>Next</button>
                    </div>
                </div>
            )}
        </>
    )
}