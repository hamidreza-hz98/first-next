import MovieCard from '@/components/MovieCard';
import { Typography, Grid } from '@mui/material';

export default async function Home() {
  const data = await fetch(
    `${process.env.BASE_URL}/movie/popular?api_key=${process.env.API_KEY}`,
  );

  const { results } = await data.json();

  console.log(results[0]);

  return (
    <Grid container padding={8} spacing={2}>
      <Grid item>
        <Typography variant="h3"> Best Selling Movies </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography> Gathered and created by Hamidreza </Typography>
      </Grid>

      {results.map((movie) => (
        <Grid item xs={12} sm={4} md={3}>
          <MovieCard
            image={movie.poster_path}
            title={movie.title}
            date={movie.release_date}
            id={movie.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}
