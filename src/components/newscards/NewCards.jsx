import React from 'react'
import { Grid, Grow, makeStyles, Typography } from '@material-ui/core';
import NewsCard from './NewsCard/NewsCard';
import useStyles from './style';

const useStyle = makeStyles(theme =>({
  root:{

  },

}))
const NewCards = ({articles}) => {
  const classes = useStyle()
  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((articles, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard  i={i} article={articles} />
             {/* activeArticle={activeArticle} */}
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default NewCards
