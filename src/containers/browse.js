import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
// import { Card, Loading, Player } from '../components';
import { Header } from '../components/header';
import Player from '../components/player';
import Card from '../components/card';
import Loading from '../components/loading';
import * as ROUTES from '../constants/routes';
import logo from '../logo.png';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profile';
// import { FooterContainer } from './footer';
import Footer from '../components/footer'
// import { Header } from '../components/header';

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    debugger
    fetchGenres();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);


  const fetchGenres = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=65836c0be1ed3720a320845daa52d65e&language=en-US`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setGenres(data.genres);
    } catch (err) {
      console.error(err);
    }
    fetchMovies();
  };

  const fetchMovies = async () => {
    let result = [];

    for (const genre of genres) {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=65836c0be1ed3720a320845daa52d65e&with_genres=${genre.id}`;
      const res = await fetch(url);
      const { results } = await res.json();

      result = [...result, ...results];
    }

    setMovies(result);
  };

  React.useEffect(() => {
    fetchMovies();
  }, [genres]);

  const resultArray = React.useMemo(() => {
    return genres.map((genre) => ({
      genre,
      movies: movies.filter((movie) => movie.genre_ids.includes(genre.id))
    }));
  }, [genres, movies]);



  React.useEffect(() => {
    fetchGenres();
  }, []);
  
  console.log("resssss :/:/:/:/:/");
  console.log(resultArray);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
              Series
            </Header.TextLink>
            <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {resultArray.map((slideItem) => (
          <Card key={slideItem.genre.id}>
            <Card.Title>{slideItem.genre.name}</Card.Title>
            <Card.Entities>
              {slideItem.movies.map((item,i) => (
                <Card.Item key={i} item={item}>
                  <Card.Image src={`https://image.tmdb.org/t/p/w500`+item.poster_path} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.overview}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <Footer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
