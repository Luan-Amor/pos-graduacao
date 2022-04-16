import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { Reddit } from './api/Reddit'
import { RedditItem } from './components/RedditItem';

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchReddit = async () => {
      const result = await Reddit.get("javascript");
      setItems(result);
    };
    fetchReddit();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={items}
        renderItem={({item}) => <RedditItem item={item}/>} />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
