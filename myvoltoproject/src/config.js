/**
 * Add your config changes here.
 * @module config
 * @example
 * export const settings = {
 *   ...defaultSettings,
 *   port: 4300,
 *   listBlockTypes: {
 *     ...defaultSettings.listBlockTypes,
 *     'my-list-item',
 *   }
 * }
 */
 
 import React from 'react';
 import formSVG from '@plone/volto/icons/form.svg';
import { defineMessages } from 'react-intl';
import {  
  MyFormView,
  MyFormEdit,
  EmailWidget,
  NumberWidget,
  SelectMyWidget
  } from './components';
  
import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  blocks as defaultBlocks,
  addonReducers as defaultAddonReducers,
  addonRoutes as defaultAddonRoutes,
} from '@plone/volto/config';

export const settings = {
  ...defaultSettings,
    supportedLanguages: ['en'],
  defaultLanguage: 'en',
};

export const views = {
  ...defaultViews,
};

export const widgets = {
  ...defaultWidgets,
    id: {
    ...defaultWidgets.id,
    email: EmailWidget,
    number: NumberWidget,
    select: SelectMyWidget,
  },
};

const FormBlock = {
myComp: {
    id: 'myComp',
    title: 'MyComp',
    icon: formSVG,
    group: 'form',
    view: MyFormView,
    edit: MyFormEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  },
};

const groupBlocksOrder = [
  { id: 'mostUsed', title: 'Most used' },
  { id: 'text', title: 'Text' },
  { id: 'media', title: 'Media' },
  { id: 'common', title: 'Common' },
  { id: 'form', title: 'Form' },
];
export const blocks = {
  ...defaultBlocks,
  groupBlocksOrder,
  blocksConfig: {
    ...defaultBlocks.blocksConfig,
    ...FormBlock,
  },
};

export const addonRoutes = [...defaultAddonRoutes];
export const addonReducers = { ...defaultAddonReducers };
