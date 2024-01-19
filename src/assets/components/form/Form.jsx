const Form = (obj, setObj) => {
    return ( 
        <>
            <form>
            <input className="saldo"
                    type="num"
                    placeholder="0"
                    value={obj.saldo}
                    onChange={(event) => setObj({ ...obj, saldo: event.target.value })}
                />
            </form>

            <div>
                <h1>Banana Bank</h1>
                <p>Name: {obj.saldo}</p>
                <p>LastName: {obj.lastName}</p>
                <p>Age: {obj.age}</p>
                <p>Bist du Happy? {obj.happy ? "😄" : "😔"}</p>
            </div>
        </>
     );
}
 
export default Form;