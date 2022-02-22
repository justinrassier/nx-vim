import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // If you do a lua vim.lsp.buf.references() on this, you only get results from this lib
  getDataFromServer() {
    return EMPTY;
  }
}
