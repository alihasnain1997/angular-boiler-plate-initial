import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


// const API_URL = 'https://hello.free.beeceptor.com/api/<%= dasherize(name) %>';
const API_URL = 'https://hello.free.beeceptor.com/my/api/path';


@Injectable({
    providedIn: 'root'
})

export class <%= classify(name) %>Service {

    constructor(private httpClient: HttpClient){

    }

    findAll(): Observable <<%= classify(name) %> [] > {
        return this.httpClient.get <<%= classify(name) %> [] > (API_URL);
    }

    create(<%= camelize(name) %> : <%= classify(name) %>): Observable < String > {
        return this.httpClient.post<String>(API_URL, <%= camelize(name) %>);
    }

    update(<%= camelize(name) %> : <%= classify(name) %>): Observable < String > {
        return this.httpClient.put<String>(API_URL, <%= camelize(name) %>);
    }

    delete (id: String): Observable < String > {
        return this.httpClient.delete<String>(API_URL);
    }

}

export class <%= classify(name) %> {
    name: string
}
