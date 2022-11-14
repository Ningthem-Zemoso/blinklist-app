import React from 'react';
import MyLibraryComponent from '../../components/organisms/MyLibrary';
import MainTemplate from '../../components/templates/Main';

const HomePage = () => {
  return (
    <MainTemplate>
      <MyLibraryComponent />
    </MainTemplate>
  )
}

export default HomePage