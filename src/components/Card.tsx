import Bg from "../../public/images/bg-main-desktop.png"
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
    <div className="left" style={{backgroundImage: Bg}}>
      <div className="card-front" style={{backgroundImage: Front}}>
        <h1>{number || "0000 0000 0000 0000"}</h1>
        <div className="name-date">
          <p>{name || "JANE APPLESEED"}</p>
          <p>{`${month || "00"}/${year || "00"}`}</p>
        </div>
      </div>
      <div className="card-back" style={{backgroundImage: Front}}>
        <p>{cvc || "123"}</p>
      </div>
    </div>
  );
}