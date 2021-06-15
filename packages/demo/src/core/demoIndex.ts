import * as types from '../lib/types';
import * as index from '../storage/index';
import Fuse from 'fuse.js';

function getDemoIndex(): types.DemoIndex {
  try {
    const indexAll = index.getAll();
    const demoIndex: types.DemoIndex = indexAll.map(({ name, id }, code) => (
      {
        id,
        name,
        code: code
      }
    ));

    return demoIndex;
  } catch (error) {
    throw `get demo list failed: ${error}`;
  }
}

function searchDemoIndex(str: string): types.DemoIndex {
  try {
    const demoIndex = getDemoIndex();
    const fuse = new Fuse(demoIndex, {
      includeScore: true,
      keys: ['name']
    });

    const result = fuse.search(str);

    return result.map(({ item }, i) => ({
      ...item,
      code: i
    }));
  } catch (error) {
    throw `searchDemoIndex failed: ${error}`;
  }
}

export {
  getDemoIndex,
  searchDemoIndex
};