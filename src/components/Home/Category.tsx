import { Box, Grid, Typography } from '@mui/material';

//Data
import CategoryData from 'Data/Home/Category.data';

const Category = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {CategoryData &&
          CategoryData.map((category, i) => (
            <Grid item {...{ md: 2 }} key={i}>
              <Box
                width="50%"
                component="img"
                src={category.image}
                alt={category.name}
              />
              <Typography variant="body1" component="p">
                {category.name}
              </Typography>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Category;
