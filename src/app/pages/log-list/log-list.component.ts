import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { LogService } from 'src/app/api/log.service';
import { SearchFilters } from 'src/app/common/models/search-filters';
import * as moment from 'moment';
import { Logs } from 'src/app/common/models/logs';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnDestroy, OnInit {
  scanDisplayedColumns: string[] = ['date', 'user_id', 'requestor', 'validator', 'parameter', 'type', 'status', 'message']
  logs: Logs[]
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  hasNotificationsEnabled: boolean
  searching: boolean

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private logService: LogService) {
    this.mobileQuery = media.matchMedia('(max-width: 740px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addListener(this._mobileQueryListener)
    this.logs = []
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  search(filters: SearchFilters) {
    this.searching = true
    filters.start_date = moment(filters.start_date).format();
    filters.end_date = moment(filters.end_date).endOf('day').format()

    this.logService.searchLogs(filters).subscribe(res => {
      this.logs = <Logs[]>(res || [])
      this.searching = false
    })
  }

}
