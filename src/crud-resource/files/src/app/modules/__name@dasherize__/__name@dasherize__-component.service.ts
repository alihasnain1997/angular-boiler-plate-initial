import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable,BehaviorSubject } from 'rxjs';


// const API_URL = 'https://hello.free.beeceptor.com/api/<%= dasherize(name) %>';
// const API_URL = 'https://hello.free.beeceptor.com/my/api/path';
const API_URL = 'http://localhost:3000';



@Injectable({
    providedIn: 'root'
})

export class <%= classify(name) %>Service {

    private <%= camelize(name) %>State = new BehaviorSubject<<%= classify(name) %>[]>(null);
    <%= camelize(name) %>State$ = this.<%= camelize(name) %>State.asObservable();

    get<%= classify(name) %>State() {
        return this.<%= camelize(name) %>State$
    }

    set<%= classify(name) %>State(<%= camelize(name) %>:<%= classify(name) %> []) {
        this.<%= camelize(name) %>State.next(<%= camelize(name) %>)
    }
    constructor(private httpClient: HttpClient){

    }

    findOne(id) {
        this.httpClient.get<<%= classify(name) %>>(`${API_URL}/<%= camelize(name) %>s/${id}`).subscribe(res => {
            let <%= camelize(name) %> = []
            <%= camelize(name) %>.push(res)
            this.set<%= classify(name) %>State(<%= camelize(name) %>)
        });
    }

    findAll(){
        this.httpClient.get <<%= classify(name) %> [] > (`${API_URL}/<%= camelize(name) %>s`).subscribe(res=>{
           this.set<%= classify(name) %>State(res) 
        });
    }

    create(<%= camelize(name) %> : <%= classify(name) %>): Observable < String > {
        return this.httpClient.post<String>(`${API_URL}/<%= camelize(name) %>s`, <%= camelize(name) %>);
    }

    update(<%= camelize(name) %> : <%= classify(name) %>): Observable < String > {
        return this.httpClient.put<String>(`${API_URL}/<%= camelize(name) %>s/${<%= camelize(name) %>._id}`, <%= camelize(name) %>);
    }

    delete (id: String): Observable < String > {
        return this.httpClient.delete<String>(`${API_URL}/<%= camelize(name) %>s/${id}`);
    }

}

export class <%= classify(name) %> {
    name: string
}
