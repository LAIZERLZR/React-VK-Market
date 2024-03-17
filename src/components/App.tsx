import React from 'react';
import ProductList from './ProductList/ProductList';
import TotalSummary from './TotalSummary/TotalSummary';
import Header from './Header/Header';
import '../App.css';
import { AdaptivityProvider, AppRoot, Div, Panel, PanelHeader, View } from '@vkontakte/vkui';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ConfigProvider } from 'antd';
import '@vkontakte/vkui/dist/vkui.css';

const App: React.FC = () => {
  return (
    <>
      <ConfigProvider>
        <Provider store={store}>
          <AdaptivityProvider>
            <AppRoot>
              <View activePanel="cart-panel">
                <Panel id="cart-panel">
                  <PanelHeader>
                    <Header />
                  </PanelHeader>
                  <Div className="app_container">
                    <ProductList />
                    <TotalSummary />
                  </Div>
                </Panel>
              </View>
            </AppRoot>
          </AdaptivityProvider>
        </Provider>
      </ConfigProvider>
    </>
  );
};

export default App;
