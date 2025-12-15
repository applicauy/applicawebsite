'use client';

import { useEffect } from 'react';
import { connectStateResults } from 'react-instantsearch-dom';
import { useRouter } from 'next/navigation';

import { Category } from "@/utils/models/Category";

type OwnProps = {
  category?: Category | null;
};

type AlgoliaProps = {
  searchResults?: any;
  searching?: boolean;
};

type Props = AlgoliaProps & OwnProps;

const NoResultsRedirectComponent = ({
  searchResults,
  searching,
  category,
}: any) => {
  const router = useRouter();

  useEffect(() => {
    if (
      category &&
      !searching &&
      searchResults &&
      searchResults.nbHits === 0
    ) {
      router.push('/news');
    }
  }, [searchResults, searching, category, router]);

  return null;
};

export const NoResultsRedirect = connectStateResults<Props>(
    NoResultsRedirectComponent
  );
