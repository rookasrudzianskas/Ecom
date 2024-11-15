import React from 'react';

const SearchPage = async ({searchParams, }: { searchParams: { query: string; } }) => {
  const {query} = searchParams;

  return (
    <div>
      Search page for {query}
    </div>
  );
};

export default SearchPage;
// by Rokas with ❤️
