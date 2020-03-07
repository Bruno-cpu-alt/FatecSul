import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Atendimento from "./src/screens/Atendimento";
import Cabeca from "./src/screens/Cabeca";
import Cadastro from "./src/screens/Cadastro";
import Tela1 from "./src/screens/Tela1";
import Mapa from "./src/screens/Mapa";

const DrawerNavigation = createDrawerNavigator({
  Atendimento: Atendimento,
  Cabeca: Cabeca,
  Cadastro: Cadastro,
  Tela1: Tela1,
  Mapa: Mapa
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Atendimento: Atendimento,
    Cabeca: Cabeca,
    Cadastro: Cadastro,
    Tela1: Tela1,
    Mapa: Mapa
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
