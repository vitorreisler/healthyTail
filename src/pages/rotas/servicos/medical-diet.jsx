import Layout from "@/components/layout";
const MedicalDiet = () => {
  return (
    <Layout pageName={"תפריט דיאטה רפואית"}>
      <picture className="max-w-[350px] my-auto mx-auto">
        <img
          className="rounded-2xl filter: drop-shadow-2xl"
          src="/images/dogeating.png"
          alt="dog eating healthy food"
          width="350"
        />
      </picture>
      <p className="text-black max-w-[590px] mx-auto my-auto px-3 py-3 text-lg text-center rtl  ">
        החתול מסרב לאכול את המזון הכלייתי? הכלב אוכל מזון היפואלרגני רק עם
        תוספות? יש יותר מבעיה רפואית אחת? אפשר להתאים את התזונה לכל הצרכים
        וטעמים. תפריט מותאם אישית ולפי הצרכים והמגבלות התזונתיים מאפשר טיפול
        אופטימלי לבעלי חיים ומעלה את קבלת המזון ע״י הכלבים והחתולים.
      </p>
    </Layout>
  );
};

export default MedicalDiet;
