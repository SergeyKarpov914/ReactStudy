import React, { useState } from "react";
import parse from 'html-react-parser';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const DUMMY_HTML = `
Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/><br/><img src="/static/media/clio.logolong.4e9b76d033e3a8a2e158.png" />Aenean commodo ligula eget dolor.<br/><br/>Aenean massa.<br/><br/>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br/><br/>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.<br/><br/>Nulla consequat massa quis enim.<br/><br/>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.<br/><br/>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.<br/><br/>Nullam dictum felis eu pede mollis pretium.<br/><br/>Integer tincidunt.<br/><br/>Cras dapibus.<br/><br/>Vivamus elementum semper nisi.<br/><br/>Aenean vulputate eleifend tellus.<br/><br/>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.<br/><br/>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.<br/><br/>Phasellus viverra nulla ut metus varius laoreet.<br/><br/>Quisque rutrum.<br/><br/>Aenean imperdiet.<br/><br/>Etiam ultricies nisi vel augue.<br/><br/>Curabitur ullamcorper ultricies nisi.<br/><br/>Nam eget dui.<br/><br/>Etiam rhoncus.<br/><br/>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.<br/><br/>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.<br/><br/>Maecenas nec odio et ante tincidunt tempus.<br/><br/>Donec vitae sapien ut libero venenatis faucibus.<br/><br/>Nullam quis ante.<br/><br/>Etiam sit amet orci eget eros faucibus tincidunt.<br/><br/>Duis leo.<br/><br/>Sed fringilla mauris sit amet nibh.<br/><br/>Donec sodales sagittis magna.<br/><br/>Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.<br/><br/>Fusce vulputate eleifend sapien.<br/><br/>Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.<br/><br/>Nullam accumsan lorem in dui.<br/><br/>Cras ultricies mi eu turpis hendrerit fringilla.<br/><br/>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.<br/><br/>Nam pretium turpis et arcu.<br/><br/>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.<br/><br/>Sed aliquam ultrices mauris.<br/><br/>Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.<br/><br/>Praesent adipiscing.<br/><br/>Phasellus ullamcorper ipsum rutrum nunc.<br/><br/>Nunc nonummy metus.<br/><br/>Vestibulum volutpat pretium libero.<br/><br/>Cras id dui.<br/><br/>Aenean ut
`;

const ARTICLES = [
  {
    'path': 'Nine-arts-of-software-development.htm',
    'title': 'Nine Arts of Software Development',
  },
  {
    'path': 'Nine-arts-of-software-development2.htm',
    'title': 'Nine Arts of Software Development Part deux',
  },
];

const articlesCache = {};

async function fetchPage(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      return null;
    }
    const data = await response.text();
    return data || null;
  } catch (error) {
    return null;
  }
} 

const ArticleContent = (props) => {
  const {
    path,
    loading,
    setLoading,
  } = props;

  if (!path) return null;
  let articleHtml = articlesCache[path];

  if (!articleHtml) {
    setLoading(true);
    const fetchedPage = fetchPage(path);
    if (fetchedPage) {
      fetchedPage.then(text => {
        articleHtml = text;
        articlesCache[path] = articleHtml;
        setLoading(false);
      }).catch(err => console.log(err));
    }
  }

  if (articleHtml) {
    articleHtml = parse(articleHtml);
  }

  return (
    <div>
      <div>
        {path}
      </div>
      <br />
      {articleHtml || null}
    </div>
  )
}

const ArticleCard = (props) => {
  const {
    articleData,
    loading,
    setLoading,
  } = props;
  if (!articleData) return null;
  const {
    path,
    title,
  } = articleData;

  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        margin: {
          xs: '1rem 0 0 0',
          md: '0 0 0 17rem',
        },
      }}
    >
      <CardContent
        sx={{
          paddingTop: "2px !important",
          paddingBottom: "2px !important",
          paddingLeft: "2px !important",
          paddingRight: "2px !important",
        }}
      >
        <ArticleContent
          path={path}
          loading={loading}
          setLoading={setLoading}
        />
      </CardContent>
    </Card>
  );
};

const ArticlesList = (props) => {
  const {
    currentArticleIdx,
    setArticleIdx,
    setLoading,
  } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        margin: 0,
        p: 0,
        position: {
          xs: 'relative',
          md: 'fixed',
        },
        width: {
          xs: '100%',
          md: '16rem',
        },
      }}
    >
      <Table
        sx={{
          height: '100%',
        }}
      >
        <TableBody>
          {ARTICLES.map(({path, title}, idx) => (
            <TableRow 
              selected={idx === currentArticleIdx}
              onClick={() => {
                setArticleIdx(idx);
                setLoading(true);
              }}
              sx={{
                cursor: 'pointer'
              }}
            >
              <TableCell>
                <Typography variant='h5'>{title}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

const ClioArticles = () => {
  const [articleIdx, setArticleIdx] = useState(0);
  const [loading, setLoading] = useState(false);
  const currentArticleData = ARTICLES[articleIdx];

  return (
    <Box
      sx={{
        width: '100%',
        mt: {
          lg: 0,
          xs: 2,
          width: "100%",
        },
      }}
    >
      <ArticlesList
        currentArticleIdx={articleIdx}
        setArticleIdx={setArticleIdx}
        setLoading={setLoading}
      />
      <ArticleCard
        articleData={currentArticleData}
        loading={loading}
        setLoading={setLoading}
      />
    </Box>
  );
}

export default ClioArticles;
