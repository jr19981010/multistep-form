import { Header } from './components/header/Header';
import { PersonalInfo } from './components/personalInfo/PersonalInfo';
import { SplitScreen } from './components/SplitScreen/SplitScreen';
function App() {
  return (   
      <>
      <SplitScreen>
        <Header/>
        <PersonalInfo/>
        </SplitScreen>
      </>
  );
}

export default App;
