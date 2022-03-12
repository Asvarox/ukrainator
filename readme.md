Script that gradually changes Polish texts to phonetic counterparts from Ukrainian alphabet. 

## Requirements
* Node (see `.nvmrc` for version)
* Yarn

## Usage
1. Put the text you want to transform to `text.txt`
2. Run `yarn` if it's the first run.
3. Run `yarn ts-node src/translate.ts`

## Example output
See [example-output.md](./example-output.md) file.
```shell
yarn --silent ts-node src/translate.ts > example-output.md
```

## Limitations:
1. ą, ę are wrongly translated to аь/еь.
