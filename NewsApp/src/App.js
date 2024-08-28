import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item}></NewsCard>;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={(item, index) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    flex: 1,
  },
  banner_image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default App;
