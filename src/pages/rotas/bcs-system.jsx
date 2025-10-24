import Layout from "@/components/layout";
import { useState } from "react";
import ContactusButtons from "@/components/contactusButtons";

const BCSSystem = () => {
  const [petData, setPetData] = useState({
    name: "",
    age: "",
    breed: "",
    gender: "male",
    currentWeight: "",
    petType: "dog",
    bcsScore: null,
    neutered: "לא צוין",
  });

  const [bcsScore, setBcsScore] = useState(null);
  const [idealWeight, setIdealWeight] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [weightAdjustmentsConst, setWeightAdjustmentsConst] = useState(0);

  const bcsDescriptions = {
    dog: {
      1: "רזה מאוד - עצמות הצלעות, עמוד השדרה והירכיים בולטות בבירור",
      2: "רזה - עצמות הצלעות נמשות בקלות, מעט שומן מכסה אותן",
      3: "מתחת לאידיאלי - עצמות הצלעות נמשות בקלות, מותן נראה",
      4: "מעט מתחת לאידיאלי - עצמות הצלעות נמשות אך עם מעט מאמץ",
      5: "אידיאלי - עצמות הצלעות נמשות בקלות אך לא נראות, מותן ברור",
      6: "מעט מעל האידיאלי - עצמות הצלעות נמשות עם מעט מאמץ",
      7: "עודף משקל - עצמות הצלעות קשות למישוש, מותן פחות ברור",
      8: "עודף משקל משמעותי - עצמות הצלעות קשות מאוד למישוש",
      9: "השמנה - עצמות הצלעות קשות מאוד למישוש, אין מותן נראה",
    },
    cat: {
      1: "רזה מאוד - עצמות הצלעות ועמוד השדרה בולטות מאוד",
      2: "רזה - עצמות הצלעות נמשות בקלות, מותן נראה מלמעלה",
      3: "מתחת לאידיאלי - עצמות הצלעות נמשות בקלות",
      4: "מעט מתחת לאידיאלי - עצמות הצלעות נמשות אך עם מעט מאמץ",
      5: "אידיאלי - עצמות הצלעות נמשות אך לא נראות, מותן ברור",
      6: "מעט מעל האידיאלי - עצמות הצלעות נמשות עם מעט מאמץ",
      7: "עודף משקל - עצמות הצלעות קשות למישוש, מותן פחות ברור",
      8: "עודף משקל משמעותי - עצמות הצלעות קשות מאוד למישוש",
      9: "השמנה - עצמות הצלעות לא נמשות, בטן תלויה",
    },
  };

  const handleInputChange = (field, value) => {
    setPetData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateIdealWeight = (currentWeight, bcsScore) => {
    const weightAdjustments = {
      1: 1.4, // צריך להשמין 40%
      2: 1.3, // צריך להשמין 30%
      3: 1.2, // צריך להשמין 20%
      4: 0.1, // צריך להשמין 10%
      5: 1.0, //
      6: 0.9, // צריך להוריד 10%
      7: 0.8, // צריך להוריד 20%
      8: 0.7, // צריך להוריד 30%
      9: 0.6, // צריך להוריד 40%
    };
    setWeightAdjustmentsConst(weightAdjustments[bcsScore]);
    return currentWeight * weightAdjustments[bcsScore];
  };

  const generateRecommendations = (
    bcsScore,
    petType,
    currentWeight,
    idealWeight
  ) => {
    const recommendations = [];

    if (bcsScore <= 2) {
      recommendations.push("הגדלת כמות המזון היומית ב-30-40%");
      recommendations.push("הוספת מזון עתיר קלוריות ושומנים בריאים");
      recommendations.push("בדיקה וטרינרית לשלילת מחלות");
      recommendations.push("ביקורת חודשית למעקב אחר עלייה במשקל");
    } else if (bcsScore === 3) {
      recommendations.push("הגדלת כמות המזון היומית ב-20%");
      recommendations.push("הוספת מזון עתיר קלוריות ושומנים בריאים");
      recommendations.push("בדיקה וטרינרית לשלילת מחלות");
      recommendations.push("ביקורת חודשית למעקב אחר עלייה במשקל");
    } else if (bcsScore === 4) {
      recommendations.push("הגדלת כמות המזון היומית ב-5-10%");
      recommendations.push("מעקב שבועי אחר המשקל");
    } else if (bcsScore === 5) {
      recommendations.push("המשך התזונה הנוכחית - משקל אידיאלי!");
      recommendations.push("פעילות גופנית סדירה לשמירה על כושר");
      recommendations.push("ביקורת שנתית אצל הוטרינר");
    } else if (bcsScore >= 6) {
      const reductionPercent = Math.min(
        40,
        Math.max(
          10,
          Math.round(((currentWeight - idealWeight) / currentWeight) * 100)
        )
      );

      recommendations.push(`הפחתת כמות המזון ב-${reductionPercent}%`);
      recommendations.push("מעבר למזון דיאטטי דל קלוריות");
      recommendations.push("הגדלת הפעילות הגופנית הדרגתית");
      recommendations.push("ביקורת חודשית למעקב אחר ירידה במשקל");

      if (petData.neutered) {
        recommendations.push("התייחסות מיוחדת לחיות מחמד מסורסות/מעוקרות");
      }

      if (bcsScore >= 8) {
        recommendations.push("התייעצות דחופה עם וטרינר לתכנית הרזיה");
      }
    }

    return recommendations;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!petData.currentWeight || !bcsScore) {
      alert("אנא מלא את כל השדות הנדרשים");
      return;
    }

    const calculatedIdealWeight = calculateIdealWeight(
      parseFloat(petData.currentWeight),
      bcsScore
    );
    const petRecommendations = generateRecommendations(
      bcsScore,
      petData.petType,
      parseFloat(petData.currentWeight),
      calculatedIdealWeight
    );

    setIdealWeight(calculatedIdealWeight);
    setRecommendations(petRecommendations);
    setShowResults(true);
  };

  const resetForm = () => {
    setPetData({
      name: "",
      age: "",
      breed: "",
      gender: "male",
      currentWeight: "",
      petType: "dog",
      bcsScore: null,
      neutered: "לא צוין",
    });
    setBcsScore(null);
    setIdealWeight(null);
    setRecommendations([]);
    setShowResults(false);
  };

  const dogBreads = [
    "לברדור רטריבר",
    "גולדן רטריבר",
    "רועה גרמני",
    "בולדוג צרפתי",
    "בולדוג אנגלי",
    "פודל",
    "ביגל",
    "רוטוויילר",
    "יורקשייר טרייר",
    "דכסהונד",
    "סיביריאן האסקי",
    "פומרניאן",
    "שיה צו",
    "בוסטון טרייר",
    "מלטזר",
    "צ'יוואווה",
    "שארפיי",
    "אקיטה",
    "דוברמן",
    "קוקר ספנייל",
    "בורדר קולי",
    "ג'ק ראסל טרייר",
    "באסט האונד",
    "גרייהאונד",
    "ווימרנר",
    "רודזיאן רידג'בק",
    "סן ברנרד",
    "מסטיף",
    "בוקסר",
    "גרייט דיין",
    "אחר",
  ];

  const catBreads = [
    "פרסי",
    "מיין קון",
    "סיאמי",
    "רגדול",
    "בריטיש שורטהייר",
    "אביסיני",
    "ברמזי",
    "רוסי כחול",
    "אמריקן שורטהייר",
    "סקוטיש פולד",
    "ספינקס",
    "בנגל",
    "נורווגי יער",
    "טורקיש אנגורה",
    "סומלי",
    "מנקס",
    "טונקינזי",
    "אוריינטל",
    "קורניש רקס",
    "דבון רקס",
    "חתול רחוב",
    "מעורב",
    "אחר",
  ];

  return (
    <Layout pageName="מערכת BCS - הערכת מצב גוף">
      <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg shadow-lg rtl">
        {!showResults ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* בחירת סוג חיה */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">סוג החיה</h3>
              <div className="flex justify-center gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="petType"
                    value="dog"
                    checked={petData.petType === "dog"}
                    onChange={(e) =>
                      handleInputChange("petType", e.target.value)
                    }
                    className="ml-2"
                  />
                  🐶כלב
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="petType"
                    value="cat"
                    checked={petData.petType === "cat"}
                    onChange={(e) =>
                      handleInputChange("petType", e.target.value)
                    }
                    className="ml-2"
                  />
                  😺חתול
                </label>
              </div>
            </div>

            {/* פרטי החיה */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">פרטי החיה</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    שם החיה
                  </label>
                  <input
                    type="text"
                    value={petData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="הכנס שם"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">גיל</label>
                  <input
                    type="number"
                    min={0}
                    value={petData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="גיל בשנים"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">גזע</label>
                  <select
                    value={petData.breed}
                    onChange={(e) => handleInputChange("breed", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="גזע החיה"
                  >
                    <option value="">בחר גזע</option>
                    {petData.petType === "dog"
                      ? dogBreads.map((breed) => (
                          <option key={breed} value={`${breed}`}>
                            {breed}
                          </option>
                        ))
                      : catBreads.map((breed) => (
                          <option key={breed} value={`${breed}`}>
                            {breed}
                          </option>
                        ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">מין</label>
                  <select
                    value={petData.gender}
                    onChange={(e) =>
                      handleInputChange("gender", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">בחר מין</option>
                    <option value="male">זכר</option>
                    <option value="female">נקבה</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <span className="text-sm font-medium">
                    {petData.petType === "dog"
                      ? petData.gender === "male"
                        ? "האם הכלב מסורס?"
                        : "האם הכלבה מעוקרת?"
                      : petData.gender === "male"
                      ? "האם החתול מסורס?"
                      : "האם החתולה מעוקרת?"}
                  </span>
                  <div className="text-xs text-gray-600 mt-1">
                    חיות מחמד מסורסות/מעוקרות נוטות יותר לעלייה במשקל
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="neutered"
                      value="yes"
                      checked={petData.neutered === "yes"}
                      onChange={(e) =>
                        handleInputChange("neutered", e.target.value)
                      }
                      className="ml-2"
                    />
                    כן
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="neutered"
                      value="no"
                      checked={petData.neutered === "no"}
                      onChange={(e) =>
                        handleInputChange("neutered", e.target.value)
                      }
                      className="ml-2"
                    />
                    לא
                  </label>
                </div>
              </label>
            </div>

            {/* משקל נוכחי */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">משקל נוכחי</h3>
              <div className="flex justify-center">
                <div className="w-full max-w-xs">
                  <label className="block text-sm font-medium mb-2">
                    משקל (ק"ג)
                  </label>
                  <input
                    type="number"
                    min={0}
                    step="0.1"
                    value={petData.currentWeight}
                    onChange={(e) =>
                      handleInputChange("currentWeight", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-center"
                    placeholder="0.0"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">
                הערכת מצב הגוף (BCS)
              </h3>
              <p className="text-center mb-4 text-gray-600">
                בחר את הציון המתאים ביותר למצב הגוף של החיה (1-9):
              </p>
              {/*TESTE  */}
              {petData.petType === "dog" ? (
                <img
                  src="/images/BCS dog.png"
                  alt="BCS Dog Chart"
                  className="mx-auto mb-4 max-h-60 object-contain"
                />
              ) : (
                <img
                  src="/images/BCS cat.png"
                  alt="BCS Cat Chart"
                  className="mx-auto mb-4 max-h-60 object-contain"
                />
              )}
              {/*FIM TESTE */}

              <div className="grid grid-cols-3 gap-2 mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((score) => (
                  <button
                    key={score}
                    type="button"
                    value={score}
                    onClick={() => {
                      setBcsScore(score);
                      setPetData((prev) => ({ ...prev, bcsScore: score }));
                    }}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      bcsScore === score
                        ? "border-blue-500 bg-blue-100 text-blue-800"
                        : score <= 3
                        ? "border-blue-200 bg-blue-50 hover:bg-blue-100"
                        : score === 5
                        ? "border-green-200 bg-green-50 hover:bg-green-100"
                        : "border-red-200 bg-red-50 hover:bg-red-100"
                    }`}
                  >
                    <div className="font-bold text-lg">{score}</div>
                    {score <= 2 && <div className="text-xs"> רזה מאוד</div>}
                    {score === 3 && <div className="text-xs">רזה</div>}
                    {score === 4 && <div className="text-xs">רזה</div>}
                    {score === 5 && <div className="text-xs">אידיאלי</div>}
                    {score === 6 && <div className="text-xs"> מעל האידיאלי</div>}
                    {score === 7 && <div className="text-xs">עודף משקל</div>}
                    {score === 8 && <div className="text-xs">השמנה</div>}
                    {score === 9 && <div className="text-xs"> השמנה קיצונית</div>}
                  </button>
                ))}
              </div>

              {bcsScore && (
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-medium mb-2">ציון {bcsScore}:</h4>
                  <p className="text-sm text-gray-700">
                    {bcsDescriptions[petData.petType][bcsScore]}
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md"
              >
                חשב משקל אידיאלי והמלצות
              </button>
            </div>
          </form>
        ) : (
          /* תוצאות */
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                תוצאות הערכה
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
                <div>
                  <strong>שם החיה:</strong> {petData.name || "לא צוין"}
                </div>
                <div>
                  <strong>סוג:</strong>{" "}
                  {petData.petType === "dog" ? "כלב" : "חתול"}
                </div>
                <div>
                  <strong>משקל נוכחי:</strong> {petData.currentWeight} ק"ג
                </div>
                <div>
                  <strong>ציון BCS:</strong> {bcsScore}/9
                </div>
                <div>
                  <strong>עיקור / סירוס:</strong>{" "}
                  {petData.neutered === "yes"
                    ? "כן"
                    : petData.neutered == "no"
                    ? "לא"
                    : "לא צוין"}
                </div>

                <div className="md:col-span-2">
                  <strong>משקל אידיאלי מומלץ:</strong> {idealWeight?.toFixed(1)}{" "}
                  ק"ג
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-blue-600">
                המלצות טיפול:
              </h4>
              <ul className="space-y-2 text-right">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 ml-2">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="text-yellow-800 text-center">
                <strong>הערה חשובה:</strong> המלצות אלו הן כלליות בלבד. יש
                להתייעץ עם וטרינר לקבלת תכנית טיפול מותאמת אישית.
              </p>
            </div>

            {/*TESTE  */}
            <ContactusButtons
              name={petData.name}
              petType={petData.petType}
              age={petData.age}
              breet={petData.breed}
              currentWeight={petData.currentWeight}
              gender={petData.gender}
              bcsScore={petData.bcsScore}
              neutered={petData.neutered}
            />
            {/*FIM TESTE */}

            <div className="flex justify-center gap-4">
              <button
                onClick={resetForm}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                הערכה חדשה
              </button>
              <button
                onClick={() => window.print()}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                הדפס תוצאות
              </button>
            </div>
          </div>
        )}
      </div>
      {console.log(petData)}
    </Layout>
  );
};

export default BCSSystem;
