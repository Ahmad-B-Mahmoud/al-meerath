import { Grid, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import DeviceImage from "@/public/images/about/device.png";
import NoConnectionImage from "@/public/images/about/noConnection.png";
import NonProfitImage from "@/public/images/about/nonProfit.png";

function NotesAboutTheApp() {
  return (
    <Grid container>
      <Grid item sm={4}>
        <Card className="no-background">
          <Image
            src={DeviceImage}
            style={{
              position: "relative",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "1rem",
            }}
            alt="to-do-List image"
            placeholder="blur"
          />
          <CardContent>
            <Typography variant="body" sx={{ textShadow: "2px 2px #000" }}>
              هذا التطبيق يعمل على المتصفح الخاص بمستخدم التطبيق و لا يُخزن أي
              من بيانات حلّ المسألة.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4}>
        <Card className="no-background">
          <Image
            src={NoConnectionImage}
            style={{
              position: "relative",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "1rem",
            }}
            alt="no internet connection image."
            blurDataURL="data:..."
            placeholder="blur"
          />
          <CardContent>
            <Typography variant="body" sx={{ textShadow: "2px 2px #000" }}>
              التطبيق يعمل دون الحاجة للإتصال بالإنترنيت بعد فتح موقع التطبيق أو
              تثبيته لأول مرة.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4}>
        <Card className="no-background">
          <Image
            src={NonProfitImage}
            style={{
              position: "relative",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "1rem",
            }}
            alt="non profit image."
            blurDataURL="data:..."
            placeholder="blur"
          />
          <CardContent>
            <Typography variant="body" sx={{ textShadow: "2px 2px #000" }}>
              التطبيق هدفه تسهيل حلّ مسائل المواريث لإخوتي و أخواتي المسلمين و
              ليس للربح الماديّ.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default NotesAboutTheApp;
