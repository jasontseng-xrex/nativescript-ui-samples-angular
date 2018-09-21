import { Component } from "@angular/core";
import { Person } from "../data-services/person";

const personNested = require('../data-services/person-model-nested.json');
const personMetadata = require('../data-services/person-metadata.json');

@Component({
    moduleId: module.id,
    selector: "tk-dataform-properties-json",
    templateUrl: "dataform-properties-json.component.html"
})
export class DataformPropertiesJsonComponent {
    private _personMetadata;
    private _person: Person;

    constructor() {
        this._person = JSON.parse(JSON.stringify(personNested));
        this._personMetadata = JSON.parse(JSON.stringify(personMetadata));
    }

    get personMetadata() {
        return this._personMetadata;
    }

    set personMetadata(value) {
        this._personMetadata = value;
    }

    get person(): Person {
        return this._person;
    }

    set person(value: Person) {
        this._person = value;
    }
}
