import { Grid, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import BookImage from "@/public/images/reference/book.webp";

function Header() {
  return (
    <Grid container>
      <Grid item sm={4}>
        <Image
          src={BookImage}
          style={{
            position: "relative",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "1rem",
          }}
          alt="a book image"
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
              مقدمة عن علم المواريث
            </Typography>
            <Typography
              variant="body"
              component="p"
              sx={{ textShadow: "2px 2px #000" }}
            >
              هو العلم بالقواعد و الضوابط الفقهية و الحسابية التي يُعرف بها نصيب
              كل وارث ممن يخلفون الميت في تركته، و يُعرف أيضاً بعلم الفرائض.
            </Typography>

            <Typography
              variant="body"
              component="p"
              sx={{ textShadow: "2px 2px #000", my: 1 }}
            >
              و قد إهتمّ القرآن الكريم بهذا العلم فبيّن معظم أحكامه تفصيلّياً، و
              إهتم سيدنا محمد رسول اللّه صلّى اللّه عليه و سلّم بهذا العلم
              إهتماماً كبيراً و إعتنى به صحابته من بعده.
            </Typography>
            <Typography
              variant="body"
              component="p"
              className="quran-font"
              sx={{ textShadow: "2px 2px #000" }}
            >
              عن أبي هريرة رضيَّ اللّه عنه قال: قالَ رسولُ اللّه صلّى اللّهُ
              عليهِ و سلّم: ( تعلموا الفرائضَ و علّموها فإنها نصفُ العلمِ، وهو
              يُنسى و هو أولُ علمٍ يُنزع من أمتي).
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Header;
