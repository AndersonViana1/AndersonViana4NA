
import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://anderson4na_user:mrTiWXYRJfgd3OEeajqzQNYac9gis2lt@dpg-crh2ont6l47c73c1sb70-a.oregon-postgres.render.com/anderson4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;