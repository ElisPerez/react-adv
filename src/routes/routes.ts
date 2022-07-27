import React, { lazy } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

const LazyPage1 = lazy(
  () => import(/* webpackChunkName: "LazyPage1" */ '../01-LazyLoad/pages/LazyPage1')
);
const LazyPage2 = lazy(
  () => import(/* webpackChunkName: "LazyPage2" */ '../01-LazyLoad/pages/LazyPage2')
);
const LazyPage3 = lazy(
  () => import(/* webpackChunkName: "LazyPage3" */ '../01-LazyLoad/pages/LazyPage3')
);

export const routes: Route[] = [
  { path: '/lazy1', component: LazyPage1, name: 'LazyPage1' },
  { path: '/lazy2', component: LazyPage2, name: 'LazyPage2' },
  { path: '/lazy3', component: LazyPage3, name: 'LazyPage3' },
];
