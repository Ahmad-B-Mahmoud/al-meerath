import { Grid, Card, CardContent, Typography } from "@mui/material";
import islamic_todo from "@/public/images/reference/islamic_todo.webp";
import Image from "next/image";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";

function TermsSection() {
  return (
    <Grid container alignItems="center">
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
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="h6" component="span">
                      أولاً
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      تجهيز الميّت
                    </Typography>
                    <Typography>
                      المراد به نفقات الغسل و التكفين و الحمل و الدفن.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="h6" component="span">
                      ثانياً
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      الديون العينية
                    </Typography>
                    <Typography>
                      والمراد منها الديون التي تتعلق بعين من أعيان التركة قبل
                      وفاة المورث كما لو رهن الميت شيئاً من عقاراته في دين عليه
                      مقدم في الأداء من هذا الشئ المرهون.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="h6" component="span">
                      ثالثاً
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      الديون العادية
                    </Typography>
                    <Typography>وهذه الديون نوعان:</Typography>
                    <Typography>
                      ديون اللّه: مثل الزكاة و النذور و الكفارات.
                    </Typography>
                    <Typography>ديون العباد: مثل القرض و المهر.</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="h6" component="span">
                      رابعاً
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      الوصية
                    </Typography>
                    <Typography>
                      تأتي بعد الدين وقبل الإرث و الوصية تُنفذ في حدود الثُلث.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="h6" component="span">
                      خامساً
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      حق الورثة
                    </Typography>
                    <Typography>
                      يُقسم الباقي بعد أداء الحقوق السابقة على الورثة حسب
                      أنصبتهم الشرعيّة.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TermsSection;
