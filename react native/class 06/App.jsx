import {Text, View} from 'react-native';
import Stack_Navigation from './config/Stack_Navigation';
import Tab_Navigation from './config/Tab_Navigation';
import Async_Storage from './Screens/Async_Storage';
import Image_Picker from './Screens/Image_Picker';
import Api_Screen from './Screens/Api_Screen';
import {PaperProvider} from 'react-native-paper';
import {Provider, useSelector} from 'react-redux';
import store from './store/store';
import Counter from './Screens/Counter';
import Firebase from './Screens/Firebase';

const App = () => {
  // const selector = useSelector(state => state);

  // console.log(selector);

  return (
    <>
      {/* <Tab_Navigation /> */}

      {/* <PaperProvider>
        <Api_Screen />
      </PaperProvider> */}

      <Provider store={store}>
        <Firebase />
      </Provider>

      {/* <Image_Picker /> */}
    </>
  );
};

export default App;
