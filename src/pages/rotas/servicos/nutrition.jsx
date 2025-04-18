import Layout from "@/components/layout";
const Nutrition = () => {
  return (
    <Layout pageName={"יעוץ תזונתי"}>
      <picture className="max-w-[350px] my-auto mx-auto">
        <img
          className="rounded-2xl filter: drop-shadow-2xl"
          src="/images/nutrition.jpg"
          alt="Dr yon railiano"
          width="350"
        />
      </picture>
      <p className="text-black max-w-[590px] mx-auto my-auto px-3 py-3 text-lg text-center rtl  ">
        יעוץ תזונתי מיועד להכיר את המטופל ולהבין את האפשרויות המתאימות לשינוי
        תזונתי. מיועד גם לבעלי חיים בריאים וגם לבעלי חיים שצריכים דיאטה מיוחדת
        לבעיות רפואיות. הייעוץ כולל בנייה של תפריט ראשוני בהתאם לצרכים של
        המטופל.
      </p>
    </Layout>
  );
};

export default Nutrition;
