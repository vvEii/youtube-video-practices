import React, {useState} from 'react';

export default function AsyncHook() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <h1>Async React Hooks</h1>
      <form>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='Search for Gifs!'
        />
      </form>
    </div>
  )
}
