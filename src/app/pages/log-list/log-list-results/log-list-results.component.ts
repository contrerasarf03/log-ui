import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Logs } from 'src/app/common/models/logs';
import { SearchFilters } from 'src/app/common/models/search-filters';

@Component({
  selector: 'app-log-list-results',
  templateUrl: './log-list-results.component.html',
  styleUrls: ['./log-list-results.component.scss']
})

export class LogListResultsComponent implements OnDestroy, OnInit {
  @Input() dataSource: Logs[]
  @Output() search = new EventEmitter<SearchFilters>()
  @ViewChild('LogResPaginator', { static: true }) logResPaginator: MatPaginator
  scanDisplayedColumns: string[] = ['date', 'user_id', 'requestor', 'validator', 'parameter', 'type', 'status', 'message']
  hasLogs = false
  tableData = new MatTableDataSource()

  constructor() {

  }

  ngOnInit() {
    console.log(this.dataSource)
    if (this.dataSource['logs']) {
      if (this.dataSource['logs'].length > 0) {
        this.hasLogs = true
        this.tableData = this.dataSource['logs']
        this.tableData.paginator = this.logResPaginator
      }
    }
  }

  ngOnDestroy(): void {
  }

  
}

