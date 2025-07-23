import HrElement from "@/components/hrElement";
import Layout from "@/components/layout";
import Reviews from "@/components/reviews";

const About = () => {
  return (
    <>
      <Layout pageName={"עלינו "}>
        <section className="flex flex-col">
          <div className="flex flex-wrap">
            <picture className="max-w-[350px] my-auto mx-auto">
              <img
                className="rounded-2xl filter: drop-shadow-2xl"
                src="/images/yon86bg.png"
                alt="Dr yon railiano"
              />
            </picture>
            <p className="text-black max-w-[590px] mx-auto my-auto px-3 py-3 text-lg rtl  ">
              ד״ר יון ראיליאנו <br />
              <br /> וטרינר עם תשוקה אמיתית לבריאות והתנהגות בעלי חיים! 🐾✨{" "}
              <br />
              <br /> מאז שסיים את לימודיו ברפואה וטרינרית בשנת 2016, ד״ר
              ראיליאנו לא מפסיק להעמיק, ללמוד ולחדש! עם תואר מוסמך במדעי בעלי
              החיים והרפואה הווטרינרית ותארים מתקדמים בתחום הרפואה ההתנהגותית,
              הוא משלב ידע מדעי נרחב עם גישה חומלת וייחודית לכל מטופל.
              <br />
              <br /> כחבר בארגונים המובילים בעולם – AVSAB, AAVN ו-ESVCN – ד״ר
              ראיליאנו מחויב להביא את הסטנדרטים הגבוהים ביותר בטיפול בבעלי חיים,
              במיוחד בתחומי ההתנהגות והתזונה הקלינית. עם הסמכה יוקרתית בתזונה
              קלינית ותואר Elite Fear Free Certified, הוא מעניק טיפול מותאם
              אישית, שמפחית סטרס ומעצים את איכות החיים של כל בעל חיים שהוא פוגש!
              <br />
              <br /> אם אתם מחפשים וטרינר עם ידע עמוק, תשוקה אמיתית ומסירות
              אינסופית – ד״ר יון ראיליאנו כאן כדי להעניק לבעלי החיים שלכם את
              הטוב ביותר! 🩺🐶🐱
            </p>
          </div>
          <div className="">
            <HrElement />
          </div>
          {/*<section>
            <Reviews/>
          </section>*/}
        </section>
      </Layout>
    </>
  );
};

export default About;
