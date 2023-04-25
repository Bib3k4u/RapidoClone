import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import {Colors} from './../components/styles';

const {primary, teritary} = Colors;

const Stack = createStackNavigator();

const RootStack=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyled:{
                    backgroundColor:'transparent'
                },
                headerTintColor:teritary,
                headerTransparent:true,
                headerTitle:'',
                headerLeftContainerStyle: {
                    paddingLeft:20
                }
            }}
            initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                {/* options={{headerTintColor:primary}} */}
                <Stack.Screen  name="Welcome" component={Welcome}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;