import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default async function MovieCard({ title, date, image, id }) {
  return (
    <Link href={`/${id}`}>
      <Typography
        variant="h6"
        noWrap
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {' '}
        {title}{' '}
      </Typography>

      <Typography variant="small">{date}</Typography>

      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '100%',
          marginTop: '12px',
        }}
      >
        <Image
          src={process.env.IMAGE_URL + image}
          alt={title}
          layout="fill"
          objectFit="fill"
          style={{ borderRadius: '4px' }}
        />
      </div>
    </Link>
  );
}
