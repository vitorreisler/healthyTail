import Layout from "@/components/layout";
const Diet = () => {
  return (
    <Layout pageName={"תכנית ירידה במשקל"}>
      <picture className="max-w-[350px] my-auto mx-auto">
        <img
          className="rounded-2xl filter: drop-shadow-2xl"
          src="/images/dietCat.png"
          alt="Sad cat on the scale"
          width="350"
        />
      </picture>
      <p className="text-black max-w-[590px] mx-auto my-auto px-3 py-3 text-lg text-center rtl  ">
        הכלב בעודף משקל? החתול כבד במיוחד? לשמור על משקל תקין משפר את הבריאות של
        בעלי חיים. עודף משקל זה גורם סיכון לבעיות רבות ופוגע באיכות החיים של
        בעלי החיים. התכנית כוללת ליווי לפרק זמן שמתאים לכם וגם אחרי שמגיעים
        למשקל הרצוי.
      </p>
    </Layout>
  );
};

export default Diet;
