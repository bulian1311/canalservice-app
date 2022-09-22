export const fetchPosts = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );

    return response.json();
  } catch (err) {
    console.error(err.message);
  }
};

export const fetchUser = async (userId) => {
  try {
    const resUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const resPhoto = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${userId}&_limit=1`
    );

    const user = await resUser.json();
    const photo = await resPhoto.json();

    user.photo = photo[0].thumbnailUrl;

    return user;
  } catch (err) {
    console.error(err.message);
  }
};
