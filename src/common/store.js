import { combineReducers, createStore } from 'redux';
import { Actions, jsonformsReducer } from '@jsonforms/core';
import {
  materialCells,
  materialRenderers,
  materialCategorizationTester,
  MaterialCategorizationLayout
} from '@jsonforms/material-renderers';

export const createJsonFormsStore = ({ data, schema, uischema }) => {
  const store = createStore(
    combineReducers({ jsonforms: jsonformsReducer() }),
    {
      jsonforms: {
        renderers: materialRenderers.concat([
          {
            tester: materialCategorizationTester,
            renderer: MaterialCategorizationLayout
          }
        ]),
        cells: materialCells
      }
    }
  );

  store.dispatch(Actions.init(data, schema, uischema));

  return store;
};
