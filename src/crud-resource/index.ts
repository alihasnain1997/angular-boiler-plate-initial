import { strings } from '@angular-devkit/core';
import {
  Rule,
  SchematicContext,
  Tree,
  url,
  apply,
  mergeWith,
  template,
  forEach,
  FileEntry
} from '@angular-devkit/schematics';

import { Schema } from './schema'

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function crudResource(_options: Schema): Rule {

  return (tree: Tree, _context: SchematicContext) => {


    //   const rule = mergeWith(
    //     apply(url('./files'), [
    //         template({ ..._options }),
    //         forEach((fileEntry: FileEntry) => {
    //             // Just by adding this is allows the file to be overwritten if it already exists
    //             if (tree.exists(fileEntry.path)) return null;
    //             return fileEntry;
    //         })

    //     ])
    // );

    // return rule(tree, _context);
    const sourceTemplates = url('./files')
    const sourceParameterizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings
      }),
      forEach((fileEntry: FileEntry) => {
        if (tree.exists(fileEntry.path)) {
          tree.overwrite(fileEntry.path, fileEntry.content)
          return null
        }
        return fileEntry

      })
    ]);

    return mergeWith(sourceParameterizedTemplates)(tree, _context)


    // const { name } = _options;

    // tree.create('hello.js', `console.log('Hello ${name}!' )`)

    // return tree;
  };
}
