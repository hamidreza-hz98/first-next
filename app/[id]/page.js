import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default async function SingleMovie({ params }) {
  const { id } = params;

  const data = await fetch(
    `${process.env.BASE_URL}/movie/${id}?api_key=${process.env.API_KEY}`,
  );

  const movie = await data.json();

  return (
    <Grid container padding={8} spacing={2}>
      <Grid item xs={6}>
        <Typography variant="h3"> {movie.title} </Typography>
      </Grid>

      <Grid item xs={6}>
        <div
          style={{
            display: 'flex',
            height: '100%',
            justifyContent: 'flex-end',
            alignItems: 'end',
          }}
        >
          <span
            style={{
              backgroundColor: 'yellow',
              color: 'black',
              padding: '4px',
              borderRadius: '5px',
              width: 'fit-content',
            }}
          >
            {' '}
            {movie.vote_average.toFixed(1)}/10{' '}
          </span>
        </div>
      </Grid>

      <Grid item xs={12}>
        <Typography> {movie.release_date} </Typography>
      </Grid>

      <Grid item xs={12}>
        {movie.genres.map((genre) => (
          <small>
            {genre.name}{' '}
            {movie.genres.slice(-1)[0].name === genre.name ? '' : '/'}{' '}
          </small>
        ))}
      </Grid>

      <Grid item xs={12}>
        <div
          style={{
            width: '100%',
            height: 'auto',
            marginTop: '12px',
          }}
        >
          <Image
            src={process.env.IMAGE_URL + movie.backdrop_path}
            layout="responsive"
            width={4800}
            height={3600}
            alt={movie.title}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </Grid>

      <Grid item xs={12}>
        <Typography>{movie.overview}</Typography>
      </Grid>
    </Grid>
  );
}
