import ContactusButtons from "@/components/contactusButtons";
import Layout from "@/components/layout";
import { useState } from "react";

const Contactus = () => {
  const [petType, setPetType] = useState("");

  const handleInputChange = (petType, value) => {
    setPetType(value);
  };

  return (
    <>
      <Layout pageName={"דברו איתנו"}>
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-center">סוג החיה</h3>
                <div className="flex justify-center gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="petType"
                      value="כלב"
                      checked={petType === "כלב"}
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
                      value="חתול"
                      checked={petType === "חתול"}
                      onChange={(e) =>
                        handleInputChange("petType", e.target.value)
                      }
                      className="ml-2"
                    />
                    חתול
                  </label>
                </div>
              </div>
            <ContactusButtons petType={`${petType}`} />
        </div>
        
      </Layout>
    </>
  );
};

export default Contactus;
