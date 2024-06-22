import Hapi from '@hapi/hapi';
import noteRoutes from './routes/noteRoutes';
import grammarRoutes from './routes/grammarRoutes';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(noteRoutes);
    server.route(grammarRoutes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
