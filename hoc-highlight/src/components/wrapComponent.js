import React from 'react';
import Popular from './Popular';
import New from './New';
import Video from './Video';
import Article from './Article';

function wrapComponent(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { item: props };
    }

    render() {
      const { views } = this.state.item;

      return (
        <>
          {views > 1000 ? (
            <Popular>
              <Component {...this.state.item} />
            </Popular>
          ) : views < 100 ? (
            <New>
              <Component {...this.state.item} />
            </New>
          ) : null}
        </>
      );
    }
  };
}

export const VideoChangeView = wrapComponent(Video);

export const ArticleChangeView = wrapComponent(Article);
