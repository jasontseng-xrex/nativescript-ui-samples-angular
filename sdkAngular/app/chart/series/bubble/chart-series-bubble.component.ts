import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { ObservableArray } from "data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'chart-series-bubble',
    providers: [CountryService],
    templateUrl: 'chart-series-bubble.component.html'
})
export class ChartSeriesBubbleComponent implements OnInit {
    private _highDataModel: ObservableArray<Country>;
    private _middleDataModel: ObservableArray<Country>;
    private _lowDataModel: ObservableArray<Country>;

    constructor(private _countryService: CountryService) {

    }

    get highDataModel(): ObservableArray<Country> {
        return this._highDataModel;
    }

    get middleDataModel(): ObservableArray<Country> {
        return this._middleDataModel;
    }

    get lowDataModel(): ObservableArray<Country> {
        return this._lowDataModel;
    }

    ngOnInit() {
        this._highDataModel = new ObservableArray(this._countryService.getHighDataModel());
        this._middleDataModel = new ObservableArray(this._countryService.getMiddleDataModel());
        this._lowDataModel = new ObservableArray(this._countryService.getLowDataModel());
    }
}