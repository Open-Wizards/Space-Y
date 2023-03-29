
export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      PORT: string;
      JWT_SECRET: string;
    }
  }
  namespace Express {
    export interface Request {
      user?: {
        id: string;
      };
    }
  }
}
