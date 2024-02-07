import { Grid, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import HowTheAppWorksImage from "@/public/images/about/howTheAppWork.webp";

function HowTheAppWorks() {
  return (
    <Grid container alignItems="center">
      <Grid item sm={4}>
        <Image
          src={HowTheAppWorksImage}
          style={{
            position: "relative",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "1rem",
          }}
          alt="an image of how the app works."
          placeholder="blur"
        />
      </Grid>
      <Grid item sm={8}>
        <Card className="no-background">
          <CardContent sx={{ lineHeight: "2rem" }}>
            <Typography
              variant="h4"
              color="primary"
              fontWeight="bold"
              sx={{ textShadow: "2px 2px #000" }}
            >
              طريقة عمل التطبيق
            </Typography>
            <Typography variant="body" sx={{ textShadow: "2px 2px #000" }}>
              تطبيق المواريث يعمل على حلّ مسألة المسألة عن طريق تبسيط معطيات
              المسألة لعدّة خطوات تبدأ بمعلومات عامة عن التركة و من ثمّ إختيار
              الورثة حيث يكون إختيارهم حسب قربهم للمتوفى أو المتوفاة و الترتيب
              يماثل تقريباً الترتيب الموجود في آيات المواريث الموجودة في القرآن
              الكريم لتسهيل إختيار الورثة على مستخدم التطبيق، فهي ستبدأ بإختيار
              الأولاد و أولاد الأولاد ومن ثم الأباء و الزوج و الأجداد ومن بعدها
              الإخوة بأنواعهم (الأشقّاء و الأخوة لأب و الأخوة لأم) و أخيراً
              أبناء الأخ و الأعمام و أبناء الأعمام.
            </Typography>
            <br />
            <Typography variant="body" sx={{ textShadow: "2px 2px #000" }}>
              و عند إختيار أحد الورثة سيحُجب الوريث المُتأثر بذاك الوريث
              المُختار، وعملية إختيار الورثة سوف تتوقف عند إكتمال الورثة
              المحتملين.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default HowTheAppWorks;
