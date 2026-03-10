import Front from "../../public/images/bg-card-front.png"
import Back from "../../public/images/bg-card-back.png"
import Logo from "../../public/images/card-logo.svg"

type CardProps = {
  number: string;
  name: string;
  month: string;
  year: string;
  cvc: string;
};

export default function Card({ number, name, month, year, cvc }: CardProps) {
  return (
      <div className="left">
      <div className="card-front">
        <img src={Front} alt="" className="front"/>
        <img src={Logo} alt="" className="logo"/>
        <h1>{number || "0000 0000 0000 0000"}</h1>
        <div className="name-date">
          <p>{name || "JANE APPLESEED"}</p>
          <p>{`${month || "00"}/${year || "00"}`}</p>
        </div>
      </div>
      <div className="card-back">
        <img src={Back} alt="" className="back"/>
        <p>{cvc || "123"}</p>
      </div>
    </div>
  );
}