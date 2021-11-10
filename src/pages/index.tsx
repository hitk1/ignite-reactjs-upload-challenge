import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { useEffect } from 'react';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    async ({ pageParam = null }) => {
      return await api.get(
        '/api/images',
        {
          params: {
            after: pageParam
          }
        }
      ).then(response => response.data)
    },
    {
      getNextPageParam: (lastRequest, _) => {
        const { after } = lastRequest
        return after || null
      }
    }
  );

  const formattedData = useMemo(() => data?.pages?.map(item => item.data).flat() || [], [data]);

  return (
    <>
      <Header />

      {isLoading && <Loading />}
      {isError && <Error />}

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />

        {hasNextPage && (
          <button
            type="button"
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
          </button>
        )}
      </Box>
    </>
  );
}
