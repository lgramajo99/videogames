
function Ordenacion() {
    return (
        <div>
            <label htmlFor="orden">Ordenar por: </label>
            <select name="orden" defaultValue='Ninguno' id="orden" >
                <option value="Ninguno" >Ninguno</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>

                <option value="Alfabetico" >Alfabetico</option>
                <option value="Rating">Rating</option>
            </select>
        </div >
    )
}

export default Ordenacion;