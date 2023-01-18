/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import React from 'react';
import { VideoChangeView } from './wrapComponent';
import { ArticleChangeView } from './wrapComponent';

export default function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case 'video':
        return <VideoChangeView {...item} />;

      case 'article':
        return <ArticleChangeView {...item} />;
    }
  });
}
