import Complete from "../../public/images/icon-complete.svg";

import Bg from "../../public/images/bg-main-desktop.png"
import Front from "../../public/images/bg-card-front.png"
import Back from "../../public/images/bg-card-back.png"
import Logo from "../../public/images/card-logo.svg"

type DetailsProps = {
  number: string;
  setNumber: (v: string) => void;
  name: string;
  setName: (v: string) => void;
  month: string;
  setMonth: (v: string) => void;
  year: string;
  setYear: (v: string) => void;
  cvc: string;
  setCvc: (v: string) => void;
  displayNa: boolean;
  displayNu: boolean;
  displayD: boolean;
  displayC: boolean;
  thanks: boolean;
  Check: () => void;
};

export default function Details({
  setNumber,
  setName,
  setMonth,
  setYear,
  setCvc,
  displayNa,
  displayNu,
  displayD,
  displayC,
  thanks,
  Check,
}: DetailsProps) {
  return (
    <>
      <div className="right" style={{ display: thanks ? "none" : "", backgroundImage: Bg }}>
        <label htmlFor="name">
          <p>CARDHOLDER NAME</p>
          <input
            type="text"
            placeholder="e.g. John Doe"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <h3 className="error" style={{ display: displayNa ? "" : "none" }}>
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
          <h3 className="error" style={{ display: displayNu ? "" : "none" }}>
            Can't be blank
          </h3>
        </label>

        <div className="small-inputs">
          <div className="small-inputs-left">
            <p>Exp. Date (MM/YY)</p>
            <div className="small-inputss">
              <input
                type="text"
                placeholder="MM"
                onChange={(e) => setMonth(e.target.value)}
                maxLength={2}
              />
              <input
                type="text"
                placeholder="YY"
                onChange={(e) => setYear(e.target.value)}
                maxLength={2}
              />
            </div>
            <h3 className="error" style={{ display: displayD ? "" : "none" }}>
              Can't be blank
            </h3>
          </div>

          <div className="small-inputs-right">
            <p>CVC</p>
            <input
              type="text"
              placeholder="e.g 123"
              onChange={(e) => setCvc(e.target.value)}
              maxLength={3}
            />
            <h3 className="error" style={{ display: displayC ? "" : "none" }}>
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
    </>
  );
}
