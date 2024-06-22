import { ServerRoute } from '@hapi/hapi';
import { saveNote, renderNote } from '../controllers/noteController';
import { fileUpload } from '../utils/fileUpload';

const noteRoutes: ServerRoute[] = [
  {
    method: 'POST',
    path: '/notes/save',
    handler: saveNote
  },
  {
    method: 'GET',
    path: '/notes/render/{id}',
    handler: renderNote
  }
];

export default noteRoutes;
