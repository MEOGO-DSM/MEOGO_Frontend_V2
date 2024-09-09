/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Login from './src/app/Login/page';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/app/main/page';
import IdAndPassword from './src/app/Signup/IdAndPassword';
import Community from './src/app/community/page';
import Name from './src/app/Signup/Name';
import School from './src/app/Signup/School';
import FindSchool from './src/app/Signup/FindSchool';
import School2 from './src/app/Signup/School2';
import Post from './src/app/community/Post';
import EditPost from './src/app/community/EditPost';
import AddTag from './src/app/community/AddTag';
import Review from './src/app/review/page';
import ReviewWrite from './src/app/review/ReviewWrite';
import Search from './src/app/search/page';
import NavBar from './src/components/NavBar';
import Signup from './src/app/Signup/page';
// import KeywordReview from './src/app/review/KeywordReview';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IdAndPassword"
          component={IdAndPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Name"
          component={Name}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="School"
          component={School}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FindSchool"
          component={FindSchool}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="School2"
          component={School2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NavBar"
          component={NavBar}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Community"
          component={Community}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditPost"
          component={EditPost}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddTag"
          component={AddTag}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Review"
          component={Review}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReviewWrite"
          component={ReviewWrite}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
