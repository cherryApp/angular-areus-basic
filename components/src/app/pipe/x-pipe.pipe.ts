import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xPipe',
})
export class XPipePipe implements PipeTransform {

  transform(
    value: unknown,
    transformers: PipeTransform[] | undefined,
    transformerArgs: any[][] | undefined
  ): unknown {
    if (!transformers) {
      return value;
    }

    let output = value;

    for (let i = 0; i < transformers.length; i++) {
      let args = transformerArgs ? transformerArgs[i] || [] : [];
      if (transformers[i].transform !== undefined) {
        output = transformers[i].transform(output, ...args);
      } else {
        output = (transformers[i] as unknown as Function)(output, ...args);
      }
    }

    return output;
  }

}
