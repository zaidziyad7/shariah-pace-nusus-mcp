import { spawn } from 'node:child_process';
const port = Number(process.env.PORT || 8000);
if (!Number.isSafeInteger(port) || port < 1 || port > 65535) throw new Error('Invalid PORT');
const args = [
  '--stdio', './node_modules/.bin/nusus-mcp',
  '--outputTransport', 'streamableHttp',
  '--host', '0.0.0.0',
  '--port', String(port),
  '--streamableHttpPath', '/mcp',
  '--logLevel', 'info'
];
if (process.env.MCP_API_KEY) args.push('--apiKey', process.env.MCP_API_KEY);
const proc=spawn('./node_modules/.bin/supergateway',args,{stdio:'inherit',env:process.env});
proc.on('exit',(code)=>process.exit(code??1));
process.on('SIGTERM',()=>proc.kill('SIGTERM'));
