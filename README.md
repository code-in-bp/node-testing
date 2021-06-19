## Practicing TDD with
- Mocha, 
- Chai, 
- Sinon (Spy, Stub), 
- nyc (Istanbul) (code coverage), 
- unit testing and integration testing

### getting started Resources
    * https://sinonjs.org/releases/latest/spies/
    * https://www.youtube.com/watch?v=lvjDDn9cpL4&list=PLgbtO1Bcz4C-vU0JLfDBsZGbSUdNX4mQ8&index=3
    * https://adrianhall.github.io/web/2018/07/04/run-typescript-mocha-tests-in-vscode/
    
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



### How to run
    * Test -> `npm run test`
    * Lint -> `npm run lint`
    * Coverage -> `npm run coverage`
    * build -> `npm run build`

### Run mongoDB on docker
    * in terminal, `sudo docker-compose up -d` 

### Stop mongodb on docker
    * `sudo docker ps`
    * in terminal, `sudo docker stop CONTAINER_ID`
