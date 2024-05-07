import { Card, CardContent, Typography, Grid } from "@mui/material";
import QuranImage from "@/public/images/reference/Quran.webp";
import prophet_Mohammad from "@/public/images/reference/prophet_Mohammad.webp";
import Image from "next/image";

function ProofSection() {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item sm={4}>
          <Image
            src={QuranImage}
            style={{
              position: "relative",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "1rem",
            }}
            alt="Quran image"
            placeholder="blur"
          />
        </Grid>
        <Grid item sm={8}>
          <Card className="no-background" sx={{ mt: 4 }}>
            <CardContent>
              <Typography
                variant="h5"
                color="primary"
                fontWeight="bold"
                sx={{ textShadow: "2px 2px #000", pt: 2 }}
              >
                الآيات القرآنية التي تحدثت عن أحكام المواريث
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ textShadow: "2px 2px #000", mt: 2 }}
              >
                الآية رقم (11) من سورة النساء الصفحة رقم (60)
              </Typography>
              <Typography
                variant="body"
                className="quran-font"
                sx={{ lineHeight: 2, textShadow: "2px 2px #000" }}
              >
                بسم اللّه الرحمن الرّحيم: ‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏
                ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏ ‏‏‏
                ‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏
                ‏‏‏‏ ‏‏‏‏‏‏ ‏‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏
                ‏‏‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏
                ‏‏‏ ‏‏ ‏‏ ‏‏‏‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏
                ‏‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏‏
                ‏‏ ‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏ ‏‏‏‏‏‏‏
                ‏‏‏‏‏‏‏‏ ‏ ‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏
                ‏‏‏‏‏ ‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏‏‏
                ‏‏‏‏‏ ‏ صدّق اللّه العظيم.
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ textShadow: "2px 2px #000", mt: 2 }}
              >
                الآية رقم (12) من سورة النساء الصفحة رقم (60)
              </Typography>
              <Typography
                variant="body"
                className="quran-font"
                sx={{ lineHeight: 2, textShadow: "2px 2px #000" }}
              >
                بسم اللّه الرحمن الرّحيم: ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏
                ‏‏‏‏‏‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏‏
                ‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏
                ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏
                ‏‏‏‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏‏
                ‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏‏‏‏ ‏‏ ‏‏‏
                ‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏ ‏‏ ‏‏ ‏‏‏
                ‏‏‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏‏
                ‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏‏ ‏‏‏ ‏‏‏‏ ‏‏‏‏
                ‏‏ ‏‏‏ ‏‏‏ ‏‏‏‏ ‏ ‏‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏
                ‏‏‏ ‏‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏
                ‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏ صدّق اللّه العظيم.
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ textShadow: "2px 2px #000", mt: 2 }}
              >
                الآية رقم (176) من سورة النساء الصفحة رقم (81)
              </Typography>
              <Typography
                variant="body"
                className="quran-font"
                sx={{ lineHeight: 2, textShadow: "2px 2px #000" }}
              >
                بسم اللّه الرحمن الرّحيم: ‏‏‏‏‏‏‏ ‏‏ ‏‏ ‏‏‏‏‏‏
                ‏ ‏‏‏‏‏‏‏ ‏‏ ‏‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏
                ‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏ ‏‏
                ‏‏‏ ‏‏‏ ‏‏‏ ‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏
                ‏‏‏‏‏‏‏ ‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏
                ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏
                ‏‏‏ ‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏‏‏ ‏ صدّق اللّه
                العظيم.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container alignItems="center">
        <Grid item sm={4}>
          <Image
            src={prophet_Mohammad}
            style={{
              position: "relative",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "1rem",
            }}
            alt="a Logo for Mohammad name."
            placeholder="blur"
          />
        </Grid>
        <Grid item sm={8}>
          <Card className="no-background" sx={{ mt: 4 }}>
            <CardContent>
              <Typography
                variant="h5"
                color="primary"
                fontWeight="bold"
                sx={{ textShadow: "2px 2px #000", pt: 2 }}
              >
                الأحاديث النبوية الشريفة التي تحدثت عن أحكام المواريث
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ textShadow: "2px 2px #000", mt: 2 }}
              >
                الحديث الدال على نصيب العصبات
              </Typography>
              <Typography
                variant="body"
                className="quran-font"
                sx={{ lineHeight: 2, textShadow: "2px 2px #000" }}
              >
                عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ
                رَسُولُ اللَّهِ ﷺ: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا
                بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ textShadow: "2px 2px #000", mt: 2 }}
              >
                الحديث الدال على نصيب الأخت أو بنت الإبن مع الأخت الوحيدة
              </Typography>
              <Typography
                variant="body"
                className="quran-font"
                sx={{ lineHeight: 2, textShadow: "2px 2px #000" }}
              >
                وَعَنِ ابْنِ مَسْعُودٍ  فِي بِنْتٍ، وَبِنْتِ ابْنٍ، وَأُخْتٍ،
                قَضَى النَّبِيُّ ﷺ: لِلِابْنَةِ النِّصْف، وَلِابْنَةِ الِابْنِ
                السُّدُس تَكْمِلَةَ الثُّلُثَيْنِ، وَمَا بَقِيَ فَلِلْأُخْتِ.
                رَوَاهُ الْبُخَارِيُّ.
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ textShadow: "2px 2px #000", mt: 2 }}
              >
                الحديث الدال على نصيب الجدّة
              </Typography>
              <Typography
                variant="body"
                className="quran-font"
                sx={{ lineHeight: 2, textShadow: "2px 2px #000" }}
              >
                وَعَنِ ابْنِ بُرَيْدَةَ، عَنْ أَبِيهِ: أَنَّ النَّبِيَّ ﷺ جَعَلَ
                لِلْجَدَّةِ السُّدُسَ إِذَا لَمْ يَكُنْ دُونَهَا أُمٌّ. رَوَاهُ
                أَبُو دَاوُدَ، وَالنَّسَائِيُّ، وَصَحَّحَهُ ابْنُ خُزَيْمَةَ،
                وَابْنُ الْجَارُودِ، وَقَوَّاهُ ابْنُ عَدِيٍّ.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ProofSection;
