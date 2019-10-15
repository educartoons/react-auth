import React from "react";
import PaginationStyles from "./styles/PaginationStyles";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { perPage } from "../config";
import Head from "next/head";
import Link from "next/link";
import Error from "./ErrorMessage";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <Error error={error} />;
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.floor(count / perPage);
      const page = props.page;
      return (
        <PaginationStyles>
          <Head>
            <title>
              Billabong | Page {page} of {pages}
            </title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: "/items",
              query: {
                page: page - 1
              }
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              ← Prev
            </a>
          </Link>
          <p>
            You are page {page} of {pages}
          </p>
          <Link
            prefetch
            href={{
              pathname: "/items",
              query: {
                page: page + 1
              }
            }}
          >
            <a className="next" aria-disabled={page >= pages}>
              Next →
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

export default Pagination;
