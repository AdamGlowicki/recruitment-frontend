import React from 'react';
import './assets/styles/_import.scss'
import { Provider } from 'react-redux'
import {setupStore} from './redux/store'
import MainLayout from "./layout/MainLayout";
import AddTask from "./components/addTask/AddTask";
import DisplayTasks from './components/DisplayTasks/DisplayTasks';
import Search from "./components/search/Search";
import NoteLayout from "./layout/NoteLayout";

function App() {
  return (
      <Provider store={setupStore()}>
        <MainLayout>
            <Search/>
            <NoteLayout notes={<DisplayTasks/>} add={<AddTask/>}/>
        </MainLayout>
      </Provider>

  );
}

export default App;
