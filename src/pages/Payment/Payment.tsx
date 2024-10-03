import CreditCards from "./CreditCards";

import "./Payment.scss";
import React, {useState} from "react";
import Form from "../../components/Form";
import TextInput from "../../components/Form/TextInput";

export default function Payment() {
    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setCvc] = useState("");

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("submit");
        event.preventDefault();
    };

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length <= 16)
            setCardNumber(event.target.value);
    };

    const handleMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length <= 2)
            setMonth(event.target.value);
    };

    const handleYear = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length <= 2)
            setYear(event.target.value);
    };

    const handleCVC = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length <= 3)
            setCvc(event.target.value);
    };

    return (
        <section className="payment grid-bleed">
            <div className="payment__content">
                <CreditCards
                    number={cardNumber}
                    name={name}
                    expMonth={month}
                    expYear={year}
                    cvc={cvc}
                />

                <Form
                    variant="payment__form"
                    buttonVariant="button--black button--full-width"
                    submitLabel="Confirm"
                    onSubmit={handleFormSubmit}
                >
                    <TextInput
                        id="name"
                        type="text"
                        isRequired={true}
                        label="Cardholder Name"
                        placeholder="e.g. Jane Appleseed"
                        value={name}
                        onChange={handleName}
                    />

                    <TextInput
                        id="name"
                        type="text"
                        isRequired={true}
                        label="Card Number"
                        placeholder="e.g. 1234 5678 9123 0000"
                        value={cardNumber}
                        onChange={handleCardNumber}
                    />

                    <div className="payment__form-bottom-row">
                        <div className="payment__form-exp-date">
                            <p className="payment__form-exp-date-label">Exp. Date (MM/YY)</p>
                            <TextInput
                                id="name"
                                type="text"
                                variant="payment__form-exp-month"
                                placeholder="MM"
                                isRequired={true}
                                value={month}
                                onChange={handleMonth}
                            />
                            <TextInput
                                id="name"
                                type="text"
                                variant="payment__form-exp-year"
                                placeholder="YY"
                                isRequired={true}
                                value={year}
                                onChange={handleYear}
                            />
                        </div>

                        <TextInput
                            id="name"
                            type="text"
                            isRequired={true}
                            label="CVC"
                            placeholder="e.g. 123"
                            value={cvc}
                            onChange={handleCVC}
                        />
                    </div>
                </Form>
            </div>
        </section>
    );
}