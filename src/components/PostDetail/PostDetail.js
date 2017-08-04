import React from 'react';

import Post from '../Post/Post';

import fabrics from '../../../fabric-info.json';

const PostDetail = ({match}) => (
  <div>
    {fabrics.posts.map((p) => {
      if(p.slug === match.params.slug) {
        return <Post {...p} key={p.slug} />;
      }
    })}
  </div>
);

export default PostDetail;
