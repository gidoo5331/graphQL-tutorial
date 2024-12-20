let games = [
 { id: '1', title: 'The Legend of Zelda: Tears of the Kingdom', platform: ['Nintendo Switch'] },
  { id: '2', title: 'God of War: Ragnarok', platform: ['PS5', 'PS4'] },
  { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '4', title: 'Hogwarts Legacy', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '5', title: 'Cyberpunk 2077', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '6', title: 'Halo Infinite', platform: ['Xbox', 'PC'] },
  { id: '7', title: 'Forza Horizon 5', platform: ['Xbox', 'PC'] },
  { id: '8', title: 'Resident Evil 4 Remake', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '9', title: 'Final Fantasy XVI', platform: ['PS5'] },
  { id: '10', title: 'Starfield', platform: ['Xbox', 'PC'] },
  ]
  
  let authors = [
    { id: '1', name: 'Mario', verified: true },
    { id: '2', name: 'Luigi', verified: false },
    { id: '3', name: 'Peach', verified: true },
    { id: '4', name: 'Bowser', verified: false },
    { id: '5', name: 'Yoshi', verified: true },
    { id: '6', name: 'Link', verified: true },
    { id: '7', name: 'Zelda', verified: true },
    { id: '8', name: 'Samus', verified: false },
    { id: '9', name: 'Kirby', verified: true },
    { id: '10', name: 'Donkey Kong', verified: false },
  ]
  
  let reviews = [
    { id: '1', rating: 9, content: 'An amazing game with stunning visuals.', author_id: '1', game_id: '2' },
  { id: '2', rating: 8, content: 'Great story but a few bugs.', author_id: '2', game_id: '3' },
  { id: '3', rating: 10, content: 'A masterpiece in every sense.', author_id: '3', game_id: '1' },
  { id: '4', rating: 7, content: 'Good game but could use better mechanics.', author_id: '4', game_id: '1' },
  { id: '5', rating: 9, content: 'Highly enjoyable and worth the hype.', author_id: '5', game_id: '5' },
  { id: '6', rating: 6, content: 'Fun for a while but gets repetitive.', author_id: '6', game_id: '1' },
  { id: '7', rating: 8, content: 'Visually stunning and great soundtrack.', author_id: '7', game_id: '7' },
  { id: '8', rating: 10, content: 'Absolutely phenomenal experience!', author_id: '8', game_id: '8' },
  { id: '9', rating: 7, content: 'Decent game but overhyped.', author_id: '9', game_id: '9' },
  { id: '10', rating: 9, content: 'Engaging gameplay and great world-building.', author_id: '10', game_id: '10' },
  ]
  
  export default { games, authors, reviews }