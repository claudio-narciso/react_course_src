import {useState} from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <AccordionItem number={index + 1} title={item.title} text={item.text} key={index + 1}/>
      ))}
    </div>
  );
}

function AccordionItem({ number, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`item ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <p className="number">{number > 9 ? number : `0${number}`}</p> 
        <p class="title">{title}</p>
        <span className="icon">+</span>
        {isOpen && <div className="content-box">{text}</div>}
    </div>
  )
}
