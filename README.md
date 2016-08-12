> This is not faas.
> This is event not a prototype. Just looking for ideas.
> Dont meet this repo with serious intentions

# Faas web client example


How to run:

   - clone https://github.com/noserver-js/function-examples
   - run *faas* at *function-examples* repo
   - clone this repo https://github.com/noserver-js/web-example
   - *npm i && npm run start*


How to run (detailed):

To run example should be setuped:
 - [faas cli to start faas server](https://github.com/noserver-js/faas)
 - [functions examples](https://github.com/noserver-js/function-examples)
 - [link faas-client](https://github.com/noserver-js/faas-client). Because it is not pushed to npm
 - [web-example](https://github.com/noserver-js/web-example)

Link faas as npm package because it is not published at npm
```bash
git clone https://github.com/noserver-js/faas
cd faas
npm link faas
```

Clone function examples repository
```bash
git clone https://github.com/noserver-js/function-examples
cd function-examples
npm link faas

faas --help
faas server
```
Link faas client

```bash
git clone https://github.com/noserver-js/faas-client
cd faas-clint
npm i
npm link
````

Clone and run web example

```bash
git clone https://github.com/noserver-js/web-example
cd web-example
npm i
npm link faas-client
npm run start
```
