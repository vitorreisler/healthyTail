import Layout from "@/components/layout";
import { calculadoraData } from "@/data/calculadoraData";
import { useState } from "react";

const Calculator = () => {
  const [peso, setPeso] = useState("");
  const [fruit1Value, setFruit1Value] = useState(0);
  const [fruit2Value, setFruit2Value] = useState(0);
  const [fruit3Value, setFruit3Value] = useState(0);
  const [fruit1Name, setFruit1Name] = useState("");
  const [fruit2Name, setFruit2Name] = useState("");
  const [fruit3Name, setFruit3Name] = useState("");
  const [pesoSnack, setPesoSnack] = useState(null);
  const [gramasPorFruta, setGramasPorFruta] = useState([]);

  const pesoMetabolico = Math.pow(peso, 0.75);
  const necessidadeEnergetica = pesoMetabolico * 95;
  const caloriasPermitidas = necessidadeEnergetica * 0.1;

  const calcularPesoDoSnack = (c1, c2, c3) => {
    const calorias = [c1, c2, c3].filter((c) => c > 0);
    const proporcao = 1 / calorias.length;

    let pesoTotal = 0;
    const gramas = [];

    calorias.forEach((caloriaFruta) => {
      const caloriasParaFruta = caloriasPermitidas * proporcao;
      const pesoFruta = caloriasParaFruta / caloriaFruta;
      pesoTotal += pesoFruta;
      gramas.push(pesoFruta);
    });

    setGramasPorFruta(gramas);
    return pesoTotal;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalPesoSnack = calcularPesoDoSnack(
      fruit1Value,
      fruit2Value,
      fruit3Value
    );
    setPesoSnack(totalPesoSnack);

    console.log("Peso:", peso);
    console.log(fruit1Name, fruit1Value);
    console.log(fruit2Name, fruit2Value);
    console.log(fruit3Name, fruit3Value);
    console.log("pesoMetabolico", pesoMetabolico);
    console.log("necessidadeEnergetica", necessidadeEnergetica);
    console.log("caloriasPermitidas", caloriasPermitidas);
    console.log("Peso total do snack:", totalPesoSnack.toFixed(0), "g");
    console.log(gramasPorFruta);
    
  };

  function getFruit1NameAndValue(e) {
    setFruit1Value(parseFloat(e.target.value));
    setFruit1Name(e.target.options[e.target.selectedIndex].text);
  }
  function getFruit2NameAndValue(e) {
    setFruit2Value(parseFloat(e.target.value));
    setFruit2Name(e.target.options[e.target.selectedIndex].text);
  }
  function getFruit3NameAndValue(e) {
    setFruit3Value(parseFloat(e.target.value));
    setFruit3Name(e.target.options[e.target.selectedIndex].text);
  }

  return (
    <Layout pageName={"מחשבון"}>
      <div className="lg:w-dvw border-black rounded-lg p-4 text-center bg-green-200 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col-reverse items-center justify-center py-5">
            <input
                className="max-w-[300px] bg-white text-center p-3 rounded-md shadow-sm"
              type="number"
              id="pesoAnimal"
              value={peso}
              onChange={(e) => setPeso(parseFloat(e.target.value))}
            />
            <label className="pl-3" htmlFor="pesoAnimal">
              :משקל{" "}
            </label>
          </div>

          <div className="flex flex-wrap justify-evenly items-center">
            <div className=" text-center mt-3">
              <select
                onChange={(e) => getFruit1NameAndValue(e)}
                className="bg-white block p-3 mb-2 rounded-md shadow-sm"
                id="fruta1"
              >
                <option value="0">סלקט</option>
                {calculadoraData.map((fruta, index) => (
                  <option key={index} value={fruta.caloriasGrama}>
                    {fruta.nome}
                  </option>
                ))}
              </select>

              <select
                onChange={(e) => getFruit2NameAndValue(e)}
                className="bg-white block p-3 mb-2 rounded-md shadow-sm"
                id="fruta2"
              >
                <option value="0">סלקט</option>
                {calculadoraData.map((fruta, index) => (
                  <option key={index} value={fruta.caloriasGrama}>
                    {fruta.nome}
                  </option>
                ))}
              </select>

              <select
                onChange={(e) => getFruit3NameAndValue(e)}
                className="bg-white block p-3 rounded-md shadow-sm"
                id="fruta3"
              >
                <option value="0">סלקט</option>
                {calculadoraData.map((fruta, index) => (
                  <option key={index} value={fruta.caloriasGrama}>
                    {fruta.nome}
                  </option>
                ))}
              </select>
            </div>

            {/* TABELA DE RESULTADOS */}
                          {pesoSnack !== null && !isNaN(pesoSnack) && (

            <div className="py-4 my-3 bg-green-400 rounded-md shadow-md">
                <>
                  <ul className="p-3">
                    {pesoMetabolico && necessidadeEnergetica && caloriasPermitidas && (
                      <>
                      <li>
                        צורך אנרגטי: {necessidadeEnergetica.toFixed(0)} קלוריות
                      </li>
                      <li>
                           קלוריות מותרות מחטיף: {caloriasPermitidas.toFixed(0)} קלוריות
                        </li>
                      </>
                    )}
                  
                    <li className="mt-4 font-bold">
                      משקל חטיף : {pesoSnack.toFixed(0)} גרם
                    </li>
                    {fruit1Name && (
                      <li>
                        {fruit1Name}: {gramasPorFruta[0]?.toFixed(0)} גרם 
 
                      </li>
                    )}
                    {fruit2Name && (
                      <li>
                        {fruit2Name}: {gramasPorFruta[1]?.toFixed(0)} גרם 
 
                      </li>
                    )}
                    {fruit3Name && (
                      <li>
                        {fruit3Name}: {gramasPorFruta[2]?.toFixed(0)} גרם 
 
                      </li>
                    )}
                  </ul>
                </>
            </div>
              )}
          </div>

          <button
            type="submit"
            className="bg-green-500 p-3 rounded mt-4 shadow-md"
          >
            לחשב
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Calculator;
