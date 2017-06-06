export default {
  port: process.env.PORT || 9000,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/plan-your-holiday',
  env: process.env.NODE_ENV || 'development',
  secret: process.env.SECRET || 'such-secret',
  jwtExpiresIn: process.env.JWT_EXPIRE || '7 days'
};
