const Kontostand = ({KontoObj, setKontoObj}) => {
    return ( 
        <>
            <form>
                <label htmlFor="title">Title</label>
                <output
                    type="text"
                    value={KontoObj.title}
                    onChange={(event) => setKontoObj({ ...KontoObj, title: event.target.value })}
                />
            </form>

            <main>
                <h1>{KontoObj.title}</h1>
            </main>

        </>
     );
}
 
export default Kontostand;