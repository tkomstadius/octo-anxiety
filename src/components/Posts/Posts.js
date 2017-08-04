import React from 'react';

import fabrics from '../../../fabric-info.json';
import Post from '../Post/Post';

const Fabrics = () => (
  <div>
    {fabrics.posts.map(post => <Post {...post} titleLink key={post.slug} />)}
  </div>
);

export default Fabrics;
