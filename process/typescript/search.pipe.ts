import {Pipe} from 'angular2/core';

@Pipe({
    name: 'find'
})

export class SearchPipe {
    transform(pipe, [pipeModifier]) {
        return pipeData.filter((eachItem) => {
            return eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
                eachItem['rekonwn'].toLowerCase().includes(pipeModifier.toLowerCase());
        });
    }
}