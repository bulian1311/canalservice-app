import React, { useState, useEffect } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import { PostItem } from './post-item';
import { styles } from './post-list.styles';
import { Spacer, Spinner } from '../ui';
import { fetchPosts } from '../../api';

export const PostList = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const { width } = useWindowDimensions();
  const numColumns = width < 600 ? 1 : 2;

  useEffect(() => {
    setLoading(true);

    fetchPosts().then((posts) => {
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  const renderItem = ({ item, index }) => (
    <>
      <PostItem post={item} />
      {index % 2 === 0 && <Spacer horizontal size={20} />}
    </>
  );

  if (loading) return <Spinner />;

  return (
    <FlatList
      contentContainerStyle={styles.list}
      key={numColumns}
      numColumns={numColumns}
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};
