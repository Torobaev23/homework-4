import React, {useState} from "react";

export default function Form () {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [value, setValue] = useState('');

    function inputName (event) {
        setName(event.target.value);
    }
    function inputSurname (event) {
        setSurname(event.target.value);
    }
    function inputEmail (event) {
        setEmail(event.target.value);
    }

    function textValue() {
        setValue(`Имя: ${name}, Фамилия: ${surname}, Почта: ${email}`)
    }

    return (
        <div>
            <div className="form">
                <div className="input">
                    <input value={name} onChange={inputName} className="data" placeholder="Имя"/>
                </div>
                <div className="input">
                    <input value={surname} onChange={inputSurname} className="data"  placeholder="Фамилия" />
                </div>
                <div className="input">
                    <input value={email} onChange={inputEmail}  className="data" placeholder="Почта"/>
                </div>
                <div className="btn">
                    <button onClick={textValue} className="btn-2">Get Value</button>
                </div>
            </div>
            <h1>{value}</h1>
        </div>
    )
}