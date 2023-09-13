import { useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getPokemonById, postPokemonsCaptured } from '../services/pokemonService';

export default function PokeCard(props:any) {
  const {pokemonId} = props;
  const [pokemon, setPokemon] = useState<any>(null);
  console.log("🚀 ~ file: PokeCard.tsx:35 ~ PokeCard ~ pokemonId:", pokemonId)

  useEffect(() => {
    const getPokemon = async () => {
        const data  = await getPokemonById(pokemonId);
        console.log("🚀 ~ file: PokeCard.tsx:47 ~ React.useEffect ~ data:", data)
        setPokemon(data);
    }
    getPokemon();
  }, []);

  const capturar = async () => {
    postPokemonsCaptured(pokemon)    
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      {pokemon && <CardHeader
        avatar={
          (pokemon) && <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {pokemon.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={pokemon.name}
        subheader={`weight: ${pokemon.weight}`}
      />}
      <CardMedia
        component="img"
        height="194"
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={capturar}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}