## Practicing TDD with
- Mocha, 
- Chai, 
- Sinon (Spy, Stub), 
- nyc (Istanbul) (code coverage), 
- unit testing and integration testing

### getting started Resources
    *  https://sinonjs.org/releases/latest/spies/
    * https://www.youtube.com/watch?v=lvjDDn9cpL4&list=PLgbtO1Bcz4C-vU0JLfDBsZGbSUdNX4mQ8&index=3
    
### setup vsCode debugger for typescript
tsconfig.json
```
{
  "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "sourceMap": true,
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "forceConsistentCasingInFileNames": true
```


.vscode/lunch.json
```
{
  "version": "0.2.0",
  "configurations": [
      {
          "type": "node",
          "request": "launch",
          "name": "Mocha Tests",
          "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
          "args": [
              "--require", "ts-node/register",
              "-u", 
              "bdd",
              "--timeout", "999999",
              "--colors", "--recursive",
              "${workspaceFolder}/test/**/*.ts"
          ],
          "internalConsoleOptions": "openOnSessionStart"
      }
  ]
}

```
