import TokenPayload from './TokenPayload';

type ChromeMessagePayload = {
  cmd: string
  data: TokenPayload
};

export default ChromeMessagePayload;
