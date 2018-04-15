import React from 'react';
import DreamPage from "./DreamPage";

const items = [
  {
    childKey: 0,
    image: 'https://i.ytimg.com/vi/fX_0ECJp4GM/maxresdefault.jpg',
    header: 'Сон про Киру',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    meta: '2017.01.02',
  },
  {
    childKey: 1,
    image: 'https://i.pinimg.com/originals/e3/57/b5/e357b5af2c1dc292e5b4b36a39aa9c69.jpg',
    header: 'Первый сезон жижы',
    description: 'Description',
    meta: '2018.05.05',
  }
  ]
  
const DreamListPage = () => (
      <div className='ui container'>
         <DreamPage item={items} />
      </div>
)

export default DreamListPage; 