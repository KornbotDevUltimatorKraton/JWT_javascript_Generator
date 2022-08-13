const toBase64 = obj => {
   // converts the obj to a string
   const str = JSON.stringify (obj);
   // returns string converted to base64
   return Buffer.from(str).toString ('base64');
};
function b64(str) {
  return new Buffer(str).toString('base64')
  .replace(/=/g, '')
  .replace(/\+/g, '-')
  .replace(/\//g, '_');
  }
  function encode(h, p) {
  const headerEnc = b64(JSON.stringify(h));
  const payloadEnc = b64(JSON.stringify(p));
  return `${headerEnc}.${payloadEnc}`;
  }
function encode(h, p) {
    const headerEnc = b64(JSON.stringify(h));
    const payloadEnc = b64(JSON.stringify(p));
    return `${headerEnc}.${payloadEnc}`;
}
function decode(jwt) {
  const [headerB64, payloadB64] = jwt.split('.');
  // These supports parsing the URL safe variant of Base64 as well.
  const headerStr = new Buffer(headerB64, 'base64').toString();
  const payloadStr = new Buffer(payloadB64, 'base64').toString();
  return {
  header: JSON.parse(headerStr),
  payload: JSON.parse(payloadStr)
  };
}
const header = {
  alg: 'HS256',
  typ: 'JWT',
};

const encode_payload = encode("key_data","values_data"); 
console.log(encode_payload);
//const decode_payload = decode(encode_payload); 
//console.log(decode_payload);
//const decode_payload = decode(b64Header); 
//console.log(decode_payload);
//const jwtB64Header = replaceSpecialChars(header);
//oconsole.log("the header is: ",jwtB64Header); 

