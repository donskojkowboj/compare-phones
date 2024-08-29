import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { phoneStore } from './stores/PhoneStore';
import phonesData from './api/data/PhonesData.json';
import { Layout } from './components/pagesComponents/Layout';
import { MainPage } from './components/pages/MainPage';

const App = observer(() => {
  const phones = phonesData.phonesData;
  useEffect(() => {
    phoneStore.setPhones(phones);
  }, []);

  return (
    <Layout>
      <MainPage />
    </Layout>
  );
});

export default App;
