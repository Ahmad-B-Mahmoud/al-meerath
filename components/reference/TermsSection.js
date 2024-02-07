import { Grid, Card, CardContent, Typography } from "@mui/material";
import islamic_todo from "@/public/images/reference/islamic_todo.webp";
import Image from "next/image";

function TermsSection() {
  return (
    <Grid container>
      <Grid item sm={5}>
        <Image
          src={islamic_todo}
          style={{
            position: "relative",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "1rem",
          }}
          alt="a todo-list image"
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
              الحقوق المتعلّقة بالتركة وترتيب أداءها
            </Typography>
            <Typography
              variant="body"
              sx={{ lineHeight: 2, textShadow: "2px 2px #000" }}
            >
              <ul>
                <li>
                  أولاً: تجهيز الميت: المراد به نفقات الغسل و التكفين و الحمل و
                  الدفن.
                </li>
                <li>
                  ثانياً: الديون العينية: والمراد منها الديون التي تتعلق بعين من
                  أعيان التركة قبل وفاة المورث كما لو رهن الميت شيئاً من عقاراته
                  في دين عليه مقدم في الأداء من هذا الشئ المرهون.
                </li>
                <li>
                  ثالثاً: الديون العادية: و هذه نوعان(ديون اللّه و ديون العباد)
                  و الأول مثل الزكاة و النذور و الكفارات و الثانية كالقرض و
                  المهر.
                </li>
                <li>
                  رابعاً: الوصية: تأتي بعد الدين وقبل الإرث و الوصية تُنفذ في
                  حدود الثُلث.
                </li>
                <li>
                  خامساً: حق الورثة: يُقسم الباقي بعد أداء الحقوق السابقة على
                  الورثة حسب أنصيبتهم الشرعيّة.
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TermsSection;
