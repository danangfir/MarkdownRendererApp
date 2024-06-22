import Hapi from '@hapi/hapi';
import { expect } from 'chai';
import supertest from 'supertest';
import noteRoutes from '../routes/noteRoutes';

describe('Note API', () => {
  let server: Hapi.Server;

  before(async () => {
    server = Hapi.server({ port: 4000 });
    server.route(noteRoutes);
    await server.start();
  });

  after(async () => {
    await server.stop();
  });

  it('should save a note', async () => {
    const response = await supertest(server.listener)
      .post('/notes/save')
      .send({ markdown: '# Test Note' })
      .expect(201);

    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('markdown', '# Test Note');
  });

  it('should render a note to HTML', async () => {
    const saveResponse = await supertest(server.listener)
      .post('/notes/save')
      .send({ markdown: '# Test Note' })
      .expect(201);

    const noteId = saveResponse.body.id;

    const renderResponse = await supertest(server.listener)
      .get(`/notes/render/${noteId}`)
      .expect(200);

    expect(renderResponse.text).to.include('<h1>Test Note</h1>');
  });
});
