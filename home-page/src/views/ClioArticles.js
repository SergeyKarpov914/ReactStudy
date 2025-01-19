import React, { useState } from "react";
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

const ARTICLES = [
  {
    'date': '1/19/2025',
    'path': 'Nine arts of software development.htm',
    'title': 'Nine Arts of Software Development',
  },
  {
    'date': '1/18/2025',
    'path': 'Nine arts of software development.htm',
    'title': 'Nine Arts of Software Development Part deux',
  },
];

const ArticleContent = ({path}) => {
  return path;
}

const ArticleCard = (props) => {
  const {
    articleData,
  } = props;
  if (!articleData) return null;
  const {
    date,
    path,
    title,
  } = articleData;

  return (
    <Card
      variant="outlined"
      sx={{
        p: 0,
        width: "100%",
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
        <Box
          p={2}
          display="flex"
          sx={{
            flexDirection: 'column'
          }}
        >
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h6" color="info">{date}</Typography>
        </Box>
        <Divider />
        <Box p={2}>
          <ArticleContent />
        </Box>
      </CardContent>
    </Card>
  );
};

const ArticlesList = (props) => {
  const {
    currentArticleIdx,
    setArticleIdx,
  } = props;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          p: 0,
          width: "100%",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={2}
              >
                <Typography variant="h4">Articles</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ARTICLES.map(({date, path, title}, idx) => (
              <TableRow 
                selected={idx === currentArticleIdx}
                onClick={() => setArticleIdx(idx)}
                sx={{
                  cursor: 'pointer'
                }}
              >
                <TableCell>
                  {date}
                </TableCell>
                <TableCell>
                  {title}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
};

const ArticlesContainer = () => {
  const [articleIdx, setArticleIdx] = useState(0);
  const currentArticleData = ARTICLES[articleIdx];

  return (
    <Box
      sx={{
        marginLeft: "auto",
        display: "flex",
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
      />
      <ArticleCard
        articleData={currentArticleData}
      />
    </Box>
  );
}

const ClioArticles = () => {
   
  console.log("Articles Element");
  
  return (
    <Box>
      <Box>
        <Card
          height="100%"
          variant="outlined"
        >
          <CardContent
            sx={{
              p: 0,
              '&:last-child': { pb: 0},
            }}
          >
            <Typography
              variant="h3"
            >
              Software Architecture and Design Articles
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <ArticlesContainer />
      </Box>
    </Box>
  );
};
export default ClioArticles;
