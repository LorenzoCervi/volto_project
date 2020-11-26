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
import createInlineStyleButton from 'draft-js-buttons/lib/utils/createInlineStyleButton';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import underlineSVG from '@plone/volto/icons/underline.svg';
import codeSVG from '@plone/volto/icons/code.svg';



import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  blocks as defaultBlocks,
  addonReducers as defaultAddonReducers,
  addonRoutes as defaultAddonRoutes,
} from '@plone/volto/config';

import {AlbumView, FullView,RatingWidget,FaqView} from './components';

const UnderlineButton = createInlineStyleButton({
  style: 'UNDERLINE',
  children: <Icon name={underlineSVG} size="24px" />,
});

const CodeButton = createInlineStyleButton({
  style: 'CODE',
  children: <Icon name={codeSVG} size="24px" />,
});



export const settings = {
  ...defaultSettings,
    supportedLanguages: ['it'],
  defaultLanguage: 'it',
  richTextEditorInlineToolbarButtons: [
  CodeButton,
    UnderlineButton,
    ...defaultSettings.richTextEditorInlineToolbarButtons,
  ],
};

//CONTIENE TUTTE LE VIEWS, TRA CUI UN OGGETTO CHIAMATO
// layoutViews CHE REGISTRA TUTTE LE VIEWS DI LAYOUT
export const views = {
  ...defaultViews,
  layoutViews: {
  ...defaultViews.layoutViews,
  full_view: FullView,
  album_view: AlbumView,
  faq_view: FaqView,
  },
};

export const widgets = {
  ...defaultWidgets,
  id:{
  ...defaultWidgets.id,
  rating: RatingWidget,
  },
};

export const blocks = {
  ...defaultBlocks,
};

export const addonRoutes = [...defaultAddonRoutes];
export const addonReducers = {...defaultAddonReducers};
