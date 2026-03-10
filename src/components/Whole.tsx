import { useState } from "react";
import Card from "./Card";
import Details from "./Details";
import Bg from "../../public/images/bg-main-desktop.png"


export default function Whole() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  const [displayNa, setDisplayNa] = useState(false);
  const [displayNu, setDisplayNu] = useState(false);
  const [displayD, setDisplayD] = useState(false);
  const [displayC, setDisplayC] = useState(false);

  const [thanks, setThanks] = useState(false);

  function Check() {
    const nameError = name.trim() === "";
    const numberError = number.replaceAll(" ", "").trim() === "";
    const dateError = month.trim() === "" || year.trim() === "";
    const cvcError = cvc.trim() === "";

    setDisplayNa(nameError);
    setDisplayNu(numberError);
    setDisplayD(dateError);
    setDisplayC(cvcError);

    if (!nameError && !numberError && !dateError && !cvcError) {
      setThanks(true);
    }
  }

  return (
    <div className="whole">
        <img src={Bg} alt="" className="bg"/>
      <Card number={number} name={name} month={month} year={year} cvc={cvc} />
      <Details
        number={number}
        setNumber={setNumber}
        name={name}
        setName={setName}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        cvc={cvc}
        setCvc={setCvc}
        displayNa={displayNa}
        displayNu={displayNu}
        displayD={displayD}
        displayC={displayC}
        thanks={thanks}
        Check={Check}
      />
    </div>
  );
}