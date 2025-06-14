import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostLayout2 } from "@/components/blog/layouts/blog-post-layout-2"

export default function NodejsApisPage() {
  const postData = {
    title: "Node.js para Iniciantes: Construindo APIs Robustas",
    excerpt: "Guia prático para criar APIs escaláveis com Node.js, Express e melhores práticas de desenvolvimento.",
    author: "Equipe VierCa",
    date: "5 Dez, 2024",
    readTime: "12 min",
    category: "Desenvolvimento de Sites Codificado",
    image: "⚡",
    content: `
      <p>Node.js revolucionou o desenvolvimento backend ao permitir que desenvolvedores JavaScript criem APIs robustas e escaláveis. Neste guia, você aprenderá desde os conceitos básicos até técnicas avançadas para construir APIs profissionais.</p>

      <h2>Por que Node.js?</h2>
      <p>Node.js oferece várias vantagens para desenvolvimento de APIs:</p>
      
      <ul>
        <li><strong>JavaScript em todo lugar:</strong> Mesma linguagem no frontend e backend</li>
        <li><strong>Performance:</strong> Event loop não-bloqueante</li>
        <li><strong>NPM:</strong> Maior ecossistema de pacotes do mundo</li>
        <li><strong>Escalabilidade:</strong> Ideal para aplicações I/O intensivas</li>
        <li><strong>Comunidade:</strong> Suporte ativo e abundante documentação</li>
      </ul>

      <h2>Configurando o Ambiente</h2>
      
      <h3>Instalação do Node.js</h3>
      <p>Baixe a versão LTS do <a href="https://nodejs.org" target="_blank">site oficial</a> e instale em seu sistema.</p>

      <h3>Inicializando o Projeto</h3>
      <pre><code>mkdir minha-api
cd minha-api
npm init -y</code></pre>

      <h3>Instalando Dependências</h3>
      <pre><code>npm install express cors helmet morgan dotenv
npm install -D nodemon</code></pre>

      <h2>Estrutura Básica da API</h2>
      
      <h3>Arquivo Principal (app.js)</h3>
      <pre><code>const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(helmet()); // Segurança
app.use(cors()); // CORS
app.use(morgan('combined')); // Logs
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true }));

// Rota básica
app.get('/', (req, res) => {
  res.json({ 
    message: 'API funcionando!',
    version: '1.0.0'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(\`Servidor rodando na porta \${PORT}\`);
});</code></pre>

      <h2>Criando Rotas RESTful</h2>
      
      <h3>Estrutura de Pastas</h3>
      <pre><code>projeto/
├── controllers/
├── routes/
├── models/
├── middleware/
├── config/
└── app.js</code></pre>

      <h3>Exemplo de Rota de Usuários</h3>
      <pre><code>// routes/users.js
const express = require('express');
const router = express.Router();

// GET /users - Listar usuários
router.get('/', (req, res) => {
  res.json({ users: [] });
});

// GET /users/:id - Buscar usuário
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ user: { id, name: 'João' } });
});

// POST /users - Criar usuário
router.post('/', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ 
    message: 'Usuário criado',
    user: { id: 1, name, email }
  });
});

// PUT /users/:id - Atualizar usuário
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  res.json({ 
    message: 'Usuário atualizado',
    user: { id, name, email }
  });
});

// DELETE /users/:id - Deletar usuário
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: \`Usuário \${id} deletado\` });
});

module.exports = router;</code></pre>

      <h2>Middlewares Essenciais</h2>
      
      <h3>Middleware de Validação</h3>
      <pre><code>// middleware/validation.js
const validateUser = (req, res, next) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({
      error: 'Nome e email são obrigatórios'
    });
  }
  
  if (!email.includes('@')) {
    return res.status(400).json({
      error: 'Email inválido'
    });
  }
  
  next();
};

module.exports = { validateUser };</code></pre>

      <h3>Middleware de Autenticação</h3>
      <pre><code>// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };</code></pre>

      <h2>Tratamento de Erros</h2>
      
      <h3>Middleware Global de Erro</h3>
      <pre><code>// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Erro de validação
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Dados inválidos',
      details: err.message
    });
  }

  // Erro de duplicação
  if (err.code === 11000) {
    return res.status(409).json({
      error: 'Recurso já existe'
    });
  }

  // Erro padrão
  res.status(500).json({
    error: 'Erro interno do servidor'
  });
};

module.exports = errorHandler;</code></pre>

      <h2>Conectando com Banco de Dados</h2>
      
      <h3>MongoDB com Mongoose</h3>
      <pre><code>// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Erro ao conectar MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;</code></pre>

      <h3>Modelo de Usuário</h3>
      <pre><code>// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);</code></pre>

      <h2>Segurança da API</h2>
      
      <h3>Rate Limiting</h3>
      <pre><code>// middleware/rateLimiter.js
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 requests por IP
  message: {
    error: 'Muitas tentativas, tente novamente em 15 minutos'
  }
});

module.exports = limiter;</code></pre>

      <h3>Sanitização de Dados</h3>
      <pre><code>const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

// Usar nos middlewares
app.use(mongoSanitize()); // Previne NoSQL injection
app.use(xss()); // Previne XSS attacks</code></pre>

      <h2>Testes da API</h2>
      
      <h3>Configurando Jest e Supertest</h3>
      <pre><code>npm install -D jest supertest</code></pre>

      <h3>Exemplo de Teste</h3>
      <pre><code>// tests/users.test.js
const request = require('supertest');
const app = require('../app');

describe('Users API', () => {
  test('GET /users deve retornar lista de usuários', async () => {
    const response = await request(app)
      .get('/users')
      .expect(200);
    
    expect(response.body).toHaveProperty('users');
    expect(Array.isArray(response.body.users)).toBe(true);
  });

  test('POST /users deve criar novo usuário', async () => {
    const userData = {
      name: 'João Silva',
      email: 'joao@email.com'
    };

    const response = await request(app)
      .post('/users')
      .send(userData)
      .expect(201);
    
    expect(response.body.user.name).toBe(userData.name);
    expect(response.body.user.email).toBe(userData.email);
  });
});</code></pre>

      <h2>Documentação da API</h2>
      
      <h3>Swagger/OpenAPI</h3>
      <pre><code>npm install swagger-jsdoc swagger-ui-express</code></pre>

      <pre><code>// config/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API',
      version: '1.0.0',
      description: 'API desenvolvida com Node.js e Express'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desenvolvimento'
      }
    ]
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };</code></pre>

      <h2>Deploy e Produção</h2>
      
      <h3>Variáveis de Ambiente</h3>
      <pre><code># .env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb://localhost:27017/minha-api
JWT_SECRET=seu-jwt-secret-super-seguro</code></pre>

      <h3>Scripts do Package.json</h3>
      <pre><code>{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}</code></pre>

      <h2>Monitoramento e Logs</h2>
      
      <h3>Winston para Logs</h3>
      <pre><code>const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}</code></pre>

      <h2>Melhores Práticas</h2>
      
      <ul>
        <li><strong>Versionamento:</strong> Use /api/v1/ nas rotas</li>
        <li><strong>Status Codes:</strong> Use códigos HTTP apropriados</li>
        <li><strong>Paginação:</strong> Implemente para listas grandes</li>
        <li><strong>Cache:</strong> Use Redis para dados frequentes</li>
        <li><strong>Validação:</strong> Valide todos os inputs</li>
        <li><strong>Logs:</strong> Registre operações importantes</li>
        <li><strong>Testes:</strong> Mantenha cobertura alta</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Construir APIs robustas com Node.js requer atenção a detalhes como segurança, performance, testes e documentação. Seguindo as práticas apresentadas neste guia, você estará preparado para criar APIs profissionais e escaláveis.</p>

      <p>Na VierCa, utilizamos essas técnicas em todos os nossos projetos backend, garantindo APIs confiáveis e performáticas para nossos clientes.</p>

      <p>Precisa de uma API customizada para seu projeto? <a href="/contato" class="text-blue-600 hover:underline">Entre em contato</a> e vamos desenvolver a solução perfeita para você!</p>
    `,
  }

  return (
    <div className="min-h-screen">
      <Header />
      <BlogPostLayout2 post={postData} />
      <Footer />
    </div>
  )
}
