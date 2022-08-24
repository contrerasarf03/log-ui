import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LogService } from 'src/app/api/log.service';
import { SearchFilters } from 'src/app/common/models/search-filters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() search = new EventEmitter<SearchFilters>()
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  hasNotificationsEnabled: boolean
  dateToday = new Date()
  banks = []

  searchForm = this.formBuilder.group({
    start_date: [''],
    end_date: [''],
    requestor: ['', Validators.required],
    validator: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private logService: LogService) {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.logService.listBanks().subscribe(res => {
      res['banks'].forEach((bank) => {
        this.banks.push(bank.id)
      })
    })
  }

  submit() {
    if (this.searchForm.valid) {
      this.search.emit(this.searchForm.getRawValue() as SearchFilters)
    }
  }
}
