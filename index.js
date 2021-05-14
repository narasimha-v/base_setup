import express from 'express';
import testRoutes from './routes/route.js';

const PORT = 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/test', testRoutes);
app.get('/', (req, res) => res.json({ message: 'api is responding' }));

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
