import app from './app';
import { log } from './utils/utils';

const port = process.env.PORT || 3000;

log('Starting server');
app.listen(port, () => {
    log(`Server is running on port ${port}`);
});
