import { Grid, Card, CardContent, Typography } from "@mui/material";
import restrictions from "@/public/images/reference/restrictions.webp";
import Image from "next/image";

function RestrictionsSection() {
  return (
    <Grid container alignItems="center">
      <Grid item sm={5}>
        <Image
          src={restrictions}
          style={{
            position: "relative",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "1rem",
          }}
          alt="restrictions image."
          placeholder="blur"
        />
      </Grid>
      <Grid item sm={7}>
        <Card className="no-background">
          <CardContent>
            <Typography
              variant="h5"
              color="primary"
              fontWeight="bold"
              sx={{ textShadow: "2px 2px #000", pt: 2 }}
            >
              موانع الإرث
            </Typography>
            <Typography
              variant="body"
              sx={{ lineHeight: 2, textShadow: "2px 2px #000" }}
            >
              <ul>
                <li>الرقّ</li>
                <li>القتل</li>
                <li>
                  إختلاف الدين: قال رسولُ اللّه صلّى اللّه عليهِ وسلّم: (لا يرثُ
                  المسلم الكافر ولا الكافر المسلم) وقال: (لا يتوارث أهلُ ملتين
                  شتى)
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default RestrictionsSection;
