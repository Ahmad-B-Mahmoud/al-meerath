import Image from "next/image";
import BookImage from "@/public/images/about/refBook.png";
import { Grid, Card, CardContent, Typography } from "@mui/material";

function UsedRef() {
  return (
    <Grid container alignItems="center">
      <Grid item sm={5}>
        <Image
          src={BookImage}
          style={{
            position: "relative",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "1rem",
          }}
          alt="a book image"
        />
      </Grid>
      <Grid item sm={7}>
        <Card className="no-background" sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" sx={{ textShadow: "2px 2px #000" }}>
              المرجع الذي تم الإستفادة منه لبناء هذا التطبيق هو كتاب{" "}
              <Typography variant="span" fontWeight="bold" color="primary">
                أحكام المواريث في الشريعة الإسلامية
              </Typography>{" "}
              للمؤلف جزاه اللّه عنا جزيل الشكر{" "}
              <Typography variant="span" fontWeight="bold" color="primary">
                نبيل كمال الدين طاحون
              </Typography>
              .
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default UsedRef;
