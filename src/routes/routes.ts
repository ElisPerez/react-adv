import React, { lazy } from 'react';
import { NoLazy } from '../01-LazyLoad/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

// const LazyPage1 = lazy(
//   () => import(/* webpackChunkName: "LazyPage1" */ '../01-LazyLoad/pages/LazyPage1')
// );


export const routes: Route[] = [
  { path: '/lazyLoad', component: lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-LazyLoad/layout/LazyLayout')), name: 'LazyLoading Nested' },
  { path: '/no-lazy', component: NoLazy, name: 'NoLazy Loading' },
  ];
