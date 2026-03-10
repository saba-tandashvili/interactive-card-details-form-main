import Complete from "../images/icon-complete.svg";
import { useState } from "react";

export default function Whole() {
  const [number, setNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [DisplayNa, setDisplayNa] = useState(false);
  const [DisplayNu, setDisplayNu] = useState(false);
  const [DisplayD, setDisplayD] = useState(false);
  const [DisplayC, setDisplayC] = useState(false);

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
      setThanks(!thanks);
    }
  }
  return (
    <div className="whole">
      <div className="left">
        <div className="card-front">
          <h1>{number || "0000 0000 0000 0000"}</h1>
          <div className="name-date">
            <p>{name || "JANE APPLESEED"}</p>
            <p>{`${month || "00"}/${year || "00"}`}</p>
          </div>
        </div>
        <div className="card-back">
          <p>{cvc || "123"}</p>
        </div>
      </div>

      <div className="right" style={{ display: thanks ? "none" : "" }}>
        <label htmlFor="name">
          <p>CARDHOLDER NAME</p>
          <input
            type="text"
            placeholder="e.g. John Doe"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <h3 className="error" style={{ display: DisplayNa ? "" : "none" }}>
            Can't be blank
          </h3>
        </label>

        <label htmlFor="number">
          <p>CARD NUMBER</p>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123"
            id="number"
            onChange={(e) => {
              let v = e.target.value.replaceAll(" ", "").slice(0, 16);
              v = v.match(/.{1,4}/g)?.join(" ") || v;

              setNumber(v);
            }}
            maxLength={19}
          />
          <h3 className="error" style={{ display: DisplayNu ? "" : "none" }}>
            Can't be blank
          </h3>
        </label>

        <div className="small-inputs">
          <div className="small-inputs-left">
            <div className="small-inputs-left-top">
              <p>Exp. Date (MM/YY)</p>
            </div>
            <div className="small-inputss">
              <input
                type="text"
                placeholder="MM"
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
                maxLength={2}
              />
              <input
                type="text"
                placeholder="YY"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                maxLength={2}
              />
            </div>
            <h3 className="error" style={{ display: DisplayD ? "" : "none" }}>
              Can't be blank
            </h3>
          </div>

          <div className="small-inputs-right">
            <p>CVC</p>
            <input
              type="text"
              placeholder="e.g 123"
              onChange={(e) => {
                setCvc(e.target.value);
              }}
              maxLength={3}
            />
            <h3 className="error" style={{ display: DisplayC ? "" : "none" }}>
              Can't be blank
            </h3>
          </div>
        </div>

        <button onClick={Check}>Confirm</button>
      </div>

      <div className="thanks" style={{ display: !thanks ? "none" : "" }}>
        <img src={Complete} alt="" />
        <h1>THANK YOU!</h1>
        <p>We’ve added your card details</p>
        <button onClick={Check}>Confirm</button>
      </div>
    </div>
  );
}
