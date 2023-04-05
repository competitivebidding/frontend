import React from 'react';
import NewsList from './NewsList/NewsList';

// Эмитация базы данных. Данные будут приходить с бэка
const data =[{img1: '/src/components/pages/pageNews/img/quare.png', img2: '/src/components/pages/pageNews/img/quare.png', date: '16/02/2023   22:32', alt: 'News Image', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quasi labore provident, corrupti neque doloribus facere voluptates dolores aperiam consequatur architecto, dolor voluptatem! Necessitatibus, dolor aliquam enim eius eos nulla.', id: 1},
              {img1: '/src/components/pages/pageNews/img/quare.png', date: '16/02/2023   22:32', alt: 'News Image', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quasi labore provident, corrupti neque doloribus facere voluptates dolores aperiam consequatur architecto, dolor voluptatem! Necessitatibus, dolor aliquam enim eius eos nulla.', id: 2},
              {img1: '/src/components/pages/pageNews/img/quare.png', img2: '/src/components/pages/pageNews/img/quare.png', date: '16/02/2023   22:32', alt: 'News Image', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quasi labore provident, corrupti neque doloribus facere voluptates dolores aperiam consequatur architecto, dolor voluptatem! Necessitatibus, dolor aliquam enim eius eos nulla.', id: 3},
              {img1: '/src/components/pages/pageNews/img/quare.png', date: '16/02/2023   22:32', alt: 'News Image', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quasi labore provident, corrupti neque doloribus facere voluptates dolores aperiam consequatur architecto, dolor voluptatem! Necessitatibus, dolor aliquam enim eius eos nulla.', id: 4},
              {img1: '/src/components/pages/pageNews/img/quare.png', date: '16/02/2023   22:32', alt: 'News Image', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', id: 5},
              {img1: '/src/components/pages/pageNews/img/quare.png', img2: '/src/components/pages/pageNews/img/quare.png', date: '16/02/2023   22:32', alt: 'News Image', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', id: 6},
              {img1: '/src/components/pages/pageNews/img/quare.png', date: '16/02/2023   22:32', alt: 'News Image', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', id: 7},
              {img1: '/src/components/pages/pageNews/img/quare.png', img2: '/src/components/pages/pageNews/img/quare.png', date: '16/02/2023   22:32', alt: 'News Image', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', id: 8},
              {img1: '/src/components/pages/pageNews/img/quare.png', date: '16/02/2023   22:32', alt: 'News Image', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', id: 9},
];

const NewsPage = () => {
  return (
    <div>
      <NewsList data = {data}/>
    </div>
  );
}

export default NewsPage;
