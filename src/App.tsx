import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar onGenreIdChange={setSelectedGenreId} genreId={selectedGenreId} />
      <Content genreId={selectedGenreId} />
    </div>
  )
}