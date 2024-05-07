import { Grid, Card, CardContent, Typography } from "@mui/material";
import pieChart from "@/public/images/reference/pieChart.webp";
import Image from "next/image";
import leagueImage from "@/public/images/reference/league.webp";

function HeirsSection() {
  return (
    <>
      <Grid container>
        <Grid item sm={6}>
          <Image
            src={pieChart}
            style={{
              position: "relative",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "1rem",
            }}
            alt="heirs pie Chart image."
            placeholder="blur"
          />
        </Grid>
        <Grid item sm={6}>
          <Card className="no-background">
            <CardContent>
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
                sx={{ textShadow: "2px 2px #000", pt: 2 }}
              >
                أصحاب الفروض: هم الورثة الذين قدّرت لهم الشريّعة أنصبة معينة في
                التركة
              </Typography>
              <Typography variant="body" sx={{ lineHeight: 2 }}>
                <ul>
                  <li>الأب</li>
                  <li>الأم</li>
                  <li>الجدّ أبو الأب</li>
                  <li>الجدّة أم الأب و أم الأم</li>
                  <li>الزوج</li>
                  <li>الزوجة</li>
                  <li>البنت</li>
                  <li>بنت الإبن</li>
                  <li>الأخ لأم</li>
                  <li>الأخت لأم</li>
                  <li>الأخت الشقيقة</li>
                  <li>الأخت لأب</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container alignItems="center">
        <Grid item sm={6}>
          <Image
            src={leagueImage}
            style={{
              position: "relative",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "1rem",
            }}
            alt="League of heirs."
            placeholder="blur"
          />
        </Grid>
        <Grid item sm={6}>
          <Card className="no-background" sx={{ mb: 4 }}>
            <CardContent>
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
                sx={{ textShadow: "2px 2px #000", pt: 2 }}
              >
                أصحاب العصبات: هم ورثة التركة الذكور من جهة الأب أو الإبن و من
                حكمهم من الإناث اللاتي يُعصبن بالغير أو مع الغير و تسمى هذه
                الطائفة عُصبة نسبية.
              </Typography>
              <Typography variant="body" sx={{ lineHeight: 2 }}>
                <ul>
                  <li>عصبة بالنفس:</li>
                  <li>بنوة</li>
                  <li>أبوة</li>
                  <li>أخوة</li>
                  <li>عمومة</li>
                  <li>عصبة بالغير:</li>
                  <li>إبن + بنت</li>
                  <li>إبن إبن + بنت إبن</li>
                  <li>أخ شقيق + أخت شقيقة</li>
                  <li>أخ لأب + أخت لأب</li>
                  <li>عصبة مع الغير:</li>
                  <li>أخت شقيقة مع الفرع الوارث المؤنث</li>
                  <li>أخت لأب مع الفرع الوارث المؤنث</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default HeirsSection;
