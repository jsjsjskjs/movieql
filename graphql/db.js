export const people = [
  {
    id: '0',
    name: 'Nicolas',
    age: 18,
    gender: 'female'
  },
  {
    id: '1',
    name: 'Jisu',
    age: 18,
    gender: 'female'
  },
  {
    id: '2',
    name: 'Japan Guy',
    age: 18,
    gender: 'male'
  },
  {
    id: '3',
    name: 'Daal',
    age: 18,
    gender: 'male'
  },
  {
    id: '4',
    name: 'JD',
    age: 18,
    gender: 'male'
  },
  {
    id: '5',
    name: 'moondaddi',
    age: 18,
    gender: 'male'
  },
  {
    id: '6',
    name: 'flynn',
    age: 18,
    gender: 'male'
  }
]

let movies = [
  {
    id: 0,
    name: 'Star Wars - The new one',
    score: 1
  },
  {
    id: 1,
    name: 'Avengers - The new one',
    score: 8
  },
  {
    id: 2,
    name: 'the godfather i',
    score: 99
  },
  {
    id: 3,
    name: 'logan',
    score: 2
  }
]

export const getById = (id) => {
  const filteredMovies = movies.filter((el) => id === el.id)
  return filteredMovies[0]
}

export const getMovies = () => movies

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((el) => id !== el.id)
  if(movies.length > cleanedMovies.length) {
    movies = cleanedMovies
    return true
  } else {
    return false
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  }
  movies.push(newMovie)
  return newMovie
}
