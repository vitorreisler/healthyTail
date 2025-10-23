import Layout from "@/components/layout";
import { useState } from "react";
import ContactusButtons from "@/components/contactusButtons";

const BCSSystem = () => {
  const [petData, setPetData] = useState({
    name: "",
    age: "",
    breed: "",
    gender: "",
    currentWeight: "",
    petType: "dog",
    bcsScore: null,
    neutered: null,
  });

  const [bcsScore, setBcsScore] = useState(null);
  const [idealWeight, setIdealWeight] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const bcsDescriptions = {
    dog: {
      1: "רזה מאוד - עצמות הצלעות, עמוד השדרה והירכיים בולטות בבירור",
      2: "רזה - עצמות הצלעות נמשות בקלות, מעט שומן מכסה אותן",
      3: "אידיאלי - עצמות הצלעות נמשות בקלות אך לא נראות, מותן ברור",
      4: "עודף משקל קל - עצמות הצלעות קשות למישוש, מותן פחות ברור",
      5: "השמנה - עצמות הצלעות קשות מאוד למישוש, אין מותן נראה",
    },
    cat: {
      1: "רזה מאוד - עצמות הצלעות ועמוד השדרה בולטות מאוד",
      2: "רזה - עצמות הצלעות נמשות בקלות, מותן נראה מלמעלה",
      3: "אידיאלי - עצמות הצלעות נמשות אך לא נראות, מותן ברור",
      4: "עודף משקל - עצמות הצלעות קשות למישוש, מותן פחות ברור",
      5: "השמנה - עצמות הצלעות לא נמשות, בטן תלויה",
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
      1: 1.15, // צריך להשמין 15%
      2: 1.05, // צריך להשמין 5%
      3: 1.0, // משקל אידיאלי
      4: 0.95, // צריך להוריד 5%
      5: 0.85, // צריך להוריד 15%
    };

    return currentWeight * weightAdjustments[bcsScore];
  };

  const generateRecommendations = (
    bcsScore,
    petType,
    currentWeight,
    idealWeight
  ) => {
    const recommendations = [];

    if (bcsScore === 1 || bcsScore === 2) {
      recommendations.push("הגדלת כמות המזון היומית ב-10-20%");
      recommendations.push("הוספת מזון עתיר קלוריות ושומנים בריאים");
      recommendations.push("בדיקה וטרינרית לשלילת מחלות");
      recommendations.push("ביקורת חודשית למעקב אחר עלייה במשקל");
    } else if (bcsScore === 3) {
      recommendations.push("המשך התזונה הנוכחית - משקל אידיאלי!");
      recommendations.push("פעילות גופנית סדירה לשמירה על כושר");
      recommendations.push("ביקורת שנתית אצל הוטרינר");
    } else if (bcsScore === 4 || bcsScore === 5) {
      recommendations.push("הפחתת כמות המזון ב-10-25%");
      recommendations.push("מעבר למזון דיאטטי דל קלוריות");
      recommendations.push("הגדלת הפעילות הגופנית הדרגתית");
      recommendations.push("ביקורת חודשית למעקב אחר ירידה במשקל");
      if (bcsScore === 5) {
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
      gender: "",
      currentWeight: "",
      petType: "dog",
      bcsScore: null,
      neutered: null,
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
                  כלב
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
                  חתול
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
                          <option key={breed} value={`${breed}`}>{breed}</option>
                        ))
                      : catBreads.map((breed) => (
                          <option value={`${breed}`}>{breed}</option>
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
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">
                סטטוס עיקור / סירוס
              </h3>
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

            {/* הערכת BCS */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">
                הערכת מצב הגוף (BCS)
              </h3>
              <p className="text-center mb-4 text-gray-600">
                בחר את הציון המתאים ביותר למצב הגוף של החיה:
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

              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((score) => (
                  <label
                    key={score}
                    className="flex items-start cursor-pointer p-3 border rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="bcsScore"
                      value={score}
                      checked={bcsScore === score}
                      onChange={(e) => {
                        const score = parseInt(e.target.value);
                        setBcsScore(score);
                        setPetData((prev) => ({ ...prev, bcsScore: score }));
                      }}
                      className="mt-1 ml-3"
                      required
                    />
                    <div>
                      <div className="font-medium">ציון {score}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {bcsDescriptions[petData.petType][score]}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
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
                  <strong>ציון BCS:</strong> {bcsScore}/5
                </div>
                <div>
                  <strong>עיקור / סירוס:</strong>{" "}
                  {petData.neutered === "yes"
                    ? "כן"
                    : petData.neutered === "no"
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
    </Layout>
  );
};

export default BCSSystem;
