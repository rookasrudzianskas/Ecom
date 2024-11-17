import React from 'react';

const SearchPage = async ({searchParams, }: { searchParams: { query: string; } }) => {
  const {query} = searchParams;
  const products = await searchParamsByName(query);

  return (
    <div>
      Search page for {query}
    </div>
  );
};

export default SearchPage;
// by Rokas with ❤️
