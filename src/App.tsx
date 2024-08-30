import { observer } from 'mobx-react-lite';
import { Layout } from './components/pagesComponents/Layout';
import { PhonePage } from './components/pagesComponents/PhonePage';

const App = observer(() => {
  return (
    <Layout>
      <PhonePage />
    </Layout>
  );
});

export default App;
