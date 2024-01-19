const Konto = ({obj, setObj, konto, setKonto}) => {

    const moneyInFunc = () => {
        let saldoNum = Number(konto)
        let entryNum = Number(obj.entry)
        let addObj = saldoNum + entryNum
        obj.entry = ""
        setKonto(addObj)
    }

    const moneyOutFunc = () => {
        let saldoNum = Number(konto)
        let entryNum = Number(obj.entry)
        let addObj = saldoNum - entryNum
        obj.entry = ""

        if (addObj < 0) {
            window.alert("Du bist pleite !")
            addObj = saldoNum
        }
        setKonto(addObj)
    }


    return ( 
        <>
            <p>{konto}</p>
            <div>
                <input 
                type="number"
                name="" 
                id="" 
                placeholder="Dollars, Euros..."
                value={obj.entry}
                onChange={(event) => setObj({...obj, entry: event.target.value})}
                />
                <button onClick={moneyInFunc}>Einzahlen</button>
                <button onClick={moneyOutFunc}>Auszahlen</button>

            </div>
        </>

     );
}
 
export default Konto;