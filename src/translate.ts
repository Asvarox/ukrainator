import {Mapping, mappings} from './mappings';
import {capitalize, chunk, maxBy, uniq} from "lodash";
import { readFileSync } from 'fs';

const text = readFileSync('./text.txt', { encoding: 'utf-8' });

const expanded = mappings.reduce<Mapping[][]>((acc, val) => ([
    ...acc,
    [
        ...val,
        ...val.map(map => ({ ...map, from: capitalize(map.from), to: capitalize(map.to) })),
        ...val.map(map => ({ ...map, from: map.from.toUpperCase(), to: map.to.toUpperCase() })),
    ],
]), []);


const applyMapping = (text: string, mappings: Mapping[]): string => {
    let resultText = text;

    mappings.forEach(chars => {
        resultText = resultText.replaceAll(chars.from, chars.to);
        chars.revert.forEach(toRevert => {
            resultText = resultText.replaceAll(toRevert, toRevert.replace(chars.to, chars.from));
            resultText = resultText.replaceAll(capitalize(toRevert), capitalize(toRevert).replace(chars.to, chars.from));
            resultText = resultText.replaceAll(toRevert.toUpperCase(), toRevert.toUpperCase().replace(chars.to.toUpperCase(), chars.from.toUpperCase()));
        })
    });

    return resultText;
}

const countReplacements = (text: string, mappings: Mapping[]): number => {
    const replacedText = applyMapping(text, mappings);
    let replacements = 0;

    mappings.forEach(mapping => {
        replacements += replacedText.split(mapping.to).length - 1
    });

    return replacements;
}

const sentences = text.split('.').slice(0, -1);
const chunkSize = Math.floor(sentences.length / expanded.length);

const paragraphs = chunk(sentences, chunkSize)
    .map(sentences => sentences.join('.'))
    .map(text => ({ transforms: [] as [string, string][], text }));

const orderedMappings = paragraphs.map(paragraph => {
    const bestMapping = maxBy(expanded, mapping => countReplacements(paragraph.text, mapping));

    if (!bestMapping) return undefined;

    expanded.splice(expanded.indexOf(bestMapping), 1);

    return bestMapping;
}).filter((mapping): mapping is Mapping[] => !!mapping);

for (let i = 0; i < orderedMappings.length; i++) {
    paragraphs[i + 1].transforms = orderedMappings[i].map(map => [map.from, map.to]);
    for (let p = i + 1; p < paragraphs.length; p++) {
        paragraphs[p].text = applyMapping(paragraphs[p].text, orderedMappings[i]);
    }
}

const toTransformNote = (transforms: [string, string][]) => {
    const uniqueTransforms = uniq(transforms.filter(([from]) => from === from.toLowerCase()));

    const maps = uniqueTransforms.reduce<Record<string, string[]>>((acc, [from, to]) => {
        if (to in acc) {
            acc[to].push(from);
        } else {
            acc[to] = [from];
        }

        return acc;
    }, {})

    return Object.entries(maps).map(([to, froms]) => `${to.toLowerCase()} ${capitalize(to)} = ${froms.join(', ')}`).join('; ')
}


paragraphs.forEach(paragraph => {
    if (paragraph.transforms.length) console.log(`[${toTransformNote(paragraph.transforms)}]`);
    console.log(paragraph.text + '.');
})