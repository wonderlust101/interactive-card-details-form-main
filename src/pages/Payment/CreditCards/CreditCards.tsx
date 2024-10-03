import creditCardFront from "/images/bg-card-front.png";
import creditCardBack from "/images/bg-card-back.png";

import "./CreditCards.scss";

type creditCardsProps = {
    number: string;
    name: string;
    expMonth: string;
    expYear: string;
    cvc: string;
}

export default function CreditCards({number, name, expMonth, expYear, cvc}: creditCardsProps) {
    return (
        <section className="credit-cards">
            <div className="credit-cards__front">
                <img src={creditCardFront} alt=""/>
                
                <div className="credit-cards__front-info">
                    <p className='credit-cards__number'>{number ? number : '0000 0000 0000 0000'}</p>
                    
                    <div className='credit-cards__front-details'>
                        <p className='credit-cards__name'>{name? name : 'XXXXX XXXXX'}</p>
                        <p className='credit-cards__exp-date'>
                            {expMonth? expMonth : '00'} / {expYear? expYear : '00'}
                        </p>
                    </div>
                </div>
            </div>

            <div className="credit-cards__back">
                <img src={creditCardBack} alt=""/>
                <p className="credit-cards__cvc">{cvc? cvc : '000'}</p>
            </div>
        </section>
    );
}