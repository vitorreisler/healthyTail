import Layout from "@/components/layout";
const HomeNutrition = () => {
  return (
    <Layout pageName={"תפריט למזון ביתי"}>
      <picture className="max-w-[350px] my-auto mx-auto">
        <img
          className="rounded-2xl filter: drop-shadow-2xl"
          src="/images/home-nutrition2.png"
          alt="תפריט למזון ביתי"
          width="350"
        />
      </picture>
      <p className="text-black max-w-[590px] mx-auto my-auto px-3 py-3 text-lg text-center rtl  ">
        מעבר לתזונה ביתית בצורה מסודרת ועם תפריט בהתאמה אישית. ניתן לעשות תפריט
        אחד בלבד או מספר תפריטים כדי לגוון.
      </p>
    </Layout>
  );
};

export default HomeNutrition;
