import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedNews = await AsyncStorage.getItem('news');
        if (storedNews) {
          setNews(JSON.parse(storedNews));
        }

        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=4c301998cb89455dadec0442fe50e4a2&page=${page}`
        );

        const data = await response.json();
        const fetchedNews = data.articles;

        await AsyncStorage.setItem('news', JSON.stringify(fetchedNews));

        setNews((prevNews) => [...prevNews, ...fetchedNews]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <ScrollView>
      {loading && <Text>Loading...</Text>}
      {!loading &&
        news.map((article, index) => (
          <Card key={index}>
            <Card.Cover
              source={article.urlToImage ? { uri: article.urlToImage } : require('./assets/NoImg.png')}
            />
            <Card.Content>
              <Text>{article.title}</Text>
              <Text>{article.description}</Text>
             
            </Card.Content>
          </Card>
        ))}
      <Button
        mode="contained"
        onPress={handleLoadMore}
        disabled={loading}
      >
        Load More
      </Button>
    </ScrollView>
  );
};

export default NewsScreen;
