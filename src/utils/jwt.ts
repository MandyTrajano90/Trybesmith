import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/Token';

const secret = process.env.JWT_SECRET || 'mysecret';

function signToken(payload: TokenPayload): string {
  return jwt.sign(payload, secret);
}

function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, secret) as TokenPayload;
}

export default {
  signToken,
  verifyToken,
};