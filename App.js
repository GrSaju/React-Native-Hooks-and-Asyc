
import React, {useRef,useState} from 'react';
import {Text, useEffect, ScrollView, FlatList, SafeAreaView, Button, View,StyleSheet} from 'react-native';
import {ThemeContext} from './contexts/ThemeContext';
import HomeScreen from './components/HomeScreen/HomeScreen';

//useState
// const App = () => {
//   /*useState is used for determine the state of the app.
//   * text is defined in the component and setText is a method*/
//   const [text, setText] = useState('Hello');
//   return (
//     <SafeAreaView >
//      <Text onPress={() => setText('Pressed the button')}>
//        {text}
//      </Text>
//     </SafeAreaView>
//   );
// };


/* example useEffect is used whenever we need to fetch data from API if any button click or scroll events
* */
// const App = () => {
//   /*Added useState, to run a function whenever a data changes*/
//   const [text, setText] = useState('Press Me');
//   // const [text, setText] = useState(0);
//   useEffect(() => {
//     console.log('the Text changed');
//   }, [text]);
//   /*userEffect is used for... whenever the app renders,
//   we want to do something right after the render*/
//   /*deps[] is for, when the render completes, run the function*/
//   /*useEffect(() => {
//     console.log('the comp rendered');
//   }, []);*/
//   return (
//     <SafeAreaView >
//       <Text onPress={() => setText('U pressed Me')} >
//       {/*<Text onPress={() => setText(text + 1)} >*/}
//         {text}
//       </Text>
//     </SafeAreaView>
//   );
// };


//UseRef used to have reference to use an react element. for example using scroll view function called .current.scrollTo
// const App = () => {
//   let array = Array(500).fill(0);
// const handleClick = () => {
//   scrollViewRef.current.scrollTo({x:0,y:0, animated : true});
// };
//   const scrollViewRef = useRef(null);
//   return (
//     <SafeAreaView>
//         <ScrollView ref = {scrollViewRef}>
//           {array.map((item, index) => (
//             <Text key={index}>Hello World</Text>
//           ))}
//         </ScrollView>
//       <Button onPress={handleClick} title={'Scroll to top'}/>
//
//     </SafeAreaView>
//   );
// };


//Use context Hook is used to pass the data. eg. if we want to pass a data from one componenet to another. It is tedious. so solve we are using context
const App = () => {
   const [isDarkMode, setIsDarkMode] = useState();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  /*If we have a seperate component called HomeScreen and we dont want to pass the value one component by one componen*/
  return (
    //The darkmode context has been given commonly to all component
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{backgroundColor: isDarkMode ? '#000000' : '#ffffff'}}>
          <Text>Hello World</Text>
          <Button title={'Switch Mode'} onPress={toggleTheme} />
        </View>
        <HomeScreen/>
      </SafeAreaView>
    </ThemeContext.Provider>

  );
};
export default App;
