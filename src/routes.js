import React from 'react';

// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
// const Cards = React.lazy(() => import('./views/base/cards/Cards'));

const ListTask = React.lazy(() => import('./ListTask'));
const CreateTask = React.lazy(() => import('./CreateTask'));
const BulkDelete = React.lazy(() => import('./BulkDelete'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: ListTask },
  { path: '/create-task', name: 'Task Create', component: CreateTask, exact: true },
  { path: '/bulk-delete', name: 'Bulk Delete', component: BulkDelete },
];

export default routes;
