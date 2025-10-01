import { useEffect, useState } from "react";
import { SolarCalculatorModel } from "../models/SolarCalculatorModel";
import { type RoofType, type Direction } from "../config/solar.config";
import { MdLiveHelp } from "react-icons/md";
import Breadcrumbs from "./Breadcrumbs";
import { useLocation } from "react-router-dom";
import { useSubmenuContext } from "../hooks/useSubmenuContext";

const SolarCalculator = () => {

  const [monthlyCost, setMonthlyCost] = useState(400);
  const [roofType, setRoofType] = useState<RoofType>("slanted");
  const [direction, setDirection] = useState<Direction>("south");
  const [result, setResult] = useState<ReturnType<SolarCalculatorModel["calculate"]> | null>(null);

  const handleCalculate = () => {
    const calc = new SolarCalculatorModel(monthlyCost, roofType, direction);
    setResult(calc.calculate());
  };



  return (
    <>
        <Breadcrumbs />
        <section className="solar-calculator container">
            <h2 className="h2-header">Kalkulator fotowoltaiczny</h2>
            <aside className="solar-calculator__info container">
                <div className="solar-calculator__info-block container">
                    <h4 className="solar-calculator__subtitle">
                        <div className="solar-calculator__icon-wrapper">
                           <MdLiveHelp size={32} color="gray" className="solar-calculator__icon" /> 
                        </div>
                        Czy wiesz, jak fotowoltaika może zmienić Twój rachunek za prąd?
                    </h4>
                    <h4 className="solar-calculator__title">
                        Nasz kalkulator pomoże Ci odpowiedzieć na to pytanie!
                    </h4>
                    <ul className="solar-calculator__list">
                        <li className="solar-calculator__list-item">Oblicz, ile zaoszczędzisz w skali miesiąca i roku</li>
                        <li className="solar-calculator__list-item">Dowiedz się, jak szybko zwróci się koszt instalacji</li>
                        <li className="solar-calculator__list-item">Porównaj różne typy dachów i instalacji</li>
                        <li className="solar-calculator__list-item">Sprawdź, jak dotacje obniżają cenę inwestycji</li>
                        <li className="solar-calculator__list-item">Zobacz prognozę oszczędności na 25 lat</li>
                    </ul>
                    <button className="solar-calculator__info-button">
                        <a href='#kalkulacja' className="calculate-link">Przejdź do kalkulacji</a>
                    </button>  
                </div>
                <div className="solar-calculator__info-block container">
                    <h4 className="solar-calculator__subtitle">
                    Jak działa nasz kalkulator fotowoltaiczny?
                    </h4>
                    <p className="solar-calculator__text paragraph">
                    Nasz kalkulator, na podstawie kilku kluczowych parametrów – takich jak zużycie energii, lokalizacja czy kąt nachylenia dachu – wyznaczy optymalną moc instalacji fotowoltaicznej dla Twojego domu.  
                    To jednak dopiero początek! Narzędzie pokaże Ci także, ile energii wyprodukuje Twoja instalacja w ciągu roku oraz przez cały, 25-letni okres jej pracy.  
                    Dodatkowo otrzymasz wyliczenia dotyczące wpływu Twojej inwestycji na środowisko – dowiesz się, jak bardzo zmniejszysz emisję CO₂ i ile drzew musiałoby zostać posadzonych, by osiągnąć taki sam efekt.  
                    </p>
                </div>
            </aside> 
<form className="solar-calculator__form">
  <section className="container">
    <div className="solar-calculator__form-group">
        <div>
            <h4>Miejsce montażu</h4>
            <p>Wybierz miejsce montażu paneli słonecznych. Opcja 'dach' jest idealna, gdy masz dostępny dach o odpowiedniej ekspozycji. 'Grunt' 
                to alternatywa, gdy dach nie jest opcją lub chcesz maksymalizować produkcję przez optymalne ustawienie paneli. 
            </p>
        </div>
        <div>
            {/* <div>Dach płaski
                <FlatRoofIcon width={32} height={32} className="solar-calculator__icon" />
            </div> */}
        </div>
      <label className="solar-calculator__label">Miesięczny rachunek (zł): </label>
      <input
        className="solar-calculator__input"
        type="number"
        value={monthlyCost}
        onChange={(e) => setMonthlyCost(Number(e.target.value))}
      />
    </div>

    <div className="solar-calculator__form-group">
      <label className="solar-calculator__label">Rodzaj instalacji: </label>
      <select
        className="solar-calculator__select"
        value={roofType}
        onChange={(e) => setRoofType(e.target.value as RoofType)}
      >
        <option value="slanted">Dach skośny</option>
        <option value="flat">Dach płaski</option>
        <option value="ground">Grunt</option>
      </select>
    </div>

    <div className="solar-calculator__form-group">
      <label className="solar-calculator__label">Kierunek dachu: </label>
      <select
        className="solar-calculator__select"
        value={direction}
        onChange={(e) => setDirection(e.target.value as Direction)}
      >
        <option value="south">Południe</option>
        <option value="east-west">Wschód–Zachód</option>
      </select>
    </div>

    <button
      type="button"
      className="solar-calculator__button"
      onClick={handleCalculate}
    >
      Oblicz
    </button>

    {result && (
      <div className="solar-calculator__result">
        <p>
          <strong>Moc instalacji:</strong> {result.power} kWp
        </p>
        <p>
          <strong>Koszt całej instalacji:</strong>{" "}
          {result.totalCost.toLocaleString()} zł
        </p>
        <p>
          <strong>Koszt instalacji z dotacją:</strong>{" "}
          {result.subsidyCost.toLocaleString()} zł
        </p>
        <p>
          <strong>Rata kredytowa (59 miesięcy):</strong>{" "}
          {result.monthlyInstallment.toLocaleString()} zł
        </p>
        <p>
          <strong>W ciągu 25 lat ZAOSZCZĘDZISZ:</strong>{" "}
          {result.savings25Years.toLocaleString()} zł
        </p>
        <p>Uwzględniono coroczną podwyżkę cen prądu o 7%.</p>
      </div>
    )}
  </section>
</form>
          
        </section>
    </>
    
  );
};

export default SolarCalculator;


