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
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectedId(id) {
    setSelectedId(selectedId == id ? null : id);
  }

  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <AccordionItem
          number={index + 1}
          title={item.title}
          handleSelectedId={handleSelectedId}
          selectedId={selectedId}
          key={index + 1}
        >
          {item.text}
        </AccordionItem>
      ))}
      {/* Um pequeno exemplo do uso do child element. Podemos até colocar html nele e funciona. */}
      <AccordionItem
          number={7}
          title="Uma cena minha só"
          handleSelectedId={handleSelectedId}
          selectedId={selectedId}
          key={7}
        >
          Um texto do bro Cláudio só para testar a cena.
          <ul>
            <li>Item 1 é parte da resposta</li>
            <li>Item 2 é parte da resposta</li>
            <li>Item 3 é parte da resposta</li>
          </ul>
        </AccordionItem>
    </div>
  );
}

function AccordionItem({ number, title, selectedId, handleSelectedId, children }) {
  const isOpen = (selectedId === number);

  return (
    <div className={`item ${isOpen && "open"}`} onClick={() => handleSelectedId(number)}>
        <p className="number">{number > 9 ? number : `0${number}`}</p> 
        <p class="title">{title}</p>
        <span className="icon">{`${isOpen ? '-' : '+'}`}</span>
        {isOpen && <div className="content-box">{children}</div>}
    </div>
  )
}
