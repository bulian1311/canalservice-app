import React, { useState, useEffect } from 'react';
import { useWindowDimensions, Image } from 'react-native';
import { Card, Paragraph, Spacer, Spinner } from '../../ui';
import { styles } from './post-item.styles';
import { fetchUser } from '../../../api';

export const PostItem = ({ post }) => {
  const [userLoading, setUserLoading] = useState(false);
  const [user, setUser] = useState(null);
  const { width } = useWindowDimensions();
  const bigWidth = width > 700;

  useEffect(() => {
    setUserLoading(true);

    fetchUser(post.userId).then((user) => {
      setUser(user);
      setUserLoading(false);
    });
  }, []);

  const renderUserData = () => {
    if (userLoading) return <Spinner />;
    if (!user) return null;

    return (
      <>
        {bigWidth && (
          <Image
            style={{ width: 150, height: 150 }}
            source={{
              uri: user.photo,
            }}
          />
        )}
        <Spacer size={17} />
        <Paragraph>Author: {user.name}</Paragraph>
        <Spacer size={17} />
        <Paragraph>Company: {user.company.name}</Paragraph>
        <Spacer size={17} />
      </>
    );
  };

  return (
    <Card style={[styles.item, bigWidth && styles.itemBig]}>
      {renderUserData()}

      <Paragraph>Title: {post.title}</Paragraph>

      {bigWidth && (
        <>
          <Spacer size={17} />
          <Paragraph>{post.body}</Paragraph>
        </>
      )}

      <Spacer size={17} />
    </Card>
  );
};
