import "dotenv/config"

export const {
  PORT,
  NODE_ENV,
  EXPIRES_IN,
  LOCAL_DB,
  JWT_SECRET,
  JWT_EXPIRES,
  COOKIE_EXPIRES,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASSWORD,
  GOOGLE_PLUS_CLIENT_ID,
  GOOGLE_PLUS_CLIENT_SECRET,
  PAYSTACK_SECRET,
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY,
  CLIENT_BASE_URL,
  CORS_ORIGIN,
  GOOGLE_REDIRECT_URI,
  OPEN_AI_URL,
  OPEN_AI_KEY,
} = process.env
