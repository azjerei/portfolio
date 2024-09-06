import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";

@Injectable({ providedIn: 'root' })
export class QuotesService {
  public async getQuote(): Promise<string> {
    const url = `${environment.apiUrl}/quote`;
    const request = new Request(url, { method: 'GET' });

    return fetch(request)
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        }
        else {
          return res.json();
        }
      })
      .then((res) => res.quote as string)
      .catch(() => 'Unable to load quote...');
  }
}